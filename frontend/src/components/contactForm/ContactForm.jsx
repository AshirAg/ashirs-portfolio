import styles from "./ContactForm.module.css";
import Button from "../micro-components/button/Button.jsx";
import { useState, useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

function Toast({ message, type, onClose }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (!message) return;

    setIsFadingOut(false); // reset fade out

    // Start timer to fade out after 3 seconds
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  // When fade out animation ends, call onClose to unmount
  const handleAnimationEnd = () => {
    if (isFadingOut) {
      onClose();
    }
  };

  if (!message) return null;

  return (
    <div
      className={`${styles.toast} ${isFadingOut ? styles.fade_out : ""}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {type === "success" ? <AiOutlineCheckCircle /> : <AiOutlineCloseCircle />}
      <p className={styles.message}>{message}</p>
    </div>
  );
}

function ContactForm(){

    const initialValues = { name: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [toast, setToast] = useState({ message: "", type: ""});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues({ ...formValues, [name]: value });

        // Live validate this field only
        setFormErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            const fieldError = validateField(name, value);
            if (fieldError) {
                newErrors[name] = fieldError;
            } else {
                delete newErrors[name];
            }
            return newErrors;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        setIsSubmit(true);

        if (Object.keys(errors).length === 0) {
            const botToken = "Your Bot Token";
            const chatId = "Your Chat Id";
            const text = `
[[ 💬 New Message ]]
+ Name: ${formValues.name}
+ Email: ${formValues.email}
+ Message: ${formValues.message}
            `;

            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: "Markdown"
            })
            })
            .then(res => res.json())
            .then(data => {
                setFormValues(initialValues);
                setToast({message: "Your message is sent to me successfully.", type: "success"})
            })
            .catch(err => {
                console.error("Error sending message", err);
                setToast({message: "Your message was not sent!", type: "failed"})
            });
        }
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);

    // Validation for all fields
    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.name.trim()) {
            errors.name = "Name is required!";
        }

        if (!values.email.trim()) {
            errors.email = "Email is required!";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email!";
        }

        if (!values.message.trim()) {
            errors.message = "Message is required!";
        }

        return errors;
    };

    // Validation for a single field
    const validateField = (name, value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        switch (name) {
            case "name":
                if (!value.trim()) return "Name is required!";
                break;
            case "email":
                if (!value.trim()) return "Email is required!";
                if (!emailRegex.test(value)) return "Invalid email!";
                break;
            case "message":
                if (!value.trim()) return "Message is required!";
                break;
            default:
                return null;
        }
        return null;
    };

    return (
        <>
        <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({ message: "", type: "" })}
        />
        <div className={`section ${styles.form_section}`}>
            <div className={`container ${styles.form_container}`}>
                <h2>Leave a message</h2>
                <form onSubmit={handleSubmit} method="POST">
                    <div className={styles.dual_inputs}>
                        <div className={styles.inputContainer}>
                            <input
                                className={styles.inputField}
                                type="text"
                                placeholder="Name"
                                id="name"
                                name="name"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                            <span className={styles.error}>{formErrors.name}</span>
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                className={styles.inputField}
                                type="text"
                                placeholder="Email"
                                id="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            <span className={styles.error}>{formErrors.email}</span>
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <textarea
                            className={styles.inputField}
                            name="message"
                            id="message"
                            placeholder="Say Something – I’m open to projects, questions, and hellos..."
                            value={formValues.message}
                            onChange={handleChange}
                        ></textarea>
                        <span className={styles.error}>{formErrors.message}</span>
                    </div>
                    <Button className="button_secondary">Send Message</Button>
                    <p className={styles.agree_to_policy}>
                        Sending a message means you’re cool with our Privacy Policy.
                    </p>
                </form>
            </div>
        </div>
        </>
    );
}

export default ContactForm;

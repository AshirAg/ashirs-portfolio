import styles from "./ContactForm.module.css";
import Button from "../micro-components/button/Button.jsx";

function ContactForm(){
    return(
        <div className={`section ${styles.form_section}`}>
            <div className={`container ${styles.form_container}`}>
                <h2>Leave a message</h2>
                <form action="">
                    <div className={styles.dual_inputs}>
                        <div className={styles.inputContainer}>
                            <input className={styles.inputField} type="text" placeholder="Name" id="name" />
                            <span className={styles.error} id="nameError"></span>
                        </div>
                        <div className={styles.inputContainer}>
                            <input className={styles.inputField} type="email" placeholder="Email" id="email" />
                            <span className={styles.error} id="emailError"></span>
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <textarea className={styles.inputField} name="message" id="message" placeholder="Say Something – I’m open to projects, questions, and hellos"></textarea>
                        <span className={styles.error} id="messageError"></span>
                    </div>
                    <Button className="button_secondary">Send Message</Button>
                </form>
            </div>
        </div>
    )
}


export default ContactForm;
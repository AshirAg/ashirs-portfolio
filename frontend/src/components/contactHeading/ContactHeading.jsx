import styles from "./ContactHeading.module.css"
import Links from "../micro-components/links/Links.jsx";

function ContactHeading(){
    return(
        <div className="section">
            <div className="container">
                <div className={styles.contact_heading}>
                    <h1>Contact Me</h1>
                    <p className={styles.text}>Interested in working together? Feel free to contact me through any of the links below for projects, ideas, or general inquiries.</p>

                    <Links />


                </div>
            </div>
        </div>
    )
}

export default ContactHeading
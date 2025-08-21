import styles from "./ContactHeading.module.css"

import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

function ContactHeading(){
    return(
        <div className="section">
            <div className="container">
                <div className={styles.contact_heading}>
                    <h1>Contact Me</h1>
                    <p className={styles.text}>Interested in working together? Feel free to contact me through any of the links below for projects, ideas, or general inquiries.</p>

                    <div className={styles.contact_links}>
                        <div className={styles.contact_link}>
                            <a href="https://github.com/AshirAg"><LuGithub/><span>AshirAg</span></a>
                        </div>
                        <div className={styles.contact_link}>
                            <a href="https://linkedin.com/in/ashir-agrawal"><LuLinkedin/><span>ashir-agrawal</span></a>
                        </div>
                        <div className={styles.contact_link}>
                            <a href="mailto: work@ashiragrawal.com.np"><MdOutlineMailOutline/><span>work@ashiragrawal.com.np</span></a>
                        </div>
                        <div className={styles.contact_link}>
                            <a href="https://threads.com/good_times_with_ashir"><FaThreads/><span>good_times_with_ashir</span></a>
                        </div>
                        {/* <div className={styles.contact_link}>
                            <a href="https://instagram.com/good_times_with_ashir"><FaInstagram/><span>good_times_with_ashir</span></a>
                        </div> */}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ContactHeading
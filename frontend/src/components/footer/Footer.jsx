import styles from "./Footer.module.css"
import { Link } from "react-router-dom"

function Footer(){
    const year = new Date().getFullYear();
    return(
        <div className={`${styles.section} section`}>
            <div className="container">
                <div className={styles.copyright_content}>
                    <p className={styles.copyright}>&copy; {year} ashiragrawal.com.np - All rights reserved.</p>
                    
                    <Link className={styles.link} to="/privacy-policy">Privacy policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
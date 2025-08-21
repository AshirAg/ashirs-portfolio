import styles from './Hero.module.css'
import ProfileImage from "../micro-components/profileImage/ProfileImage.jsx";
import ProfileInfo from "../micro-components/profileInfo/ProfileInfo.jsx";
import Button from "../micro-components/button/Button.jsx";

function Hero(){
    return(
        <>
        <div className="section">
            <div className="container">
                <div className={styles.profile}>
                    <ProfileImage />
                    <ProfileInfo />
                </div>
                <div className={styles.button_container}>
                    <Button to='/contact'>Get in Touch</Button>
                    <Button to='/projects'>My Projects</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;
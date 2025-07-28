import styles from './ProfileImage.module.css'
import profileImage from '../../../assets/images/profile-image.jpg'
import sunGlass from '../../../assets/images/sun-glass.png'

function ProfileImage(){
    return(
        <>
        <div className={styles.outer_ring}>
            <div className={styles.image_container}>
                <img className={styles.profile_image} src={profileImage} alt="Profile Image" />
                <img className={styles.emoji} src={sunGlass} alt='SunGlass' />
            </div>
        </div>
        </>
    )
}

export default ProfileImage;
import styles from './ProfileImage.module.css'
import profileImage from '../../../assets/images/profile-image.webp'
import sunGlass from '../../../assets/images/sun-glass.png'

function ProfileImage(){
    return(
        <>
        <div className={styles.outer_ring}>
            <div className={styles.image_container}>
                <img className={styles.profile_image} src={profileImage} alt="Profile Image" height={230} width={230}/>
                <img className={styles.emoji} src={sunGlass} alt='SunGlass' width={130} />
            </div>
        </div>
        </>
    )
}

export default ProfileImage;
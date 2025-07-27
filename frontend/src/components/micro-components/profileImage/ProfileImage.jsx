import styles from './ProfileImage.module.css'
import profileImage from '../../../assets/images/profile-image.jpg'

function ProfileImage(){
    return(
        <>
        <div className={styles.outer_ring}>
            <div className={styles.image_container}>
                <img src={profileImage} alt="Profile Image" />
            </div>
        </div>
        </>
    )
}

export default ProfileImage;
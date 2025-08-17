import { useEffect } from "react";
import styles from './ProfileImage.module.css'
import profileImage from '../../../assets/images/profile-image.webp'
import sunGlass from '../../../assets/images/sun-glass.png'

function ProfileImage(){
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = profileImage; // Vite-resolved URL
    link.type = "image/webp";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return(
    <div className={styles.outer_ring}>
      <div className={styles.image_container}>
        <img className={styles.profile_image} src={profileImage} alt="Profile Image" height={230} width={230}/>
        <img className={styles.emoji} src={sunGlass} alt='SunGlass' width={130} />
      </div>
    </div>
  );
}

export default ProfileImage;
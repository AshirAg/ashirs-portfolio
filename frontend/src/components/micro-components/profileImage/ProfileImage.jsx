import styles from './ProfileImage.module.css'

function ProfileImage(){
  return(
    <div className={styles.outer_ring}>
      <div className={styles.image_container}>
        <img fetchPriority="high" className={styles.profile_image} src="/images/profile-image.webp" alt="Profile Image" height={230} width={230}/>
        <img className={styles.emoji} src="/images/sun-glass.webp" alt='SunGlass' width={130} />
      </div>
    </div>
  );
}

export default ProfileImage;
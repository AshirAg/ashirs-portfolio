import styles from './OrgInfo.module.css';
import SaranAuraImage from '../../../assets/images/org/saran-aura.png';
import Tag from '../tag/Tag.jsx';

function OrgInfo(){
    return(
        <div className={styles.content}>
            <p className={styles.timeline}>June 30 - Present</p>
            <div className={styles.org_name}>
                <h3>Saran Aura</h3>
                <Tag children='Contract' />
            </div>
            <p className={styles.role}>Project Manager / Full-Stack Web Developer</p>
            <ul>
                <li>Planned & Designed system architecture, user flow and database structure.</li>
                <li>Designed UI/UX tailored to client’s need.</li>
                <li>Developed Full-Stack web application (Frontend + Backend).</li>
                <li>Performed testing and successfully launched the site.</li>
            </ul>
            <div className={styles.org_img}>
                <img src={SaranAuraImage} alt="Saran Aura" />
            </div>
        </div>
    )
}

export default OrgInfo;
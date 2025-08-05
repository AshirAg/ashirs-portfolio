import styles from './OrgInfo.module.css';
import Tag from '../tag/Tag.jsx';

function OrgInfo({timeline, orgName, workType, role, image, works}){
    return(
        <div className={styles.content}>
            <p className={styles.timeline}>{timeline}</p>
            <div className={styles.org_name}>
                <h3>{orgName}</h3>
                {workType && <Tag>{workType}</Tag>}
            </div>
            <p className={styles.role}>{role}</p>
            <ul>
                {works.map((item, idx) => (
                <li key={idx}>{item}</li>
                ))}
            </ul>
            <div className={styles.org_img}>
                <img src={image} alt={orgName} />
            </div>
        </div>
    )
}

export default OrgInfo;
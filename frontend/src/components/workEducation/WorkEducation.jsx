import styles from './WorkEducation.module.css';
import OrgInfo from '../micro-components/orgInfo/OrgInfo.jsx';

function WorkEducation() {

    return (
        <div className={`section ${styles.section}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.tabs_button}>
                    <button className={styles.active}>Work</button>
                    <button>Education</button>
                </div>
                <div className={styles.box}>
                    <div className={styles.inner_box}>
                        <OrgInfo></OrgInfo>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default WorkEducation;

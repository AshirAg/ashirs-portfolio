import styles from './WorkEducation.module.css';
import OrgInfo from '../micro-components/orgInfo/OrgInfo.jsx';
import { useState } from 'react';
import Work from '../work/Work.jsx';
import Education from '../education/Education.jsx';

function WorkEducation() {

    const[activeTab, setActiveTab] = useState('work');

    return (
        <div className={`section ${styles.section}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.tabs_button}>
                    <button className={`${activeTab === 'work' ? styles.active : ''}`}
                            onClick={() => setActiveTab('work')}>
                        Work
                    </button>
                    <button className={`${activeTab === 'education' ? styles.active : ''}`}
                            onClick={() => setActiveTab('education')}>
                        Education
                    </button>
                </div>
                <div className={styles.box}>
                    <div className={styles.inner_box}>
                        {activeTab === 'work'? <Work /> : <Education />}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default WorkEducation;

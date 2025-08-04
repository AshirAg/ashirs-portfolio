import styles from './WorkEducation.module.css';

function WorkEducation() {

    return (
        <div className={`section ${styles.section}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.tabs_button}>
                    <button className={styles.active}>Work</button>
                    <button>Education</button>
                </div>
            </div>
        </div>
    );
}

export default WorkEducation;

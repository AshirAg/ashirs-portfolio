import styles from './Test.module.css'


function Test(){
    return(
        <>
        <h3>Testing</h3>
        <p>Hello World</p>

        <div className={styles.test}>
            <button className={styles.button_primary}>Primary Button</button>
            <button className={styles.button_primary}>Primary Button</button>
        </div>

        <button className={`${styles.button_primary} ${styles.md}`}>Primary Button md</button>
        <br />
        <button className={`${styles.button_primary} ${styles.sm}`}>Primary Button sm</button>
        <button className={`${styles.button_primary} ${styles.sm}`}><span>Hi</span><span>There</span></button>
        <br />
        <button className={styles.button_secondary}>Secondary Button</button>
        </>
    )
}

export default Test;
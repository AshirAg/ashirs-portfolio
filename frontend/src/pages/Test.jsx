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
        <br />
        <button className={`${styles.button_primary} ${styles.md}`}>Primary Button md</button>
        <br />
        <button className={`${styles.button_primary} ${styles.sm}`}>Primary Button sm</button>
        <br />
        <button className={`${styles.button_primary} ${styles.sm}`}><span>Hi</span><span>There</span></button>
        <br />
        <button className={`${styles.button_secondary} ${styles.md}`}>Secondary Button</button>
        <br />
        <h1>Ashir Agrawal Hello lg</h1>
        <h2>Ashir Agrawal Hello md</h2>
        <h3>Ashir Agrawal Hello sm</h3>
        <br />
        <div className={`${styles.card}`}>
            <p className={styles.date}>June 2025</p>
            <h3>Title or Heading</h3>
            <p className={styles.info}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum itaque deserunt cum ex laboriosam temporibus iusto cupiditate quaerat rerum error.</p>
        </div>
        </>
    )
}

export default Test;
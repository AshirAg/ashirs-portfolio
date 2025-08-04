import styles from "./Tag.module.css";

function Tag({children = "Tag"}){
    return(
        <div className={styles.tag}>
            {children}
        </div>
    )
}

export default Tag;
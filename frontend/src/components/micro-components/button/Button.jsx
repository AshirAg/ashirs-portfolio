import styles from './Button.module.css'

function Button({children = "Button", className = "button_primary", icon = null}){
    const classList = className
        .split(' ')
        .map(cls => styles[cls] || cls)
        .join(' ');
    return(
        <>
        <button className={classList}>
            {children}
            {icon && <span className={styles.icon}>{icon}</span>}

        </button>
        </>
    )
}

export default Button;
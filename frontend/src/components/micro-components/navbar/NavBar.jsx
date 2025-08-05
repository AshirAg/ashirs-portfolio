import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

function NavBar(){
    return(
        <div className={`${styles.navbar_section}`}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/contact">Contact</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/projects">Projects</NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
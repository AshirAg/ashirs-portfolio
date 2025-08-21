import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'
import { Gamepad2, Joystick } from "lucide-react";

function NavBar(){
    return(
        <div className={`${styles.navbar_section} section`}>
            <div className={`${styles.container} container`}>
                <div className={styles.links}>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/contact">Contact</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/projects">Projects</NavLink>
                </div>
                <NavLink  className={({ isActive }) => `${isActive ? styles.active : ""} ${styles.games}`} to="/games">
                    {/* <Gamepad2 /> */}
                    <Joystick />
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;
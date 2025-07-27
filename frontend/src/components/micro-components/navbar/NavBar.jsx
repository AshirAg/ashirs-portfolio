import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar(){
    return(
        <div className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
        </div>
    );
}

export default NavBar;
import styles from "./Links.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

function Links(){
    return(
        <div className={styles.links}>
            <a href="https://instagram.com/good_times_with_ashir" aria-label="Instagram Link" target='_blank'><FaInstagram /></a>
            <a href="https://threads.com/good_times_with_ashir" aria-label="Threads Link" target='_blank'><FaThreads /></a>
            <a href="https://github.com/AshirAg"  aria-label="GitHub Link" target='_blank'><LuGithub /></a>
            <a href="mailto: ashiragrawal20@gmail.com" aria-label="Send Email"><MdOutlineMailOutline /></a>
        </div>
    )
}

export default Links;
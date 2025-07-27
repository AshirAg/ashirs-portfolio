import styles from './ProfileInfo.module.css'
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import Button from '../button/Button.jsx';

import { BsFileEarmarkArrowDown } from "react-icons/bs";


function ProfileInfo(){
    return(
        <>
        <div className={styles.profile_info}>
            <h1>Ashir Agrawal</h1>
            <p className={styles.location}><IoLocationOutline /> Biratnagar, Nepal</p>
            <p className={styles.desc}>Full-stack Web Developer focused on building clean & functional websites. Building websites for over 4 years.</p>
            <div className={styles.links}>
                <a href="https://instagram.com/good_times_with_ashir" aria-label="Instagram Link" target='_blank'><FaInstagram /></a>
                <a href="https://threads.com/good_times_with_ashir" aria-label="Threads Link" target='_blank'><FaThreads /></a>
                <a href="https://github.com/AshirAg"  aria-label="GitHub Link" target='_blank'><LuGithub /></a>
                <a href="mailto: ashiragrawal20@gmail.com" aria-label="Send Email"><MdOutlineMailOutline /></a>
                <Button className='sm button_primary' icon={<BsFileEarmarkArrowDown />}>Resume</Button>
            </div>
        </div>
        </>
    )
}

export default ProfileInfo;
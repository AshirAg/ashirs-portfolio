import styles from './ProfileInfo.module.css'
import { IoLocationOutline } from "react-icons/io5";
import Button from '../button/Button.jsx';
import Links from '../links/Links.jsx';

import { BsFileEarmarkArrowDown } from "react-icons/bs";


function ProfileInfo(){
    return(
        <>
        <div className={styles.profile_info}>
            <h1>Ashir Agrawal</h1>
            <p className={styles.location}><IoLocationOutline /> Biratnagar, Nepal</p>
            <p className={styles.desc}>Full-stack Web Developer focused on building clean & functional websites. Building websites for over 4 years.</p>
            <div className={styles.links}>
                <Links />
                <Button className='sm button_primary' icon={<BsFileEarmarkArrowDown />}>Resume</Button>
            </div>
        </div>
        </>
    )
}

export default ProfileInfo;
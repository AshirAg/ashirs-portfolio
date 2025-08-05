import styles from "./ProjectCard.module.css";
import Tag from "../tag/Tag.jsx";
import Button from "../button/Button.jsx";
import { LuLink } from "react-icons/lu";

function ProjectCard(){
    return(
        <div className={styles.project_card}>
            <div className={styles.img_section}>
                <div className={styles.img_container}>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="info">
                <h3 className={styles.project_name}>Jewelry Ecommerce</h3>
                <p className={styles.description}>Fully functional jewelry eCommerce website with integrated payments and an admin dashboard.</p>
                <div className="stacks">
                    <Tag>Figma</Tag>
                </div>
                <div className={styles.buttons}>
                    <Button className="button_secondary sm" icon={<LuLink />}>Visit Site</Button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
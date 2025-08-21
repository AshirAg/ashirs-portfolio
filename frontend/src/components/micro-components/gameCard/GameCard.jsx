import styles from "./GameCard.module.css";
import { Link } from "react-router-dom";
import { Joystick } from "lucide-react";

function GameCard({tag_name, image, game_name, href}){
    return(
        <Link to={href} className={styles.game_card}>
            <div className={styles.game_info}>
                <div className={styles.img_container}>
                    <img src={image} alt={game_name} width={400}/>
                </div>
                <div className={styles.details}>
                    <h3 className={styles.game_name}>{game_name}</h3>
                    <p className={styles.tag_name}>{tag_name}</p>
                </div>
            </div>
            <div className="icon_container">
                <Joystick className={styles.icon} />
            </div>
        </Link>
    )
}

export default GameCard;
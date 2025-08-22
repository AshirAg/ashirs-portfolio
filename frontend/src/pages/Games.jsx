import styles from './css/Games.module.css';
import GameCard from "../components/micro-components/gameCard/GameCard";
import tickTacToe from "../assets/games/thumbnail/tick-tac-toe.webp";
import comingSoon from "../assets/games/thumbnail/coming-soon.svg";
import { Clock, Hourglass, HourglassIcon } from 'lucide-react';
import { Joystick } from "lucide-react";



function Games() {

    const projectData = [
        {
            tag_name: "Multi Player",
            image: tickTacToe,
            game_name: "Tic Tac Toe",
            href: "/game/tic-tac-toe",
            icon: <Joystick />
        },
        {
            tag_name: "Single Player",
            image: comingSoon,
            game_name: "Sudoku",
            icon: <Hourglass />
        },
        {
            tag_name: "Single Player",
            image: comingSoon,
            game_name: "Card Match",
            href: "/game/matching-pairs",
            icon: <Hourglass />
        },
    ]


    return (
        <div className="section">
            <div className={`container ${styles.container}`}>

                <h1>Games</h1>
                <p>Welcome to the games section! Here are some games for you to kill your time. </p>
                <p>These games are my personal hobby projects, games will keep on adding as time passes. Stay tunned for new Games.</p>

                <div className={styles.games_container}>
                    {projectData.map((item, index) => (
                        <GameCard 
                            key={index}
                            image={item.image}
                            game_name={item.game_name}
                            tag_name={item.tag_name}
                            href={item.href}
                            icon={item.icon}
                        />
                    ))}
                </div>


            </div>
        </div>
    );
}

export default Games;
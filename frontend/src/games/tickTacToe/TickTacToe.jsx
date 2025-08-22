import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';

import styles from './TickTacToe.module.css';
import circleIcon from '../../assets/games/tick-tac-toe/circle.webp';
import crossIcon from '../../assets/games/tick-tac-toe/cross.webp';
import Button from '../../components/micro-components/button/Button';

let data = ["", "", "", "", "", "", "", "", ""];

const TickTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [winnerText, setWinnerText] = useState("");
    const player1Ref = useRef(null);
    const player2Ref = useRef(null);
    const cellsRef = useRef([]);

    const toggleTurnClass = () => {
        if (player1Ref.current && player2Ref.current) {
            if (count % 2 === 0) {
                player2Ref.current.classList.add(styles.turn);
                player1Ref.current.classList.remove(styles.turn);
            } else {
                player1Ref.current.classList.add(styles.turn);
                player2Ref.current.classList.remove(styles.turn);
            }
        }
    };

    const toggle = (e, num) => {
        if (lock || data[num] !== "") return;

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src="${crossIcon}" alt="cross" class="${styles.cross}">`;
            data[num] = "x";
        } else {
            e.target.innerHTML = `<img src="${circleIcon}" alt="circle" class="${styles.circle}">`;
            data[num] = "o";
        }

        setCount(count + 1);

        if (!winCondition()) {
            if(count === 8) {
                setWinnerText("It's a Draw!");
                setLock(true);
            }else{
                toggleTurnClass();
            }
        }
    };

    const winCondition = () => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let [a, b, c] of winningCombos) {
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                won(data[a], [a, b, c]);
                return true;
            }
        }
        return false;
    };

    const won = (winner, winningCells) => {
        setLock(true);

        if (winner === "x") {
            player1Ref.current.classList.add(styles.won);
            player2Ref.current.classList.remove(styles.won);
            player1Ref.current.classList.add(styles.turn);
            player2Ref.current.classList.remove(styles.turn);
            setWinnerText("Player 1 Wins!");
        } else {
            player2Ref.current.classList.add(styles.won);
            player1Ref.current.classList.remove(styles.won);
            player2Ref.current.classList.add(styles.turn);
            player1Ref.current.classList.remove(styles.turn);
            setWinnerText("Player 2 Wins!");
        }

        winningCells.forEach((i) => {
            if (cellsRef.current[i]) {
                cellsRef.current[i].classList.add(styles.win_cells);
            }
        });
    };

    return (
        <>
        <div className="section">
            <div className={`${styles.container} container`}>
                <div className={styles.title} >
                    <Button to="/games" className='button_primary md'>
                        <HiChevronLeft />
                        {/* Back */}
                    </Button>
                    <h1>Tic Tac Toe</h1>
                </div>
                <div className={styles.dashboard}>
                    <div ref={player1Ref} className={`${styles.player} ${styles.turn}`}>
                        <img src={crossIcon} alt="cross" className={styles.cross} />
                        <span className={styles.player_name}>Player 1</span>
                    </div>
                    <div ref={player2Ref} className={styles.player}>
                        <img src={circleIcon} alt="circle" className={styles.circle} />
                        <span className={styles.player_name}>Player 2</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.board_section} section`}>
            <div className={`${styles.board_container} container`}>
                <h3>{winnerText}</h3>

                <div className={styles.board}>
                    {[0, 1, 2].map((row) => (
                        <div key={row} className={styles.row}>
                            {[0, 1, 2].map((col) => {
                                const index = row * 3 + col;
                                return (
                                    <div
                                        key={index}
                                        ref={(el) => (cellsRef.current[index] = el)}
                                        className={styles.cells}
                                        onClick={(e) => toggle(e, index)}
                                    ></div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                <div>
                    <Button
                        onClick={() => {
                            data = Array(9).fill("");
                            setCount(0);
                            setLock(false);

                            if (player1Ref.current && player2Ref.current) {
                                player1Ref.current.classList.add(styles.turn);
                                player1Ref.current.classList.remove(styles.won);
                                player2Ref.current.classList.remove(styles.turn);
                                player2Ref.current.classList.remove(styles.won);
                                setWinnerText("");
                            }

                            cellsRef.current.forEach((cell) => {
                                if (cell) {
                                    cell.innerHTML = "";
                                    cell.classList.remove(styles.win_cells);
                                }
                            });
                        }}
                    >
                        Play Again
                    </Button>
                </div>
            </div>
        </div>
        </>
    );
};

export default TickTacToe;

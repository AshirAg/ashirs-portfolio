import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';

import styles from './MatchingPairs.module.css';
import circleIcon from '../../assets/games/tick-tac-toe/circle.webp';
import crossIcon from '../../assets/games/tick-tac-toe/cross.webp';
import Button from '../../components/micro-components/button/Button';

import {
  Home,
  Settings,
  Bell,
  Heart,
  Star,
  Camera,
  Music,
  Gamepad2,
  Globe,
  Compass,
  Cpu,
  Code,
  Monitor,
  Smartphone,
  Cloud,
  Moon,
  Sun,
  Flame,
  Zap,
  Infinity,
  Key,
} from "lucide-react";

const allValues = [
  <Home/>,
  <Settings/>,
  <Bell/>,
  <Heart/>,
  <Star/>,
  <Camera/>,
  <Music/>,
  <Gamepad2/>,
  <Globe/>,
  <Compass/>,
  <Cpu/>,
  <Code/>,
  <Monitor/>,
  <Smartphone/>,
  <Cloud/>,
  <Moon/>,
  <Sun/>,
  <Flame/>,
  <Zap/>,
  <Infinity/>,
  <Key/>
];

function generateBoard(totalCells) {
  const valuesCount = totalCells / 2;
  let shuffledValues = [...allValues];
  for (let i = shuffledValues.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledValues[i], shuffledValues[j]] = [shuffledValues[j], shuffledValues[i]];
  }

  let values = shuffledValues.slice(0, valuesCount);

  // pool of pairs
  let pool = [];
  for (let i = 0; i < values.length; i++) {
    pool.push(values[i]);
    pool.push(values[i]);
  }

  // shuffle pool
  for (let i = pool.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.map((val, i) => ({
    id: i,
    value: val,
    flipped: false,
    matched: false,
  }));
}

const MatchingPairs = () => {
    const [totalCells, setTotalCells] = useState(0) 
    const [clickCount, setClickCount] = useState(0);
    const [cells, setCells] = useState(generateBoard(totalCells)); // ✅ board is stable
    const [flipped, setFlipped] = useState([]);
    const [lockBoard, setLockBoard] = useState(false);
    const gridSize = Math.sqrt(totalCells); // 4 → 2, 16 → 4

    useEffect(() => {
        if(totalCells > 0){
            setCells(generateBoard(totalCells));
            setClickCount(0);
        }
    }, [totalCells]);

    const clicked = (id, e) => {
        if (cells[id].flipped || cells[id].matched || lockBoard) return;

        const newCells = [...cells];
        newCells[id] = { ...newCells[id], flipped: true };
        setCells(newCells);
        setClickCount(prev => prev + 1);

        if (flipped.length === 0) {
        setFlipped([{ id, value: newCells[id].value }]);
        } else if (flipped.length === 1) {
        const first = flipped[0];
        const second = { id, value: newCells[id].value };

        setLockBoard(true);

        if (first.value === second.value) {
            const updated = [...newCells];
            updated[first.id] = { ...updated[first.id], matched: true };
            updated[second.id] = { ...updated[second.id], matched: true };
            setCells(updated);
            setFlipped([]);
            setLockBoard(false);
        } else {
            setTimeout(() => {
            const updated = [...newCells];
            updated[first.id] = { ...updated[first.id], flipped: false };
            updated[second.id] = { ...updated[second.id], flipped: false };
            setCells(updated);
            setFlipped([]);
            setLockBoard(false);
            }, 1000);
        }
        }
    };

    return (
        <>
        <div className="section">
            <div className={`${styles.container} container`}>
                <div className={styles.title} >
                    <Link to="/games">
                        <HiChevronLeft />
                        Back
                    </Link>
                    <h1>Matching Pairs</h1>
                    <Link className={styles.hide}>
                        <HiChevronLeft />
                        Back
                    </Link>


                </div>
                <div className={styles.dashboard}>
                    <select 
                        onChange={(e) => setTotalCells(Number(e.target.value))}
                    >
                        <option value="" disabled selected>Select the grid</option>
                        <option value="4">2 x 2</option>
                        <option value="16">4 x 4</option>
                    </select>
                </div>
            </div>
        </div>
        <div className={`${styles.board_section} section`}>
            <div className={`${styles.board_container} container`}>
                <h3>Total Clicks: {clickCount}</h3>

                <div className={styles.board} style={{gridTemplateColumns: `repeat(${gridSize}, auto)`,}}>
                    {cells.map((cell) => (
                    <div
                        key={cell.id}
                        className={`${styles.card} ${cell.flipped ? styles.flipped : ""} ${cell.matched ? styles.matched : ""}`}
                        onClick={(e) => clicked(cell.id, e)}
                    >
                        <div className={styles.front}></div>
                        <div className={styles.value}>
                            {cell.value}
                        </div>
                    </div>
                    ))}
                </div>

                <div>
                    <Button
                        onClick={() => {
                            setClickCount(0);
                            setClickCount(0);
                            setCells(generateBoard(totalCells)); // regenerate the board
                            setFlipped([]);
                            setLockBoard(false);
                        }}
                    >
                        Reset
                    </Button>
                </div>
            </div>
        </div>
        </>
    );
};

export default MatchingPairs;

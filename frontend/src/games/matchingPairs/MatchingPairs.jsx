import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';

import styles from './MatchingPairs.module.css';
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

    Anchor, 
    Apple, 
    Archive, 
    Award,
    Battery,
    Book, 
    Bookmark, 
    Briefcase, 
    Car, 
    Clock, 
    Coffee, 
    File,
    Trophy,
    Plane,
    Ship,
    Building,
    Lightbulb,
    Skull,
    Diamond,
    Droplet,
    Flag,
    Train,
    Leaf,
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
    <Key/>,

    <Anchor />,
    <Apple />,
    <Archive />,
    <Award />,
    <Battery />,
    <Book />,
    <Bookmark />,
    <Briefcase />,
    <Car />,
    <Clock />,
    <Coffee />,
    <File />,

    <Trophy />,
    <Plane />,
    <Ship />,
    <Building />,
    <Lightbulb />,
    <Skull />,
    <Diamond />,
    <Flag />,
    <Droplet />,
    <Train />,
    <Leaf />,
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
    const [totalCells, setTotalCells] = useState(16) 
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
                    <Button to="/games" className='button_primary md'>
                        <HiChevronLeft />
                    </Button>
                    <h1>Matching Pairs</h1>


                </div>
                <div className={styles.dashboard}>
                    <select 
                        onChange={(e) => setTotalCells(Number(e.target.value))}
                    >
                        <option value="" disabled>Select the grid</option>
                        <option value="4">Cry Baby</option>
                        <option value="16" selected>Normal</option>
                        <option value="36">God Level</option>
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
                            // Lock the board so user can't click
                            setLockBoard(true);

                            // Step 1: Flip all cards face down visually
                            setCells(prev =>
                            prev.map(cell => ({ ...cell, flipped: false, matched: false }))
                            );

                            // Step 2: Wait a small delay for animation to finish
                            setTimeout(() => {
                            // Reshuffle icons and reset states
                            const newBoard = generateBoard(totalCells);
                            setCells(newBoard);
                            setClickCount(0);
                            setFlipped([]);
                            setLockBoard(false);
                            }, 300); // 300ms or match your CSS flip animation
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

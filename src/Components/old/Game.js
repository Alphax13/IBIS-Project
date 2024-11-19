import React from "react";
import './Game.css';
import game1 from '../img/game1.png';
import game2 from '../img/game2.png';
import game3 from '../img/game3.png';
import timer from '../img/timer.png';
import { useNavigate } from "react-router-dom";


function Game() {
    const navigate = useNavigate();

    const handlePlayGame = () => {
        navigate('/timer');
    };
    return (
        <div className="game-container">
            <div className="game-banner">
                <h1>Ball sort puzzle</h1>
                <h2>in 50 seconds</h2>
            </div>
            <div className="game-patterns">
                <div className="game-pattern">
                    <img src={game1} alt="Pattern 1" />
                    <button onClick={handlePlayGame} className="play-button"><img src={timer}/>Play Game</button>
                </div>
                <div className="game-pattern">
                    <img src={game2} alt="Pattern 2" />
                    <button onClick={handlePlayGame} className="play-button"><img src={timer}/>Play Game</button>
                </div>
                <div className="game-pattern">
                    <img src={game3} alt="Pattern 3" />
                    <button onClick={handlePlayGame} className="play-button"><img src={timer}/>Play Game</button>
                </div>
            </div>
        </div>
    );
}

export default Game;

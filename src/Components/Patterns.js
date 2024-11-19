import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Patterns.css';
import timer from '../img/timer.png';
import Patterns1 from '../img/Pattern1.png';
import Patterns2 from '../img/Pattern2.png';
import Patterns3 from '../img/Pattern3.png';
import finger from '../img/Finger.png';

const Patterns = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log(`Attempting to navigate to: ${path}`);
    navigate(path);
  };

  return (
    <section className="patterns">
      <h2 className="ready-title">
        ARE <span className="highlight">YOU READY?</span>
        <br />
        <span className="highlight">ARE</span> YOU <span className="highlight">READY?</span>
        <br />
        <span className="highlight">ARE YOU</span> READY?
        <img src={finger} alt="" />
      </h2>

      <div className="pattern-buttons">
        <div className="pattern">
          <img src={Patterns1} alt="Pattern 1" className="pattern-image" />
          <Link to="/Pattern1" onClick={() => handleClick('/Pattern1')}>
            <button className="play-pattern play-pattern-active">
              <span className="icon">
                <img src={timer} alt="timer" />
              </span>
              Play Pattern 1
            </button>
          </Link>
        </div>
        <div className="pattern">
          <img src={Patterns2} alt="Pattern 2" className="pattern-image" />
          <div className="pattern-info">
            <button className="play-pattern play-pattern-disabled" disabled>
              <span className="icon">
                <img src={timer} alt="timer" />
              </span>
              Play Pattern 2
            </button>
            <p className="play-again-text">Play again in 23:59:46</p>
          </div>
        </div>
        <div className="pattern">
          <img src={Patterns3} alt="Pattern 3" className="pattern-image" />
          <Link to="/Pattern3" onClick={() => handleClick('/Pattern3')}>
            <button className="play-pattern play-pattern-active">
              <span className="icon">
                <img src={timer} alt="timer" />
              </span>
              Play Pattern 3
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Patterns;
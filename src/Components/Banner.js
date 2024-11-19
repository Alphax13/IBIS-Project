import React from "react";
import styles from './Banner.module.css';
import timer from '../img/timer.png';
import red from '../img/red.png';
import blue from '../img/blue.png';
import green from '../img/green.png';

function Banner({ scrollToPatterns }) {  // รับ prop scrollToPatterns
    return (
        <div className={styles.background}>
            <img src={red} alt="" id={styles.red} />
            <img src={blue} alt="" id={styles.blue}/>
            <img src={green} alt="" id={styles.green}/>
            <div className={styles.content}>
                <h1 className={styles.title}>IBIS <br/>GAME</h1>
                <h2 className={styles.subtitle}>BALL SORT PUZZLE</h2>
                {/* scrollToPatterns */}
                <button className={styles.playButton} onClick={scrollToPatterns}>
                    <span className={styles.icon}>
                        <img src={timer} alt="timer" />
                    </span>
                    Play Game
                </button>
            </div>
        </div>
    );
}

export default Banner;

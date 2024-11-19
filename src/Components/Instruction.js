import React from "react";
import styles from './Instruction.module.css';
import ins1 from '../img/Instruction1.png';
import ins2 from '../img/Instruction2.png';
import ins3 from '../img/Instruction3.png';
import arrow from '../img/Arrow.jpg';
import red from '../img/red2.png';
import moveto1 from '../img/moveto1.png';
import moveto2 from '../img/moveto2.png';

const Instruction = () => {
  return (
    <section className={styles.patterns}>
      <h2 className={styles.readyTitle}>
        How <span className={styles.highlight}>To Play?</span>
        <br />
        <span className={styles.highlight}>How</span> To <span className={styles.highlight}>Play?</span>
        <br />
        <span className={styles.highlight}>How to</span> Play?
        <img src={red} alt="" />
      </h2>
      
      <div className={styles.howToPlay}>
        <img src={arrow} id={styles.arrow} />
      </div>

      <div className={styles.contents}>
        <div className={styles.section}>
          <div className={styles.topic}>
            <h3 className={styles.stepTitle}>Select the Pattern</h3>
            <p>Select the pattern which<br /> you want to play</p>
          </div>
          <img src={ins1} alt="Pattern Selection" className={styles.patternImage} />
        </div>
        <div className="1"></div>
        <img src={moveto1} id={styles.move} />

        <div className={styles.section}>
          <img src={ins2} alt="Pattern Selection" className={styles.patternImage} />
          <div className={styles.topic}>
            <h3 className={styles.stepTitle}>Click Start button</h3>
            <p>You have “50 seconds”<br /> to arrange the balls according to the chosen pattern.</p>
          </div>
        </div>
        <div className="1"></div>
        <img src={moveto2} id={styles.move} />

        <div className={styles.section}>
          <div className={styles.topic}>
            <h3 className={styles.stepTitle}>AR Scanning</h3>
            <p>The AR filter will detect the pattern and pop up the prize if it’s correct pattern.</p>
          </div>
          <img src={ins3} alt="Pattern Selection" className={styles.patternImage} />
        </div>
      </div>
    </section>
  );
};

export default Instruction;

import React, { useState, useEffect, useRef } from "react";
import './Timer.css';
import bell from '../img/bell.png';
import { useNavigate } from "react-router-dom";

function Timer() {
    const [time, setTime] = useState(50);
    const [isStart, setIsStart] = useState(false);
    const [isStop, setIsStop] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [timeUp, setTimeUp] = useState(false);
    const [redeemTime, setRedeemTime] = useState(15);
    const [showModal, setShowModal] = useState(true);
    const redeemIntervalRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        let interval = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setRedeemTime(15);
            setTimeUp(true);
            startRedeemCountdown();
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    const startRedeemCountdown = () => {
        redeemIntervalRef.current = setInterval(() => {
            setRedeemTime(prevTime => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(redeemIntervalRef.current);
                    window.location.href = '/timer'
                    return 0; // Stop at 0
                }
            });
        }, 1000);
    };

    const handleStart = () => {
        setIsActive(true);
        setIsStart(true);
        setTimeUp(false);
    };

    const handleStop = () => {
        setIsActive(false);
        setIsStop(true);
    };

    const handleDone = () => {
        setRedeemTime(15);
        setTimeUp(true);
        startRedeemCountdown();
    };

    const handleAR = () => {
        navigate('/games');
        window.location.reload(); 
    }
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const circleProgress = 880 - (880 * time) / 50;

    return (
        <div className="timer-container">
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00016 15L6 21M15.9998 15L18 21" stroke="#1E1852" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.0002 3H3.99984C3.44784 3 3 3.44784 3 3.99984V14.0002C3 14.5522 3.44784 15 3.99984 15H20.0002C20.5522 15 21 14.5522 21 14.0002V3.99984C21 3.44784 20.5522 3 20.0002 3Z" stroke="#E20026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <p className="modal-text">Please clear the board <br /> before start</p>
                        <button className="modal-close-button" onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
            {timeUp ? (
                <div className="time-up-container">
                    <img src={bell} alt="Bell Icon" className="bell-icon" />
                    <h1 className="time-up-text">Time's up !!</h1>
                    <button className="scan-share-button" onClick={handleAR}>Scan &<br /> Share</button>
                    <p className="redeem-text">PLEASE REDEEM <br />IN {redeemTime} SEC.</p>
                </div>
            ) : (
                <>
                    <div className="progress-ring">
                        <svg height='320' width='320'>
                            <circle cx="160" cy="160" r="140" stroke="#eee" strokeWidth="10" fill="none" />
                            <circle
                                cx="160"
                                cy="160"
                                r="140"
                                stroke="#d00"
                                strokeWidth="10"
                                fill="none"
                                strokeDasharray="880"
                                strokeDashoffset={circleProgress}
                                strokeLinecap="round"
                                className="progress"
                            />
                        </svg>
                        <div className="timer-text">{time}</div>
                    </div>
                    {!isStart ? <button className="start-button" onClick={handleStart}>Start</button> : ''}
                    {(isStart && time <= 48 && !isStop) ? <button className="start-button" onClick={handleStop}>Stop</button> : ''}
                    {(!isActive && isStop) ? <button className="done-button" onClick={handleDone}>Done</button> : ''}
                </>
            )}
        </div>
    );
}

export default Timer;
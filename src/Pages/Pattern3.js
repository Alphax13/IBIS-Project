import React, { useState, useEffect, useRef, useCallback } from "react";
import './Pattern.css';
import bell from '../img/bell.png';
import logo from '../img/logoIBIS.png';
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

function Pattern3() {
    const [time, setTime] = useState(50);
    const [isStart, setIsStart] = useState(false);
    const [isStop, setIsStop] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [timeUp, setTimeUp] = useState(false);
    const [redeemTime, setRedeemTime] = useState(15);
    const [showModal, setShowModal] = useState(true);
    const redeemIntervalRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

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
                    resetPattern();
                    return 0;
                }
            });
        }, 1000);
    };

    const resetPattern = useCallback(() => {
        setTime(50);
        setIsStart(false);
        setIsStop(false);
        setIsActive(false);
        setTimeUp(false);
        setRedeemTime(15);
        setShowModal(true);
    }, []);

    const handleStart = () => {
        setIsActive(true);
        setIsStart(true);
        setIsStop(false);
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
        window.location.href = 'https://wigiway-ar-ibis.vercel.app/'
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleBack = useCallback(() => {
        const previousPath = location.state?.from || '/';
        navigate(previousPath);
    }, [navigate, location]);

    const circleProgress = 880 - (880 * time) / 50;

    return (
        <div className={`timer-container ${time < 48 ? 'bg-warning' : ''}`}>
            <ul role="list" className="divide-y divide-gray-100 w-full ">
                <li className="flex justify-between gap-x-10 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        {!isStart && (
                            <button 
                                className="flex flex-row items-center rounded-full bg-white shadow-lg ring-1 ring-black px-4 py-1 focus:outline-none" 
                                onClick={handleBack}
                            >
                                <ArrowLeft size={24} />
                                <span>Back</span>
                            </button>
                        )}
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                        <div className="flex flex-grow items-center justify-center px-4 py-1 rounded-full text-white bg-black">
                            <img src={logo} alt="IBIS" className="h-6 mr-2" />
                            Pattern #3
                        </div>
                    </div>
                </li>
            </ul>

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
                    {!isStart && <button className="start-button" onClick={handleStart}>Start</button>}
                    {(isStart && time <= 48 && !isStop) && <button className="start-button" onClick={handleStop}>Stop</button>}
                    {!isActive && isStop && <button className="done-button" onClick={handleDone}>Done</button>}
                </>
            )}
        </div>
    );
}

export default Pattern3;

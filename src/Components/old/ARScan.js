import React, { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";
import './ARScan.css';

function ARScan() {
    const [facingMode, setFacingMode] = useState("environment");
    const webcamRef = useRef(null);

    const handleCameraSwitch = () => {
        setFacingMode((prevMode) => (prevMode === "environment" ? "user" : "environment"));
    };

    const captureAndScan = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            const img = new Image();
            img.src = imageSrc;
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0, img.width, img.height);

                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);

                if (code) {
                    console.log("Scanned QR Code:", code.data);
                    window.location.href = code.data;
                }
            };
        }
    }, [webcamRef]);

    useEffect(() => {
        const interval = setInterval(captureAndScan, 1000);
        return () => clearInterval(interval);
    }, [captureAndScan]);

    return (
        <div className="scanner-container">
            <h1 className="scanner-title">AR Scanning</h1>
            <div className="scanner-frame">
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{
                        facingMode: facingMode,
                    }}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <button className="switch-button" onClick={handleCameraSwitch}>
                Switch Camera
            </button>
        </div>
    );
}

export default ARScan;

import React from "react";
import './ARprice.css';
import arscan from '../img/arscan.mp4';
import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";
import tiktok from '../img/tiktok-icon.png';

function ARprice() {

    return (
        <div className="price-container">
            <div className="title">
                <h2>Congrats, You got a</h2>
                <h1>FREE Welcome Drink!</h1>
            </div>
            <div className="price-contents">
                <video 
                    src={arscan} 
                    autoPlay 
                    muted 
                    playsInline
                    onError={(e) => console.error("Error loading video:", e.target.error)}
                />
                <div className="price-save-button">
                    <button><svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 15V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V15M7.5 10L12.5 15M12.5 15L17.5 10M12.5 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                        Save</button>
                </div>
            </div>
            <div className="price-social-media-icons">
                <h1><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="black" />
                </svg>
                    Share to</h1>
                <a href="https://www.instagram.com/ar/521711873646032/?ch=ZmRiNWVkOGNmODQ4ZDUzZDQyOWVlNTNhM2QzMTgwZTE%3D"><FaFacebook style={{ color: "#1877F2" }} /></a>
                <a href="https://www.instagram.com/ar/521711873646032/?ch=ZmRiNWVkOGNmODQ4ZDUzZDQyOWVlNTNhM2QzMTgwZTE%3D"><FaSquareInstagram style={{
                    background: 'radial-gradient(92.18% 99.11% at 26.56% 107.7%, #FFDD55 0%, #FFDD55 10%, #FF543E 50%, #C837AB 100%)',
                    borderRadius: '15%',
                    color: 'white',
                }} /></a>
                <a href="https://www.instagram.com/ar/521711873646032/?ch=ZmRiNWVkOGNmODQ4ZDUzZDQyOWVlNTNhM2QzMTgwZTE%3D"><img src={tiktok} alt="" style={{padding: '7px', background: 'white', borderRadius: '50%'}} /></a>
            </div>
        </div>
    );
}

export default ARprice;

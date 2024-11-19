import React from "react";
import './Menubar.css';
import logo from '../img/logoIBIS.png';
import ticket from '../img/ticket.png';
import viewAR from '../img/view-ar.png';

function Menubar({ content }) {
    return (
        <div className="menubar">
            <div className="logo">
                {typeof content === 'string' ? (
                    <span className="text-content">{content}</span>
                ) : (
                    <img src={content || logo} alt="logo or content" />
                )}
            </div>
            <div className="menu-buttons">
                <button className="button ticket-button">
                    <img src={ticket} alt="ticket icon" />
                </button>
                <button className="button settings-button">
                    <img src={viewAR} alt="settings icon" />
                </button>
            </div>
        </div>
    );
}

export default Menubar;

import React, { useState } from "react";
import './Authentication.css';
import logo from '../img/logo.png';
import { useNavigate } from "react-router-dom";

function Authentication() {
    const [signIn, setSignIn] = useState(false);
    const navigate = useNavigate();

    const handleTabClick = () => {
        setSignIn(!signIn);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/game');
    };

    return (
        <div>
            {!signIn && (
                <div className="auth-container">
                    <img src={logo} alt="Logo" />
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <h2>Name *</h2>
                        <input type="text" required />
                        <h2>Email *</h2>
                        <input type="email" required />
                        <h2>Hotel *</h2>
                        <select required>
                            <option value="" disabled selected>Select your hotel</option>
                            <option value="Hotel A">Hotel A</option>
                            <option value="Hotel B">Hotel B</option>
                            <option value="Hotel C">Hotel C</option>
                            <option value="Hotel D">Hotel D</option>
                        </select>
                        <button type="submit">Sign Up</button>
                    </form>
                    <div className="auth-switch">
                        <p>Already have an account? <button onClick={handleTabClick}>Sign In</button></p>
                    </div>
                </div>
            )}
            {signIn && (
                <div className="auth-container">
                <img src={logo} alt="Logo" />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <h2>Email *</h2>
                    <input type="email" required />
                    <button type="submit">Sign In</button>
                </form>
                <div className="auth-switch">
                    <p>Don't have an account? <button onClick={handleTabClick}>Sign up</button></p>
                </div>
            </div>
            )}
        </div>
    );
}

export default Authentication;

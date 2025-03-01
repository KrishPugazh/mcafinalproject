import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";
import kctbanner from "../assets/kct_banner.png";
import Login from "./Login";

const Welcome = () => {
    return (
        <div className="landContainer">
            <div className="banner">
                <div className="textContent">
                    <h1 style={{letterSpacing: "2px"}}>Hi, Welcome to <span style={{color: "green", fontSize: "4.5rem", letterSpacing: "4px"}}>KCT</span></h1>
                    <h3 style={{letterSpacing: "10px"}}>Admission System</h3>
                </div>
                <div className="photo">
                     <img src={kctbanner} alt="KCT" className="img"/>  
                </div>
            </div>
            <div className="form">
                <Login />
            </div>
        </div>
    );
}

export default Welcome;



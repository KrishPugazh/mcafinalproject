import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; 
import "../styles/dashboard.css";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user) {
        navigate("/login");
        return null;
    }

    return (
        <div className="dashboard">
            <div className="sideBar">
                <Navbar /> {/* Sidebar stays static */}
            </div>
            <div className="mainBar">

                <div className="topBar">
                    <h2 >Welcome, {user.name}{"Pugazh "}!</h2> 
                    <button onClick={logout} id="logoutBtn">Logout</button>
                </div>

                {/* This will load Home, Course, or Placement dynamically */}
                <div className="bottomBar">
                    <Outlet /> 
                </div> 

            </div>
        </div>
    );
};

export default Dashboard;

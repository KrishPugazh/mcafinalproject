import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import Navbar
import "../styles/dashboard.css"

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
                <Navbar /> {/* Include Navbar */} 
            </div>
            <div className="mainBar">
                <h2>Welcome, {user.name}!</h2>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/userDash.css"

const UserDashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="dashboard">
            <div className="sideBar">
                <Navbar />
            </div>
            <div className="mainBar">
                <h2>Welcome, {user.name} (User)</h2>
                <button onClick={logout}>Logout</button>
                <Outlet /> {/* Dynamic Component will load here */}
            </div>
        </div>
    );
};

export default UserDashboard;

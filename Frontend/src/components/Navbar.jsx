import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
    FaHome, FaBook, FaBriefcase, FaTrophy, FaUniversity, FaFootballBall, 
    FaUsers, FaFileAlt, FaClipboardList, FaLightbulb, FaCalendarAlt, 
    FaUserGraduate, FaSignOutAlt 
} from "react-icons/fa";
import "../styles/navbar.css";
import kctlogo from "../assets/kctlogo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={kctlogo} alt="KCT Logo" className="logo" />
            </div>
            <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "X" : "☰"}
            </button>
            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li><NavLink to="/dashboard/home"><FaHome className="icon" /> Home</NavLink></li>
                <li><NavLink to="/dashboard/course"><FaBook className="icon" /> Courses</NavLink></li>
                <li><NavLink to="/dashboard/placement"><FaBriefcase className="icon" /> Placement</NavLink></li>
                <li><NavLink to="/dashboard/achievements"><FaTrophy className="icon" /> Achievements</NavLink></li>
                <li><NavLink to="/dashboard/campus"><FaUniversity className="icon" /> Campus</NavLink></li>
                <li><NavLink to="/dashboard/sports"><FaFootballBall className="icon" /> Sports</NavLink></li>
                <li><NavLink to="/dashboard/clubs"><FaUsers className="icon" /> Clubs & Forums</NavLink></li>
                <li><NavLink to="/dashboard/examinations"><FaFileAlt className="icon" /> Examinations</NavLink></li>
                <li><NavLink to="/dashboard/exam-hub"><FaClipboardList className="icon" /> Exam Preparation Hub</NavLink></li>
                <li><NavLink to="/dashboard/career"><FaLightbulb className="icon" /> Career Guidance</NavLink></li>
                <li><NavLink to="/dashboard/events"><FaCalendarAlt className="icon" /> Events</NavLink></li>
                <li><NavLink to="/dashboard/alumni"><FaUserGraduate className="icon" /> Alumni</NavLink></li>
                <li><NavLink to="/logout"><FaSignOutAlt className="icon" /> Logout</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;

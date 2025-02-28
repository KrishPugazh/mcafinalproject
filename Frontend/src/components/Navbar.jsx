import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaBriefcase, FaTrophy, FaUniversity, FaFootballBall, FaUsers, FaFileAlt, FaClipboardList, FaLightbulb, FaCalendarAlt, FaUserGraduate, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import kctlogo from "../assets/kctlogo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={kctlogo} alt="KCT Logo" className="logo" />
            </div>
            <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li><Link to="/home"><FaHome className="icon" /> Home</Link></li>
                <li><Link to="/courses"><FaBook className="icon" /> Courses</Link></li>
                <li><Link to="/placement"><FaBriefcase className="icon" /> Placement</Link></li>
                <li><Link to="/achievements"><FaTrophy className="icon" /> Achievements</Link></li>
                <li><Link to="/campus"><FaUniversity className="icon" /> Campus</Link></li>
                <li><Link to="/sports"><FaFootballBall className="icon" /> Sports</Link></li>
                <li><Link to="/clubs"><FaUsers className="icon" /> Clubs & Forums</Link></li>
                <li><Link to="/examinations"><FaFileAlt className="icon" /> Examinations</Link></li>
                <li><Link to="/exam-hub"><FaClipboardList className="icon" /> Exam Preparation Hub</Link></li>
                <li><Link to="/career"><FaLightbulb className="icon" /> Career Guidance</Link></li>
                <li><Link to="/events"><FaCalendarAlt className="icon" /> Events</Link></li>
                <li><Link to="/alumni"><FaUserGraduate className="icon" /> Alumni</Link></li>
                <li><Link to="/logout"><FaSignOutAlt className="icon" /> Logout</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

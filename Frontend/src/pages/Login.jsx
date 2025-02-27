import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser, registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
    const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(""); // Only for registration
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = await loginUser(email, password);
            setUser(userData);
            navigate("/dashboard");
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ name, email, password });
            setIsRegistering(false); // Switch back to login form after successful registration
        } catch (error) {
            alert("Registration failed");
        }
    };

    return (
        <div className="login-container">
            {isRegistering ? (
                <div className="register-form">
                    <h2>Register</h2>
                    <form onSubmit={handleRegister}>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <button type="submit">Register</button>
                    </form>
                    <p style={{marginTop: "20px"}}>Already have an account? <span className="switch-link" onClick={() => setIsRegistering(false)}>Sign in</span></p>
                </div>
            ) : (
                <div className="login-form">
                    <h2>Sign in to your account</h2>
                    <p>Don't have an account? <span className="switch-link" onClick={() => setIsRegistering(true)}>Register</span></p>
                    
                    <div id="sample-text">
                        <p style={{textAlign: "center"}}>Use demo@minimal.cc with password @2Minimal</p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <button type="submit">Sign in</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;

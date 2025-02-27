import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </AuthProvider>
    );
};

export default App;

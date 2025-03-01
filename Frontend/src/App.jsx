import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import Home from "./components/Home";
import Course from "./components/Course";
import Placement from "./components/Placement";

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                
                {/* Dashboard as a Parent Route */}
                <Route path="/dashboard" element={<Dashboard />}>
                    {/* Nested Routes to Load Inside Dashboard's <Outlet> */}
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="course" element={<Course />} />
                    <Route path="placement" element={<Placement />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default App;

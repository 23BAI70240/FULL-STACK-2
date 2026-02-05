import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { logout } = useAuth();   
    const navigate = useNavigate(); 

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div style={{ backgroundColor: "#736930", padding: "20px" }}>
            <button
                onClick={handleLogout}
                style={{
                    background: "linear-gradient(135deg, #140404, #736930)",
                    color: "white",
                    border: "none",
                    padding: "12px 26px",
                    borderRadius: "30px",
                    fontSize: "15px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(125, 55, 175, 0.4)",
                    transition: "all 0.3s ease"
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>Welcome to EcoTrack</h2>
        <p style={{ color: "var(--muted)" }}>
          Track and reduce your carbon footprint.
        </p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;

const styles = {
  wrapper: {
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "var(--surface)",
    padding: "32px",
    borderRadius: "14px",
    width: "320px",
    textAlign: "center"
  }
};

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "dummy-token");
    navigate("/dashboard");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.logo}>EcoTrack</h1>
        <p style={styles.subtitle}>Track your daily wellness effortlessly</p>

        <button style={styles.loginBtn} onClick={handleLogin}>
          Login to Dashboard
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #2563EB, #1E40AF)",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },
  logo: {
    marginBottom: "10px",
    color: "#2563EB",
    fontSize: "28px",
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: "30px",
    color: "#64748B",
    fontSize: "14px",
  },
  loginBtn: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#2563EB",
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Login;
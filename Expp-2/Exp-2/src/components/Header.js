import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header style={styles.header}>
      <div style={styles.logo}>🌱 EcoTrack</div>

      <nav style={styles.nav}>
        {isAuthenticated && (
          <>
            <Link to="/">Dashboard</Link>
            <Link to="/logs">Logs</Link>
          </>
        )}
        {!isAuthenticated && <Link to="/login">Login</Link>}
      </nav>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    height: "64px",
    backgroundColor: "var(--surface)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    borderBottom: "1px solid #1f2937"
  },
  logo: {
    fontSize: "20px",
    fontWeight: "700",
    color: "var(--primary)"
  },
  nav: {
    display: "flex",
    gap: "20px"
  }
};

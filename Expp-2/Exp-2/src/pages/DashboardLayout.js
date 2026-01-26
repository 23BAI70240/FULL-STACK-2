import { Link, Outlet } from "react-router-dom";
import Logout from "./Logout";

const DashboardLayout = () => {
  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h3 style={styles.sideTitle}>Dashboard</h3>
        <Link to="summary">Summary</Link>
        <Link to="analytics">Analytics</Link>
        <Link to="settings">Settings</Link>
      </aside>

      <main style={styles.main}>
        <Outlet />
        <Logout />
      </main>
    </div>
  );
};

export default DashboardLayout;

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    minHeight: "calc(100vh - 64px)"
  },
  sidebar: {
    backgroundColor: "var(--surface)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    borderRight: "1px solid #1f2937"
  },
  sideTitle: {
    color: "var(--accent)",
    marginBottom: "10px"
  },
  main: {
    padding: "32px"
  }
};

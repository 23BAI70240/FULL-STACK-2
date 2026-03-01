import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!token) return null;

  return (
  <nav style={navStyles.nav}>
    <div style={navStyles.logo}>EcoTrack</div>
    <div>
      <Link style={navStyles.link} to="/dashboard">Dashboard</Link>
      <Link style={navStyles.link} to="/dashboard/water">Water Tracker</Link>
      <button style={navStyles.logoutBtn} onClick={logout}>Logout</button>
    </div>
  </nav>
);
};
const navStyles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#2563EB",
    color: "white"
  },
  logo: {
    fontWeight: "bold",
    fontSize: "18px"
  },
  link: {
    color: "white",
    marginRight: "15px",
    textDecoration: "none"
  },
  logoutBtn: {
    backgroundColor: "#1E40AF",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Navbar;
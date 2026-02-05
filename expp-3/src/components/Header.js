import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style = {{
            padding: '10px',
            backgroundColor: "rgb(58, 248, 29)",
            color : 'white',
            textAlign: 'center',
        }}> 
            <h1>EcoTrack-2</h1>
            <Link style={{paddingRight: "10px", color: "#0008ff"}} to = "/">Dashboard</Link>
            <Link style={{padding: "10px", color: "#0008ff"}} to = "/logs">Logs</Link>
            <Link style={{padding: "10px", color: "#0008ff"}} to = "/login">Login</Link>
        </header>
    )
}
export default Header;
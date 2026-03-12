import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login=()=>{

const {login}=useContext(AuthContext);
const navigate=useNavigate();

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

const handleLogin=()=>{

if(username==="Jayaprakash" && password==="70240"){
login();
navigate("/dashboard");
}else{
alert("Invalid credentials");
}

};

return(

<div className="login-container">

<div className="login-box">

<h2>MEMBER LOGIN</h2>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>LOGIN</button>

</div>

</div>

);

};

export default Login;
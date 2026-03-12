import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";

function App(){

return(

<AuthProvider>

<BrowserRouter>

<Routes>

<Route path="/" element={<Navigate to="/login"/>} />

<Route path="/login" element={<Login/>} />

<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}
/>

</Routes>

</BrowserRouter>

</AuthProvider>

);

}

export default App;
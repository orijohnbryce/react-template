import SiteRoutes from "./components/SiteRoutes";
import { Link, useLocation, useNavigate } from "react-router-dom";

function App() {

    const location = useLocation()
    const nav = useNavigate()

    return (
        <div>
            <Link to="/add" style={{
                padding: '2%',
                backgroundColor: location.pathname.includes("add") ? "red" : "white"
            }}>
                add product </Link>
            <Link to="/home" style={{ padding: '2%', backgroundColor: location.pathname.includes("home") ? "red" : "white" }}> products </Link>
            <Link to="/delete" style={{ padding: '2%', backgroundColor: location.pathname.includes("delete") ? "red" : "white" }}> delete product </Link>
            <br /><br /><br />
            <button onClick={()=>{nav(-1)}}>
                Go Back
            </button>
            <SiteRoutes />            
            <div> By JohnBryce! </div>
        </div>
    );
}

export default App;

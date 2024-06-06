import Card from "./components/Card/Card";
import SiteRoutes from "./components/SiteRoutes";
import { Link, useLocation, useNavigate } from "react-router-dom";

function App() {

    const location = useLocation()
    const nav = useNavigate()

    return (
        <div>
            <Card x="x"> Hello and wellcome to my site </Card>
            <br/>
            <br/>
            <br/>

            <Link to="/add" style={{
                padding: '2%',
                backgroundColor: location.pathname.includes("add") ? "red" : "white"
            }}>
                add product </Link>
            <Link to="/home" style={{ padding: '2%', backgroundColor: location.pathname.includes("home") ? "red" : "white" }}> products </Link>
            <Link to="/formdata" style={{ padding: '2%', backgroundColor: location.pathname.includes("formdata") ? "red" : "white" }}> FormData </Link>
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

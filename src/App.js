import FastTyping from "./components/FastTyping";
import SiteRoutes from "./components/SiteRoutes";
import { Link, useLocation, useNavigate } from "react-router-dom";

function App() {

    const location = useLocation()
    const nav = useNavigate()

    return (
        <div>
            <FastTyping/>
        </div>
    );
}

export default App;

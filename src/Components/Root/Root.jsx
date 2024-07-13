import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            
            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Root;
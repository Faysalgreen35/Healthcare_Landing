import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer/Footer";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";

 

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
           
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;
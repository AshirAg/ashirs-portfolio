import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";



function AppLayout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default AppLayout;
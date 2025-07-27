import { Outlet } from "react-router-dom";
import Space from "../components/space/Space.jsx";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";



function AppLayout(){
    return(
        <>
        <Space />
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default AppLayout;
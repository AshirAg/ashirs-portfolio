import { Outlet } from "react-router-dom";
import Space from "../components/space/Space.jsx";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import ScrollToTop from "../components/micro-components/ScrollToTop.jsx";

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Space />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;

import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Space from "../components/space/Space.jsx";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

import profileImage from '../assets/images/profile-image.webp'; // WebP version

function AppLayout() {
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={profileImage}
          type="image/webp"
        />
      </Helmet>

      <Space />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;

import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "@/components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

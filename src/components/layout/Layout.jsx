import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:max-w-4/5 m-auto md:px-0 px-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;

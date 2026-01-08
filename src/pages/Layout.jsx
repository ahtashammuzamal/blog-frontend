import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:max-w-4/5 m-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Layout;

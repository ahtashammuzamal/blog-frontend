import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center md:p-0 px-4">
      <Link className="text-gray-700 text-2xl font-semibold mb-8" to={"/"}>
        Wordsmith
      </Link>
      <Outlet />
    </div>
  );
};
export default AuthLayout;

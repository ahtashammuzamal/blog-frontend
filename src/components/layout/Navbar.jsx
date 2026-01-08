import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useState } from "react";
import { LogOut, Menu, SquarePenIcon, User } from "lucide-react";
import IconButton from "../common/IconButton";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoggedIn, serIsLoggedIn] = useState(true);

  return (
    <div className="flex justify-between p-2 md:py-4 md:px-0">
      <Link to={"/"} className="text-2xl">
        Wordsmith
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <div className="space-x-3">
          <Link to={"/"}>Home</Link>
          <Link to={"/blogs"}>Blogs</Link>
        </div>
        {isLoggedIn ? (
          <div>
            <IconButton to="/dashboard" variant="ghost">
              <User />
              Dashboard
            </IconButton>
            <IconButton to="/create" variant="ghost">
              <SquarePenIcon />
              Create
            </IconButton>
            <IconButton
              to="/"
              variant="ghost"
              onClick={() => serIsLoggedIn(false)}
            >
              <LogOut />
              LogOut
            </IconButton>
          </div>
        ) : (
          <div className="space-x-3">
            <Button asChild variant="secondary">
              <Link to={"/auth/login"}>Login</Link>
            </Button>
            <Button asChild>
              <Link to={"/auth/register"}>Sign Up</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={() => setIsActive(!isActive)}>
        <Menu />
      </button>

      {/* Mobile Menu */}
      {isActive && (
        <div className="flex flex-col items-center justify-center gap-4 bg-gray-200 w-48 py-4 px-2 rounded-2xl absolute right-6 top-12">
          <Link to={"/"} onClick={() => setIsActive(false)}>
            Home
          </Link>
          <Link to={"/blogs"} onClick={() => setIsActive(false)}>
            Blogs
          </Link>
          {isLoggedIn ? (
            <div className="flex flex-col items-center">
              <IconButton to="/dashboard" variant="ghost">
                <User />
                Dashboard
              </IconButton>
              <IconButton to="/create" variant="ghost">
                <SquarePenIcon />
                Create
              </IconButton>
              <IconButton
                to="/"
                variant="ghost"
                onClick={() => serIsLoggedIn(false)}
              >
                <LogOut />
                LogOut
              </IconButton>
            </div>
          ) : (
            <div className="space-x-3">
              <Button asChild variant="secondary">
                <Link to={"/auth/login"} onClick={() => setIsActive(false)}>
                  Login
                </Link>
              </Button>
              <Button asChild>
                <Link to={"/auth/register"} onClick={() => setIsActive(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Navbar;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import useAuth from "../hooks/useAuth";

const tabs = [
  "Home",
  "Films",
  "New & Popular",
  "My List",
  "Browse by Languages",
];

const Navbar = () => {
  const { user, isLoading } = useSelector(
    (state: RootState) => state.user.value
  );
  const { logout } = useAuth();
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    });
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-16 py-6 flex items-center transition ${
          showBackground ? "bg-black bg-opacity-90" : ""
        }`}
      >
        <img
          className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
        <div className="flex gap-7 ml-8 mr-auto">
          {tabs.map((tab) => (
            <div
              key={tab}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              {tab}
            </div>
          ))}
        </div>
        {user && !isLoading && (
          <div className="text-white hover:text-gray-300 cursor-pointer ml-auto">
            <button type="button" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

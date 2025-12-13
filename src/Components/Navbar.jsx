import { useState } from "react";

const Navbar = ({ user, openLogin, logout, setPage, setSearchTerm }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#5A0E24] bg-opacity-95 backdrop-blur-md
               text-white p-3 shadow-[0_6px_15px_rgba(0,0,0,0.35)]
               border-b border-[#F7C6C7]/30 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        {/* Logo + Mobile Login */}
        <div className="flex justify-between items-center w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <img
              src="https://i.pinimg.com/originals/46/9c/6f/469c6f7badd2745729fc122782c19ff9.jpg"
              alt="AnimeHunt Logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-2xl font-bold">AnimeHunt</h1>
          </div>

          {/* Mobile Login */}
          <div className="sm:hidden">
            {!user ? (
              <button
                onClick={openLogin}
                className="bg-[#FFC7C7] text-[#5A0E24] px-4 py-1 rounded-lg font-semibold"
              >
                Login
              </button>
            ) : (
              <div className="relative">
                <div
                  onClick={toggleDropdown}
                  className="w-10 h-10 rounded-full bg-[#FFC7C7] text-[#5A0E24] flex items-center justify-center font-bold cursor-pointer"
                >
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                {showDropdown && (
                  <div className="absolute right-0 mt-12 w-44 bg-[#5A0E24] rounded-lg shadow-lg py-2">
                    <div className="px-4 py-2 border-b border-[#FFC7C7] text-sm">
                      Signed in as <br />
                      <b>{user.name}</b>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setShowDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-[#F7C6C7] hover:text-black"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-auto">
          <span className="material-symbols-rounded absolute left-3 top-1/2 -translate-y-1/2 text-white">
            search
          </span>
          <input
            type="text"
            placeholder="Search Your Favourite Anime..."
            className="w-full sm:w-64 pl-10 pr-3 py-2 rounded-lg bg-[#5A0E24] text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFC7C7]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Links + Desktop Login */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <div className="flex gap-6">
            <span onClick={() => setPage("home")} className="cursor-pointer hover:text-[#FFC7C7]">
              Home
            </span>
            <span onClick={() => setPage("wishlist")} className="cursor-pointer hover:text-[#FFC7C7]">
              Wishlist
            </span>
            <span onClick={() => setPage("about")} className="cursor-pointer hover:text-[#FFC7C7]">
              About
            </span>
          </div>

          <div className="hidden sm:flex">
            {!user ? (
              <button
                onClick={openLogin}
                className="bg-[#FFC7C7] text-[#5A0E24] px-4 py-1 rounded-lg font-semibold"
              >
                Login
              </button>
            ) : (
              <div className="relative">
                <div
                  onClick={toggleDropdown}
                  className="w-10 h-10 rounded-full bg-[#FFC7C7] text-[#5A0E24] flex items-center justify-center font-bold cursor-pointer"
                >
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                {showDropdown && (
                  <div className="absolute right-0 mt-12 w-44 bg-[#5A0E24] rounded-lg shadow-lg py-2">
                    <div className="px-4 py-2 border-b border-[#FFC7C7] text-sm">
                      Signed in as <br />
                      <b>{user.name}</b>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setShowDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-[#F7C6C7] hover:text-black"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

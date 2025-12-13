import { useState, useEffect } from "react";

const Wishlist = ({ wishlist, setPage, setSelectedCharacter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWishlist, setFilteredWishlist] = useState(wishlist);

  // Filter wishlist based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredWishlist(wishlist);
    } else {
      const filtered = wishlist.filter((char) =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredWishlist(filtered);
    }
  }, [searchTerm, wishlist]);

  return (
    <div className="px-6 py-10">

      {/* Back + Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setPage("home")}
            className="bg-[#5A0E24] text-white px-4 py-2 rounded-lg"
          >
            ← Back
          </button>

          <h1 className="text-4xl font-bold text-[#5A0E24]">
            Your Wishlist ❤️
          </h1>
        </div>

        {/* Search Bar */}
        {wishlist.length > 0 && (
          <div className="relative w-full sm:w-64 mt-4 sm:mt-0">
            {/* Search Icon */}
            <span className="material-symbols-rounded absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5A0E24] text-xl pointer-events-none">
              search
            </span>

            <input
              type="text"
              placeholder="Search in Wishlist..."
              className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-[#5A0E24] focus:outline-none focus:ring-2 focus:ring-[#FFC7C7] text-[#5A0E24]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Wishlist Cards */}
      {filteredWishlist.length === 0 ? (
        <p className="text-xl text-gray-700 mt-10 text-center">
          {wishlist.length === 0
            ? "No favourite characters yet."
            : "No character found."}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredWishlist.map((char) => (
            <div
              key={char.mal_id}
              onClick={() => {
                setSelectedCharacter(char);
                setPage("details");
              }}
              className="bg-[#5A0E24] p-4 rounded-xl text-white shadow-lg cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={char.images.jpg.image_url}
                className="w-full h-48 object-cover rounded-lg border-4 border-[#FFC7C7]"
              />
              <h2 className="text-xl font-bold mt-3">{char.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

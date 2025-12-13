import { useState, useEffect } from "react";

const AnimeCard = ({ wishlist, setWishlist, characters, searchTerm, user }) => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filteredChars, setFilteredChars] = useState([]);

  useEffect(() => {
    if (!characters || characters.length === 0) return;
    setLoading(true);
    setFilteredChars(characters);
    setIndex(0);
    setLoading(false);
  }, [characters]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredChars(characters);
      setIndex(0);
    } else {
      const filtered = characters.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredChars(filtered);
      setIndex(0);
    }
  }, [searchTerm, characters]);

  const nextCharacter = () =>
    setIndex((prev) => (prev + 1) % filteredChars.length);

  const prevCharacter = () =>
    setIndex((prev) => (prev - 1 + filteredChars.length) % filteredChars.length);

  if (loading) return <p className="text-center text-white mt-10">Loading...</p>;

  if (!filteredChars.length) {
    return (
      <p className="text-center text-white mt-10 text-xl">
        Character Not Found
      </p>
    );
  }

  const current = filteredChars[index];
  const isLiked = wishlist.some((c) => c.mal_id === current.mal_id);

  const toggleWishlist = () => {
    if (!user) return alert("Please login to use wishlist ❤️");

    if (isLiked) {
      setWishlist(wishlist.filter((c) => c.mal_id !== current.mal_id));
    } else {
      setWishlist([...wishlist, current]);
    }
  };

  return (
    <div className="flex flex-col items-center text-white px-4 mt-10">
      <div className="bg-[#5A0E24] p-6 rounded-2xl shadow-xl w-full max-w-md text-center relative">

        <span
          className={`material-symbols-outlined absolute top-4 right-4 text-4xl cursor-pointer ${
            isLiked ? "text-red-500" : "text-white"
          }`}
          onClick={toggleWishlist}
        >
          {isLiked ? "favorite" : "favorite_border"}
        </span>

        <img
          src={current.images.jpg.image_url}
          alt={current.name}
          className="w-48 h-48 object-cover rounded-xl mx-auto border-4 border-[#FFC7C7]"
        />

        <h2 className="text-3xl font-bold mt-4">{current.name}</h2>

        <p className="text-gray-200 mt-2 text-sm">
          {current.about
            ? current.about.slice(0, 200) + "..."
            : "No description available."}
        </p>

        <div className="flex justify-between mt-6">
          <button
            onClick={prevCharacter}
            className="bg-[#FFC7C7] text-[#5A0E24] px-4 py-2 rounded-lg font-semibold"
          >
            Previous
          </button>

          <button
            onClick={nextCharacter}
            className="bg-[#FFC7C7] text-[#5A0E24] px-4 py-2 rounded-lg font-semibold"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;

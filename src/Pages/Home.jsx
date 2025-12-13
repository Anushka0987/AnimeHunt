import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import LoginModal from "../Components/LoginModal";
import AnimeCard from "../Components/AnimeCard";
import GuessAnime from "../Components/GuessAnime";
import Wishlist from "../Pages/WishlistPage";
import AnimeDetails from "../Pages/AnimeDetails";
import QuizPage from "../Pages/QuizPage";
import AboutPage from "../Pages/AboutPage";

const Home = () => {
  // ✅ LOAD USER FROM LOCAL STORAGE
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("animehunt_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // ✅ LOAD WISHLIST FROM LOCAL STORAGE
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("animehunt_wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [showLogin, setShowLogin] = useState(false);
  const [page, setPage] = useState("home");

  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const openLogin = () => setShowLogin(true);

  // ✅ LOGOUT (CLEAR EVERYTHING)
  const logout = () => {
    setUser(null);
    setWishlist([]);
    localStorage.removeItem("animehunt_user");
    localStorage.removeItem("animehunt_wishlist");
    setPage("home");
  };

  // ✅ SAVE WISHLIST WHENEVER IT CHANGES
  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "animehunt_wishlist",
        JSON.stringify(wishlist)
      );
    }
  }, [wishlist, user]);

  // FETCH CHARACTERS
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch(
          "https://api.jikan.moe/v4/characters?page=1&limit=25"
        );
        const data = await res.json();
        const shuffled = data.data.sort(() => Math.random() - 0.5);
        setCharacters(shuffled);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFC7C7] pt-[170px] sm:pt-[110px]">
      <Navbar
        user={user}
        openLogin={openLogin}
        logout={logout}
        setPage={setPage}
        setSearchTerm={setSearchTerm}
      />

      {showLogin && (
        <LoginModal
          close={() => setShowLogin(false)}
          setUser={setUser}
        />
      )}

      {/* HOME */}
      {page === "home" && (
        <>
          <div className="max-w-2xl mx-auto mt-2 px-4">
            <h2 className="text-4xl font-bold text-[#5A0E24] mb-2">
              Anime Spotlight
            </h2>
          </div>

          <div className="flex justify-center">
            <AnimeCard
              wishlist={wishlist}
              setWishlist={setWishlist}
              characters={characters}
              searchTerm={searchTerm}
              user={user}
            />
          </div>

          <GuessAnime setPage={setPage} />
        </>
      )}

      {page === "wishlist" && (
        <Wishlist
          wishlist={wishlist}
          setPage={setPage}
          setSelectedCharacter={setSelectedCharacter}
        />
      )}

      {page === "details" && (
        <AnimeDetails
          selectedCharacter={selectedCharacter}
          setPage={setPage}
        />
      )}

      {page === "quiz" && (
        <QuizPage characters={characters} setPage={setPage} />
      )}

      {page === "about" && <AboutPage setPage={setPage} />}
    </div>
  );
};

export default Home;

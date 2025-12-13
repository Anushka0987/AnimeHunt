const GuessAnime = ({ setPage }) => {
  return (
    <div className="max-w-2xl mx-auto mt-15 px-4">
      <h2 className="text-[#5A0E24] text-4xl font-bold mb-2 text-left">
        Guess the Anime Name
      </h2>

      <p className="text-gray-700 mt-4 mb-4 text-left text-sm">
        Are you ready to put your anime knowledge to the ultimate test?
      </p>

      <div className="flex justify-center">
        <button
          onClick={() => setPage("quiz")}
          className="text-[#FFC7C7] bg-[#5A0E24] px-4 py-2 rounded-lg font-semibold"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default GuessAnime;

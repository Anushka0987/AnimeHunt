const GuessAnime = ({ setPage }) => {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">

      {/* Heading */}
      <h2 className="text-[#5A0E24] text-4xl font-bold mb-2">
        Guess the Anime Name
      </h2>

      {/* Description */}
      <p className="text-gray-700 mt-3 mb-4 text-sm">
        Are you ready to put your anime knowledge to the ultimate test? Every character holds a clue, and only the sharpest fans can guess the correct anime. Challenge yourself, spot the hints, and see if you have what it takes to become a true anime master.
      </p>

      {/* Short Clues */}
      <div className="bg-[#FFECEC] border border-[#5A0E24] p-4 rounded-lg mb-4">
        <h3 className="text-[#5A0E24] font-bold mb-2 text-lg">Clues:</h3>

        <ul className="list-disc ml-6 text-[#5A0E24] text-sm">
          <li>You'll get hint before answering.</li>
          <li>Every image hides a small detail from the anime.</li>
        </ul>
      </div>

      {/* Play Button */}
      <button
        onClick={() => setPage("quiz")}
        className="text-[#FFC7C7] bg-[#5A0E24] px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Play
      </button>
    </div>
  );
};

export default GuessAnime;

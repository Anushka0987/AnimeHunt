const AnimeDetails = ({ selectedCharacter, setPage }) => {
  if (!selectedCharacter) return null;

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="bg-[#5A0E24] p-6 rounded-2xl shadow-xl w-full max-w-md text-center text-white relative">

        {/* Back Button */}
        <button
          onClick={() => setPage("wishlist")}
          className="absolute left-4 top-4 bg-[#FFC7C7] text-[#5A0E24] px-3 py-1 rounded-lg"
        >
          ← Back
        </button>

        {/* Image */}
        <img
          src={selectedCharacter.images.jpg.image_url}
          alt={selectedCharacter.name}
          className="w-48 h-48 object-cover rounded-xl mx-auto border-4 border-[#FFC7C7] mt-6"
        />

        {/* Name */}
        <h2 className="text-3xl font-bold mt-4">{selectedCharacter.name}</h2>

        {/* Description */}
        <p className="text-gray-200 mt-4 text-sm leading-relaxed">
          {selectedCharacter.about
            ? selectedCharacter.about
            : "No description available."}
        </p>

      </div>
    </div>
  );
};

export default AnimeDetails;

import { useEffect, useState } from "react";

const TOTAL_QUESTIONS = 10;

const QuizPage = ({ characters, setPage }) => {
  const [quizCharacters, setQuizCharacters] = useState([]); // shuffled list for this attempt
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizCharacter, setQuizCharacter] = useState(null);
  const [options, setOptions] = useState([]);
  const [timer, setTimer] = useState(10);
  const [hint, setHint] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  // ---- Shuffle array ----
  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  // ---- Generate Hint ----
  const generateHint = (char) => {
    if (!char || !char.about) {
      return "This character plays an important role in their anime.";
    }
    const clean = char.about
      .replace(/(\r\n|\n|\r)/gm, " ")
      .split(".")
      .map((t) => t.trim())
      .filter((t) => t.length > 15)
      .filter((t) => !t.includes(char.name));

    if (clean.length > 0) {
      return clean[Math.floor(Math.random() * clean.length)];
    }
    return "A key figure with a unique personality in the story.";
  };

  // ---- Generate Question ----
  const generateQuestion = () => {
    if (currentIndex >= TOTAL_QUESTIONS || quizCharacters.length === 0) {
      setQuizEnded(true);
      return;
    }

    const char = quizCharacters[currentIndex];
    setQuizCharacter(char);

    // Prepare options
    let opts = [char.name];
    const others = quizCharacters.filter((c) => c.mal_id !== char.mal_id);

    while (opts.length < 3 && others.length > 0) {
      const i = Math.floor(Math.random() * others.length);
      opts.push(others[i].name);
      others.splice(i, 1);
    }

    opts.sort(() => Math.random() - 0.5);
    setOptions(opts);

    setHint(generateHint(char));
    setTimer(10);
    setSelectedAnswer(null);
    setFeedback("");
  };

  // ---- Load new quiz on mount ----
  useEffect(() => {
    if (characters.length === 0) return;
    // Shuffle and pick 10 characters for this attempt
    const shuffled = shuffleArray(characters).slice(0, TOTAL_QUESTIONS);
    setQuizCharacters(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setQuizEnded(false);
  }, [characters]);

  useEffect(() => {
    if (quizCharacters.length > 0 && !quizEnded) generateQuestion();
  }, [quizCharacters, currentIndex, quizEnded]);

  // ---- Timer ----
  useEffect(() => {
    if (quizEnded || !quizCharacter) return;

    if (timer === 0) {
      handleAnswer(null); // treat as wrong
      return;
    }

    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer, quizEnded, quizCharacter]);

  // ---- Handle Answer ----
  const handleAnswer = (opt) => {
    if (selectedAnswer || quizEnded) return;
    setSelectedAnswer(opt);

    if (opt === quizCharacter.name) setScore((s) => s + 1);

    setFeedback(
      opt === quizCharacter.name
        ? "Correct ✅"
        : `Wrong ❌ Correct: ${quizCharacter.name}`
    );

    setTimeout(() => {
      if (currentIndex + 1 < TOTAL_QUESTIONS) {
        setCurrentIndex((i) => i + 1);
      } else {
        setQuizEnded(true);
      }
    }, 1500);
  };

  if (quizEnded) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFC7C7] p-6">
        <h2 className="text-3xl text-[#5A0E24] font-bold mb-4">
          Quiz Completed!
        </h2>
        <p className="text-xl text-[#5A0E24] mb-6">
          You scored {score} / {TOTAL_QUESTIONS}
        </p>
        <button
          onClick={() => setPage("home")}
          className="bg-[#5A0E24] text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (!quizCharacter) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#FFC7C7] flex flex-col items-center p-6 relative">
      {/* Back Button Top Left */}
      <button
        onClick={() => setPage("home")}
        className="absolute top-4 left-4 bg-[#5A0E24] text-white px-3 py-1 rounded-lg"
      >
        ← Back
      </button>

      {/* Timer */}
      <h2 className="text-[#5A0E24] text-2xl font-bold mt-10">
        Time Left: {timer}s
      </h2>

      {/* Question Number */}
      <p className="text-[#5A0E24] font-semibold mt-2">
        Question {currentIndex + 1} / {TOTAL_QUESTIONS}
      </p>

      {/* Character Image */}
      <img
        src={quizCharacter.images.jpg.image_url}
        alt={quizCharacter.name}
        className="w-48 h-48 rounded-xl border-4 border-[#5A0E24] mt-6"
      />

      {/* Hint */}
      <div className="bg-white border border-[#5A0E24] rounded-lg px-4 py-3 mt-4 text-sm text-[#5A0E24] w-72">
        <h3 className="font-bold mb-1">Hint:</h3>
        <p>{hint}</p>
      </div>

      {/* Options in single line */}
      <div className="flex gap-3 mt-6 flex-wrap justify-center w-full max-w-md">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            className={`px-4 py-2 rounded-lg font-semibold
              ${
                selectedAnswer
                  ? opt === quizCharacter.name
                    ? "bg-green-500 text-white"
                    : opt === selectedAnswer
                    ? "bg-red-500 text-white"
                    : "bg-[#5A0E24] text-white"
                  : "bg-[#5A0E24] text-white"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {feedback && <p className="text-lg font-bold mt-4">{feedback}</p>}
    </div>
  );
};

export default QuizPage;

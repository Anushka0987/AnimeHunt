// AboutPage.jsx
import React from "react";

const AboutPage = ({ setPage }) => {
  return (
    <div className="min-h-screen bg-[#F7C6C7] text-[#5A0E24] px-6 py-10">
      
      {/* BACK BUTTON */}
      <button
        onClick={() => setPage("home")}
        className="bg-[#5A0E24] text-[#F7C6C7] px-3 py-1 rounded-lg mb-6"
      >
        ← Back
      </button>

      {/* HEADINGS & CONTENT */}
      <div className="max-w-4xl mx-auto flex flex-col gap-15">
        
        <section>
          <h2 className="text-5xl font-bold mb-8">🎨 Welcome to AnimeHunt!</h2>
          <p className="text-lg ">
            AnimeHunt is your ultimate destination to explore the vibrant world of anime characters. From classic heroes to the newest fan favorites, dive into a universe where every character has a story waiting to be discovered.
          </p>
        </section>

        <section>
          <h2 className="text-5xl font-bold mb-8">💖 Save Your Favorites</h2>
          <p className="text-lg">
            Create your personal wishlist and never lose track of the anime characters you love the most. Whether it’s for inspiration or just for fun, your curated list keeps all your favorite heroes, villains, and sidekicks in one place.
          </p>
        </section>

        <section>
          <h2 className="text-5xl font-bold mb-8">🕵️‍♂️ Test Your Anime Knowledge</h2>
          <p className="text-lg">
            Take on our “Guess the Anime Name” quiz! Each question comes with hints and challenging multiple-choice options. Race against the clock, sharpen your memory, and see if you can become the ultimate anime master.
          </p>
        </section>

        <section>
          <h2 className="text-5xl font-bold mb-8">🌟 Anime Spotlight</h2>
          <p className="text-lg">
            Discover new characters every time you visit! Our Anime Spotlight features random characters with images, short descriptions, and key details so you can learn about anime heroes and heroines from all over the anime universe.
          </p>
        </section>

        <section>
          <h2 className="text-5xl font-bold mb-8">📚 Learn & Explore</h2>
          <p className="text-lg">
            AnimeHunt isn’t just about fun – it’s about learning too! Get to know character backgrounds, their unique traits, and story arcs. Expand your anime knowledge while enjoying a beautifully interactive experience.
          </p>
        </section>

        <section>
          <h2 className="text-5xl font-bold mb-8">🚀 Always Fresh & Dynamic</h2>
          <p className="text-lg">
            No two visits are the same! Our site brings fresh content every time you open it, with shuffled characters and random sequences in the spotlight. Every quiz, every page, and every character feels brand new.
          </p>
        </section>

        <section>
          <h2 className="text-5xl font-bold mb-8">🌐 Join the Anime Community</h2>
          <p className="text-lg">
            AnimeHunt is more than just a website; it’s a space for anime enthusiasts to connect, explore, and challenge themselves. Bookmark your favorite characters, track your quiz scores, and celebrate the world of anime in a fun, interactive way.
          </p>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;

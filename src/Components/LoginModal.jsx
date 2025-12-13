
import { useState } from "react";

const LoginModal = ({ close, setUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name.trim() || !password.trim()) return;

    const userData = { name };

    setUser(userData);

    // ✅ SAVE USER
    localStorage.setItem(
      "animehunt_user",
      JSON.stringify(userData)
    );

    close();
  };

  return (
    <div className="fixed inset-0 bg-[#FFC7C7] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#5A0E24] text-white w-80 p-6 rounded-xl shadow-lg relative">

        <button
          onClick={close}
          className="absolute top-2 right-2 text-white text-xl hover:text-[#FFC7C7]"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Enter Your mail"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-[#7C1A35] text-white"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-[#7C1A35] text-white"
          />

          <button
            type="submit"
            className="bg-[#FFC7C7] text-[#5A0E24] font-semibold py-2 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

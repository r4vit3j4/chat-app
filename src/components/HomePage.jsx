import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ socket }) {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const userNameRef = useRef("");

  useEffect(() => {
    if (userName) {
      localStorage.setItem("userName", userName);
      socket.emit("newUser", { userName, socketID: socket.id });
      navigate("/chat");
    }
  }, [userName]);

  const handleClick = () => {
    setUserName(userNameRef.current.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">
      <h1 className="font-bold text-6xl">Sollu</h1>
      <img src={"/intro.jpg"} className="object-contain h-52" alt="img" />
      <div className="flex items-center gap-5">
        <input
          ref={userNameRef}
          className="text-lg p-2 rounded-md"
          type="text"
          placeholder="Eyy Evadra nuvvu..?"
        />
        <button
          className="px-4 py-2 bg-blue-600 rounded-md focus:outline outline-blue-500"
          onClick={handleClick}
        >
          Neeku enduku
        </button>
      </div>
    </div>
  );
}

export default HomePage;

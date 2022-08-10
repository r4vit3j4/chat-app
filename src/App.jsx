import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import ChatPage from "./components/ChatPage.jsx";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage socket={socket} />} />
        <Route path="/chat" element={<ChatPage socket={socket} />} />
      </Routes>
    </div>
  );
};

export default App;

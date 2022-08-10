import React, { useEffect } from "react";
import { useState } from "react";

const ChatPage = ({ socket }) => {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, []);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="flex">
      <div className="h-screen w-64 sticky">
        {userName}
        <div>
          {users.map((user) => (
            <p>{user.userName}</p>
          ))}
        </div>
      </div>
      <div className="bg-slate-300 flex-1"></div>
    </div>
  );
};

export default ChatPage;

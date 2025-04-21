import React, { useEffect, useRef, useState } from "react";
import "./Chat.css"
const Chat = ({profile}) => {
  const ws = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => ws.current.close();
  }, []);

  const sendMessage = () => {
    if (input.trim() && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(input);
      setMessages((prev) => [...prev, `You ${profile.photos}: ${input}`]);
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2 className="h2">
        Chat{" "}
        <img
          className="users_logo"
          src="https://img.icons8.com/?size=100&id=20202&format=png&color=000000"
        />
      </h2>
      <div
        style={{
          border: "1px solid #ccc",
          height: "200px",
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type a message..."
        style={{ width: "100%", marginTop: "10px" }}
      />
      <button onClick={sendMessage} style={{ width: "100%", marginTop: "5px" }}>
        Send
      </button>
    </div>
  );
};

export default Chat;

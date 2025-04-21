import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws"; // ✅ Используем именованный импорт

const app = express();
const server = createServer(app);

const wss = new WebSocketServer({ server }); // ✅ new WebSocketServer (не new WebSocket.Server)

wss.on("connection", (ws) => {
  console.log("🔌 Client connected");

  ws.on("message", (message) => {
    console.log("📩 Received:", message.toString()); // Buffer → String

    // Рассылаем сообщение всем клиентам
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on("close", () => console.log("❌ Client disconnected"));
});

server.listen(8080, () => {
  console.log("🚀 Server running on ws://localhost:8080");
});
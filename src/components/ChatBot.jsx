import React, { useState } from "react";

const ChatBot = () => {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hello 👋 Welcome to AutoVibe.",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    let botReply = "Sorry, I did not understand that.";

    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("price")) {
      botReply = "Our luxury vehicles have different prices depending on the model.";
    } else if (lowerInput.includes("location")) {
      botReply = "We are located in Nairobi, Kenya.";
    } else if (lowerInput.includes("contact")) {
      botReply = "Contact us at +254 700 000 000.";
    } else if (lowerInput.includes("cars")) {
      botReply = "We sell luxurious and high-performance vehicles.";
    }

    const botMessage = {
      text: botReply,
      sender: "bot",
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="chatbot-wrapper">

      {/* Floating Button */}
      <button
        className="chat-toggle-btn"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-container">

          <div className="chatbot-header">
            <h3>AutoVibe Assistant</h3>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === "user" ? "user-msg" : "bot-msg"}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
            />

            <button onClick={sendMessage}>
              Send
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

export default ChatBot;
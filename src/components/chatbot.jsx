import React from "react"; 
import "../assets/library/flaticon/css/all.css"; 
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css"; import "../css/chatbot.css";

import ChatBtnImage from "../assets/image/chtbtn.svg";
import sendMsgImg from "../assets/image/send-icon.png";

import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  // const [message, setMessage] = useState("");

  // const DefaultMessages = [
  //   {
  //     sender: "bot",
  //     text: `
  //     👋 Hi! I'm SandwichAI assistant. I can help you learn about our platform,
  //     pricing, and features. What would you like to know?
  //     `,
  //   },
  // ];


  return (
    <>
      {/* Floating Button */}
      <button className="chatbot-btn" onClick={() => setIsOpen(!isOpen)}>
        <img src={ChatBtnImage}/>
      </button>

      {/* Chat Window */}
      <div className={`chat-container ${isOpen ? "show" : ""}`}>
        {/* Header */}
        <div className="chat-header">

          <div className="header-info">
            <div className="avatar">SS</div>
            <div><h3 className="font-bold">SandwichAI Assistant</h3> 
            <span className="online-span"><span className="online"></span>Online</span></div>
          </div>

          <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
        </div>

        {/* Messages */}
        <div className="chat-body flex flex-col gap-1">

          <div className="default--message px-1 py-1 shadow bg-white">
            <span className="text-sm">
              👋 Hi! I'm SandwichAI assistant. I can help you learn about our platform,
              pricing, and features. What would you like to know?
            </span>
          </div>

          <div className="suggestions flex flex-col gap-5">
            <button>How does pricing work?</button>
            <button>Can i try for free?</button>
            <button>Book a demo</button>
          </div>
          {/* <div ref={bottomRef}></div> */}
        </div>

        <div className="chatbot-chats"></div>

        {/* Input */}
        <div className="chat-input">
          <input type="text" placeholder="Ask anything..."/>
          <button onClick="" className="flex items-center justify-center">
            <img src={sendMsgImg}/>
          </button>
        </div>
      </div>
    </>
  );
}
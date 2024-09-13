"use client";
import React, { useRef, useState } from "react";
import MessageItem from "./MessageItem";

interface MessagesProps {
  text: string;
  start: boolean;
}

const ChatBox = () => {
  const [messages, setMessages] = useState<MessagesProps[] | []>([]);
  const messageRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-[600px] md:h-[700px] bg-white rounded-lg shadow-lg flex flex-col">
      <div className="flex-1 overflow-y-auto p-4" id="messages">
        {messages.length > 0 &&
          messages.map((message, i) => (
            <MessageItem key={i} message={message.text} start={message.start} />
          ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-b-lg">
        <div className="w-full join">
          <input
            type="text"
            placeholder="Enter your message..."
            className="input input-bordered join-item flex-grow"
            ref={messageRef}
          />
          <button className="btn btn-primary join-item">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

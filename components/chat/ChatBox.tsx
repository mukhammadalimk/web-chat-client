"use client";
import React, { useEffect, useRef, useState } from "react";
import MessageItem from "./MessageItem";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface MessagesProps {
  text: string;
  start: boolean;
}

const ChatBox = () => {
  const [messages, setMessages] = useState<MessagesProps[] | []>([]);
  const messageRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation("common");

  // Scroll to the bottom of the messages box when new message is created
  useEffect(() => {
    const chatBox = document.getElementById("messages") as HTMLDivElement;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages]);

  // Send message to backend
  const sendMessageHandler = async () => {
    // Get message text from messageRed
    const messageText = messageRef.current?.value;

    // Return if the messageText is empty
    if (messageText === "") return;

    // Add the message to the messages array
    setMessages((prevState) => {
      return [...prevState, { text: messageText!, start: false }];
    });

    // Clear the input
    messageRef.current!.value = "";

    try {
      // Send request to backend
      const { data } = await axios.post(
        `https://web-chat-server-ra6s.onrender.com/chat`,
        { message: messageText },
        { withCredentials: true }
      );

      // Add the response message to the messages array
      setMessages((prevState) => {
        return [...prevState, { text: data.message, start: true }];
      });
    } catch (error) {
      console.log("error:", error);
    }
  };

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
            placeholder={t("inputPlaceholder")}
            className="input input-bordered join-item flex-grow"
            ref={messageRef}
          />
          <button
            className="btn btn-primary join-item"
            onClick={sendMessageHandler}
          >
            {t("sendButtonText")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

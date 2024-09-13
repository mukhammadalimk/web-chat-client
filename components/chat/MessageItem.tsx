import React from "react";

interface MessageItemProps {
  message: string;
  start?: boolean;
}

const MessageItem = ({ message, start }: MessageItemProps) => {
  return (
    <div className={`chat chat-${start ? "start" : "end"}`}>
      <div className={`chat-bubble${start ? "" : " chat-bubble-primary"}`}>
        {message}
      </div>
    </div>
  );
};

export default MessageItem;

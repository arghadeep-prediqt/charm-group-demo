import React, { useState, useEffect, useRef } from "react";
import { BlurImage } from "../ui/BluerImage";
import { X } from "lucide-react";

const ChatBot: React.FC = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([]);
  const [input, setInput] = useState("");

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsChatVisible((prev) => {
      if (!prev) {
        setTimeout(() => {
          setMessages([
            {
              text: "Hi, This is your travel buddy. How can I help today?",
              sender: "bot",
            },
          ]);
        }, 1000);
      }
      return !prev;
    });
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      setMessages((prev) => [...prev, { text: input, sender: "user" }]);
      setInput("");

      setTimeout(() => {
        const botResponse = getBotResponse(input);
        setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
      }, 1000);
    }
  };

  const getBotResponse = (message: string) => {
    if (
      message.toLowerCase().includes("rent") ||
      message.toLowerCase().includes("sell") ||
      message.toLocaleLowerCase().includes("Can I rent or sell my timeshare?")
    ) {
      return "Yes, you can typically rent or sell your timeshare. However, it’s essential to review your timeshare agreement or contact your resort for specific terms and conditions, as some properties may have restrictions.";
    }
    if (message.toLowerCase().includes("thank you")) {
      return "You're Welcome.";
    }
    return "I’d be happy to help! Let me know if you have any queries.";
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-20">
      {!isChatVisible && (
        <button
          onClick={toggleChat}
          className="fixed bottom-8 right-8 transition active:scale-95"
        >
          <BlurImage
            src={"/icons/chat-bot.svg"}
            alt="Chatbot icon"
            width={50}
            height={50}
            className="bg-gray-50 p-3 rounded-full shadow-lg border border-gray-300"
          />
        </button>
      )}

      {isChatVisible && (
        <div className="mt-2 md:w-[25vw] h-[70vh] bg-white rounded-lg shadow-xl flex flex-col p-4 border border-gray-200">
          <div className="flex items-center justify-between pb-2 border-b border-gray-200 mb-4">
            <div className="flex justify-start items-center">
              <BlurImage
                src={
                  "https://haptikappimg.haptikapi.com/uploads/eb11b27c6a20728c3c276a1a0aa21fa2.PNG"
                }
                alt="Bot icon"
                width={40}
                height={40}
                className="mr-1"
              />
              <div className="">
                <p className="text-p1-b text-gray-800">Tripper</p>
                <p className="text-p3-r text-gray-500">Travel Guide on chat</p>
              </div>
            </div>

            <button
              onClick={toggleChat}
              className="text-gray-400 hover:text-gray-600 transition active:opacity-60"
            >
              <X className="size-6 text-gray-700" />
            </button>
          </div>

          <div
            ref={chatContainerRef}
            className="flex-grow overflow-y-auto scrollbarY py-2 space-y-3"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end items-center"
                    : "justify-start items-start"
                }`}
              >
                <div
                  className={`p-3 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-sky-100 text-sky-800 rounded-br-none"
                      : "bg-slate-100 text-slate-700 rounded-bl-none"
                  } max-w-xs text-p2-r`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={sendMessage}
            className="w-full flex items-center mt-4"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="w-full flex-grow px-4 py-2 border rounded-l-lg outline-none focus:border-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 border border-blue-500 transition font-medium"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

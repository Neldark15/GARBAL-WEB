"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChat, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { chatbotGreeting, chatbotOptions, ChatOption } from "@/data/chatbot";
import Image from "next/image";

interface Message {
  type: "bot" | "user";
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: chatbotGreeting },
  ]);
  const [currentOptions, setCurrentOptions] = useState<ChatOption[]>(chatbotOptions);

  const handleOption = (option: ChatOption) => {
    const userMsg: Message = { type: "user", text: option.label };
    const botMsg: Message = { type: "bot", text: option.response };
    setMessages((prev) => [...prev, userMsg, botMsg]);

    if (option.value === "cotizar" || option.value === "whatsapp" || option.value === "hablar") {
      // Open WhatsApp after a short delay
      setTimeout(() => {
        window.open(
          "https://wa.me/50363108147?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20productos",
          "_blank"
        );
      }, 1000);
      setCurrentOptions(chatbotOptions);
    } else if (option.value === "ir-distribuidores") {
      setCurrentOptions(chatbotOptions);
    } else if (option.value === "catalogo") {
      setCurrentOptions(chatbotOptions);
    } else if (option.followUp) {
      setCurrentOptions(option.followUp);
    } else {
      setCurrentOptions(chatbotOptions);
    }
  };

  const reset = () => {
    setMessages([{ type: "bot", text: chatbotGreeting }]);
    setCurrentOptions(chatbotOptions);
  };

  return (
    <>
      {/* Toggle Button - Logo Garbal con notificación */}
      <div className="fixed bottom-24 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Abrir chat"
        >
          {isOpen ? (
            <div className="w-full h-full bg-primary rounded-full flex items-center justify-center">
              <HiX className="w-6 h-6 text-white" />
            </div>
          ) : (
            <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200 shadow-lg bg-white flex items-center justify-center p-1.5">
              <Image
                src="/images/logo/garbal-logo.png"
                alt="Chat Garbal"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          {/* Notification badge - outside overflow-hidden */}
          {!isOpen && (
            <>
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center z-10">
                <span className="text-[9px] font-bold text-white">1</span>
              </span>
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 rounded-full animate-ping opacity-30" />
            </>
          )}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-40 right-6 z-50 w-[340px] max-h-[460px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20 bg-white flex items-center justify-center p-1">
                  <Image src="/images/logo/garbal-logo.png" alt="Garbal" width={32} height={32} className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Asistente Garbal</p>
                  <p className="text-xs text-white/70">En línea</p>
                </div>
              </div>
              <button onClick={reset} className="text-white/70 hover:text-white text-xs">
                Reiniciar
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[300px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      msg.type === "user"
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-gray-100 text-gray-700 rounded-bl-md"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Options */}
            <div className="p-3 border-t border-gray-100 space-y-2">
              {currentOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOption(option)}
                  className="w-full text-left px-4 py-2.5 bg-gray-50 hover:bg-primary/5 hover:text-primary rounded-xl text-sm font-medium transition-colors border border-gray-100 hover:border-primary/20"
                >
                  {option.label}
                </button>
              ))}

              {/* Quick WhatsApp link */}
              <a
                href="https://wa.me/50363108147"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-green-50 hover:bg-green-100 text-green-600 rounded-xl text-sm font-medium transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp directo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

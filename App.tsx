import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  const [conversations, setConversations] = useState<any[]>([]);
  const [currentId, setCurrentId] = useState<string | null>(null);

  const currentChat = conversations.find((c) => c.id === currentId);

  return (
    <div className="flex h-screen w-screen bg-[#0b0f19] text-white overflow-hidden">

      {/* LEFT SIDEBAR */}
      <Sidebar
        conversations={conversations}
        onNew={() => {
          const id = crypto.randomUUID();
          setConversations((prev) => [
            ...prev,
            { id, title: "New Chat", messages: [] }
          ]);
          setCurrentId(id);
        }}
        currentId={currentId || undefined}
        onSelect={(id) => setCurrentId(id)}
        onDelete={(id) =>
          setConversations((prev) => prev.filter((c) => c.id !== id))
        }
      />

      {/* RIGHT MAIN AREA */}
      <div className="flex-1 overflow-y-auto p-6 flex justify-center">
        {!currentChat ? (
          <Welcome onStart={() => {}} />
        ) : (
          <ChatWindow
            chat={currentChat}
            onSend={(message) => {
              setConversations((prev) =>
                prev.map((c) =>
                  c.id === currentChat.id
                    ? { ...c, messages: [...c.messages, message] }
                    : c
                )
              );
            }}
          />
        )}
      </div>
    </div>
  );
}

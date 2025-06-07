import { useState } from 'react';
import MessageBubble from './MessageBubble';

export default function ChatPanel() {
  const [messages, setMessages] = useState([
    {
      user: 'What is IPFS?',
      bot: 'IPFS is a decentralized storage protocol...',
      cid: 'QmTz...123',
    },
  ]);

  return (
    <div className="space-y-6 mb-8 px-2 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-700 scrollbar-track-transparent transition-all">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-2 animate-fade-in"
        >
          <MessageBubble message={msg} />
        </div>
      ))}
      {messages.length === 0 && (
        <div className="text-center text-zinc-400 italic py-8">
          Start the conversation!
        </div>
      )}
    </div>
  );
}
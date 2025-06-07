import { useState } from 'react';

export default function InputBar() {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    console.log('Sending:', input);
    setInput('');
  };

  return (
    <div className="flex items-center gap-3 bg-zinc-800/60 rounded-full px-4 py-3 shadow-lg backdrop-blur-md border border-zinc-700 focus-within:ring-2 focus-within:ring-cyan-400 transition-all">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-transparent rounded-full px-3 py-2 text-white placeholder:text-zinc-400 focus:outline-none text-base"
        placeholder="Type a message or /record something..."
        onKeyDown={e => e.key === 'Enter' && handleSend()}
      />
      <button
        onClick={handleSend}
        className="bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-500 hover:to-indigo-600 px-5 py-2 rounded-full text-white font-semibold shadow transition-all duration-150 active:scale-95"
        aria-label="Send"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
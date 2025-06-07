export default function Footer() {
  return (
    <footer className="w-full text-center py-5 bg-gradient-to-r from-indigo-900/70 via-purple-900/70 to-zinc-900/70 rounded-t-2xl shadow-inner backdrop-blur-md mt-8">
      <p className="text-base text-zinc-300 font-medium flex items-center justify-center gap-2">
        <span>© {new Date().getFullYear()} <span className="font-bold text-indigo-300">Onchain Chatbot</span></span>
        <span className="hidden sm:inline">·</span>
        <span className="flex items-center gap-1">
          <span className="text-fuchsia-400">React</span>
          <span>+</span>
          <span className="text-cyan-400">Tailwind</span>
          <span>+</span>
          <span className="text-purple-400">IPFS</span>
        </span>
      </p>
    </footer>
  );
}
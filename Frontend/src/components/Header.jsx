export default function Header() {
  return (
    <header className="relative text-center py-10 mb-6 bg-gradient-to-r from-indigo-900/80 via-fuchsia-900/70 to-purple-900/80 rounded-b-3xl shadow-2xl backdrop-blur-lg overflow-hidden">
      {/* Decorative blurred gradient blobs */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-fuchsia-500 opacity-30 rounded-full blur-2xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-indigo-500 opacity-20 rounded-full blur-2xl animate-pulse delay-2000 -z-10" />
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-purple-500 opacity-20 rounded-full blur-2xl animate-pulse delay-1000 -z-10" />

      <h1 className="text-5xl md:text-6xl font-black tracking-widest bg-clip-text bg-gradient-to-r from-indigo-300 via-fuchsia-400 to-purple-400 drop-shadow-2xl flex items-center justify-center gap-3">
        <span className="animate-spin-slow"> 🌐</span>
        🔗 Chat3pt
        <span className="animate-bounce">🤖</span>
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-zinc-200 font-semibold italic drop-shadow-md flex items-center justify-center gap-2">
        <span className="text-indigo-300">Chat</span>
        <span className="text-fuchsia-400 text-2xl font-bold">+</span>
        <span className="text-cyan-300">Web3</span>
        <span className="text-fuchsia-400 text-2xl font-bold">+</span>
        <span className="text-purple-300">IPFS</span>
        <span className="text-fuchsia-400 text-2xl font-bold">=</span>
        <span className="text-yellow-200">Immutable Knowledge</span>
      </p>
    </header>
  );
}

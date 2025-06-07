import Header from "./components/Header";
import ChatPanel from "./components/ChatPanel";
import InputBar from "./components/InputBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-zinc-900 to-purple-900 text-white font-sans flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4 py-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20">
          <ChatPanel />
          <div className="mt-6">
            <InputBar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
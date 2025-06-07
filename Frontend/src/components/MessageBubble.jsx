export default function MessageBubble({ message }) {
  return (
    <div className="bg-zinc-800 rounded-xl p-4 shadow-lg">
      <p><strong className="text-cyan-400">User:</strong> {message.user}</p>
      <p><strong className="text-green-400">Bot:</strong> {message.bot}</p>
      {message.cid && (
        <p className="text-sm text-zinc-500 mt-2">Stored on IPFS: <code>{message.cid}</code></p>
      )}
    </div>
  );
}

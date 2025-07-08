export default function Footer() {
  return (
    <footer className="px-6 py-16 text-white bg-[#111]">
      <h2 className="italic mb-4">Connect with me!!</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Name" className="p-2 rounded bg-transparent border" />
        <input type="email" placeholder="Email ID" className="p-2 rounded bg-transparent border" />
        <textarea placeholder="Services" className="p-2 rounded bg-transparent border h-32" />
      </form>

      <div className="flex gap-4 mt-6 flex-wrap">
        {["GitHub", "LinkedIn", "Telegram", "Instagram", "WhatsApp"].map((platform) => (
          <button key={platform} className="px-4 py-1 rounded-full border text-sm">
            {platform}
          </button>
        ))}
      </div>
    </footer>
  );
}

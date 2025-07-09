import {
  FaGithub,
  FaLinkedinIn,
  FaTelegram,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="min-h-screen relative px-6 md:px-32 py-20 text-white bg-[#121212] font-instrument overflow-hidden flex flex-col justify-between">
      {/* Heading and Form */}
      <div className="z-10">
        <h2 className="text-2xl italic mb-8">Connect with me!!</h2>

        <form className="flex flex-col gap-4 max-w-xl">
          <input
            type="text"
            placeholder="Name"
            className="p-2 rounded-lg border border-white bg-transparent text-sm italic"
          />
          <input
            type="email"
            placeholder="Email ID"
            className="p-2 rounded-lg border border-white bg-transparent text-sm italic"
          />
          <textarea
            placeholder="Service"
            className="p-2 rounded-lg border border-white bg-transparent text-sm h-32 italic"
          />
        </form>
      </div>

      {/* Social Icons at bottom */}
      <div className="flex flex-wrap justify-center gap-24 mt-16 z-10">
        <button className="px-4 py-1 rounded-full border border-white flex items-center gap-2 text-sm italic">
          <FaGithub /> GitHub
        </button>
        <button className="px-4 py-1 rounded-full border border-white flex items-center gap-2 text-sm italic">
          <FaLinkedinIn /> LinkedIn
        </button>
        <button className="px-4 py-1 rounded-full border border-white flex items-center gap-2 text-sm italic">
          <FaTelegram /> Telegram
        </button>
        <button className="px-4 py-1 rounded-full border border-white flex items-center gap-2 text-sm italic">
          <FaInstagram /> Instagram
        </button>
        <button className="px-4 py-1 rounded-full border border-white flex items-center gap-2 text-sm italic">
          <FaWhatsapp /> WhatsApp
        </button>
      </div>

      {/* Decorative Circle – pushed more down */}
      <div className="absolute left-0 bottom-[-120px] w-[500px] h-[500px] translate-y-1/4 -translate-x-1/4 border border-white rounded-full opacity-50 z-0" />
    </footer>
  );
}

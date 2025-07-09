import {
  FaGithub,
  FaLinkedinIn,
  FaTelegram,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#121212] text-white px-6 md:px-16 py-20 font-instrument relative overflow-hidden">
      {/* Main Text Row */}
      <div className="flex justify-center w-full gap-16 flex-col md:flex-row">
        {/* Left Side: Graphic + Description */}
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-7xl md:text-9xl font-bale leading-none">Graphic</h1>
          <p className="font-instrument italic text-base leading-relaxed max-w-sm">
            “I strive to create designs that not only look great but also deliver seamless and engaging interactions.
            Let’s collaborate to bring your vision to life and make a lasting impact through exceptional design.”
          </p>
        </div>

        {/* Right Side: Designer, aligned under 'c' */}
        <div className="mt-0 md:mt-36">
          <h1 className="text-7xl md:text-9xl font-bale leading-none">Designer</h1>
        </div>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-wrap justify-center gap-24 mt-16">
        {[
          { icon: <FaGithub />, label: 'GitHub' },
          { icon: <FaLinkedinIn />, label: 'LinkedIn' },
          { icon: <FaTelegram />, label: 'Telegram' },
          { icon: <FaInstagram />, label: 'Instagram' },
          { icon: <FaWhatsapp />, label: 'WhatsApp' },
        ].map(({ icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-2 px-5 py-1 rounded-full border border-white text-sm font-instrument italic hover:bg-white hover:text-black transition-all"
          >
            <span>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Projects Button */}
      <div className="mt-16 flex justify-center">
        <div className="flex items-center">
          <span className="bg-white text-black italic font-instrument px-8 py-1 rounded-full">
            Projects
          </span>
          <span className="bg-white px-2">
            {/* to remove visual gap between buttons */}
          </span>
          <span className="bg-white text-black px-3 py-1 rounded-full text-lg">↓</span>
        </div>
      </div>

    </section>
  );
}

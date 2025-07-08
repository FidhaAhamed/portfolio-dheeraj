export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-white bg-[#111] font-jost">
      <h1 className="text-6xl md:text-7xl font-bold tracking-wide">Graphic</h1>
      <h1 className="text-6xl md:text-7xl font-bold tracking-wide">Designer</h1>
      <p className="italic text-sm max-w-md text-center mt-4">
        “I strive to create designs that not only look great but also deliver seamless and engaging interactions...”
      </p>

      {/* Social Links */}
      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        {["GitHub", "LinkedIn", "Telegram", "Instagram", "WhatsApp"].map((platform) => (
          <button key={platform} className="px-4 py-1 rounded-full border text-sm">
            {platform}
          </button>
        ))}
      </div>

      {/* Projects Button */}
      <button className="mt-8 flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full italic">
        projects <span className="text-lg">↓</span>
      </button>
    </section>
  );
}

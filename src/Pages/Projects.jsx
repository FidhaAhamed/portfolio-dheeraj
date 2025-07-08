export default function Projects() {
  return (
    <section className="px-6 py-16 text-white bg-[#111]">
      <h2 className="text-lg italic mb-6">My Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {Array(4).fill().map((_, i) => (
          <div key={i} className="bg-[#1a1a1a] p-4 rounded-lg border">
            <h3 className="italic text-white">Fusion Web UI</h3>
            <p className="text-sm text-gray-300 mt-2">
              Fusion is an IEEE MACE event mainly focusing on generative AI and signal processing
            </p>
            <button className="mt-4 flex items-center gap-2 bg-white text-black px-4 py-1 rounded-full italic">
              Know more →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

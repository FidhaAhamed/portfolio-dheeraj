export default function WorkExp() {
  return (
    <section className="px-6 py-16 text-white bg-[#111]">
      <h2 className="text-lg italic mb-6">Work Experience</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-200 text-black p-4 rounded-lg">
          <p>Design Intern at MULEARN Foundation</p>
          <p className="italic text-sm">1 year experience, 2024–2025</p>
        </div>
        <div className="bg-gray-200 text-black p-4 rounded-lg">
          <p>Designer at Tinkerhub Foundation, Kochi</p>
          <p className="italic text-sm">1 year experience, 2024–2025</p>
        </div>
      </div>

      <div className="bg-[#222] mt-6 p-4 rounded-lg italic text-sm">
        Tools used ~ figma, framer, adobe photoshop
      </div>
    </section>
  );
}

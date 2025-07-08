export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-16 text-white bg-[#111]">
      {/* Skills Card */}
      <div className="bg-gray-200 text-black p-6 rounded-xl">
        <code>Mainly deals with figma, framer, adobe photoshop</code>
      </div>

      {/* Profile + Intro */}
      <div className="text-center md:text-left">
        <img
          src="/your-image.jpg"
          alt="Dheeraj"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
        />
        <p className="text-xl">
          hello!! i'm dheeraj, <span className="italic font-semibold">graphic designer</span><br />
          And also focusing on UI | UX part
        </p>
      </div>
    </section>
  );
}

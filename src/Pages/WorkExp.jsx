import { SiFigma } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';

export default function WorkExp() {
  return (
    <section className="relative bg-[#121212] text-white px-6 md:px-32 py-20 font-instrument">
      {/* Heading */}
      <h2 className="italic text-2xl mb-16 text-right">Work Experience</h2>

      {/* Experience Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-end">
        {/* Mulearn */}
        <div className="bg-[#D9D9D9] text-black px-8 py-3 rounded-2xl w-80 h-20 font-bale text-sm flex flex-col justify-center">
          <p className="font-semibold">Design intern At Mulearn foundation</p>
          <p className="italic mt-1">1 year experience, 2024–2025</p>
        </div>

        {/* Tinkerhub */}
        <div className="bg-[#D9D9D9] text-black px-8 py-3 rounded-2xl w-80 h-20 font-bale text-sm flex flex-col justify-center">
          <p className="font-semibold">Designer At Tinkerhub Foundation Kochi</p>
          <p className="italic mt-1">1 year experience, 2024–2025</p>
        </div>
      </div>

      {/* Tools Used + Icons */}
      <div className="mt-6 flex justify-end">
        <div className="border border-white rounded-2xl w-80 h-20 px-8 py-3 mt-2 flex items-center justify-between font-bale text-sm opacity-80">
          {/* Text */}
          <div className="leading-tight">
            <p className="italic">Tools used ~</p>
            <p>figma, framer, Adobe photoshop</p>
          </div>

          {/* Icons Overlapping */}
          <div className="relative w-16 h-8 shrink-0">
            {/* Figma Circle */}
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full border border-white flex items-center justify-center">
              <SiFigma size={14} className="text-white" />
            </div>
            {/* Arrow Circle */}
            <div className="absolute left-6 top-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <FiArrowUpRight size={14} className="text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute -left-60 bottom-90 w-[550px] h-[550px] border border-white opacity-50 rounded-full z-10 -translate-y-1/4 " />
    </section>
  );
}

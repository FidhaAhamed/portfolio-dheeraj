import { FiArrowUpRight } from 'react-icons/fi';
import { SiFigma } from 'react-icons/si';

export default function About() {
  return (
    <section className="relative bg-[#121212] text-white px-8 md:px-32 py-20 font-instrument overflow-visible">
      {/* Top Heading */}
      <h2 className="italic text-2xl mb-10">About Me</h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 z-10 relative">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          {/* Skills Card */}
          <div className="bg-[#D9D9D9] text-black px-8 py-4 font-bale rounded-2xl w-fit">
            <p>Mainly deals with <br /> figma, framer, adobe photoshop</p>
          </div>

          {/* Icon Button with Figma and Arrow */}
          <div className="border border-white  rounded-2xl px-30 py-6 flex items-center justify-center gap-4">
            {/* Icon Button with overlapping Figma and Arrow icons */}
            <div className="relative w-16 h-8">
              {/* Figma Icon - outlined */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white flex items-center justify-center bg-[#121212]">
                <SiFigma size={20} className="text-white" />
              </div>

              {/* Arrow Icon - filled white */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <FiArrowUpRight size={20} className="text-black" />
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Profile + Text */}
        <div className="text-left">
          <img
            src="/dheeraj.png"
            alt="Dheeraj"
            className="w-44 h-44 object-cover rounded-full mb-4"
          />
          <p className="font-bale text-sm leading-relaxed">
            Hello!! I'm Dheeraj, <span className="italic font-bold">graphic designer</span><br />
            And also focusing on UI|UX part
          </p>
        </div>
      </div>

      {/* Decorative Large Circle */}
      <div className="absolute -top-16 right-0 w-[500px] h-[500px] border border-white opacity-50 rounded-full z-0 translate-x-1/3 -translate-y-1/4" />
    </section>
  );
}

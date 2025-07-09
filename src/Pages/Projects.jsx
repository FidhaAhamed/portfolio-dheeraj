import { FiArrowRight } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'Fusion Web UI',
      description: 'Fusion is an IEEE MACE event mainly focusing on generative AI and signal processing',
    },
    {
      title: 'Branding for DCom',
      description: 'Created a minimal and bold branding kit for a college design community to use across their assets',
    },
    {
      title: 'Portfolio Design',
      description: 'Designed a clean and modern portfolio website template tailored for creative professionals',
    },
    {
      title: 'Social Media Posts',
      description: 'Designed multiple carousel posts and reels for a tech startup to boost their Instagram engagement',
    },
  ];

  return (
    <section className="mt-32 px-6 md:px-32 py-20 text-white bg-[#121212] font-instrument relative">
      {/* Decorative Right Circle */}
      <div className="absolute -bottom-12 right-0 translate-x-1/4 w-[550px] h-[550px] border border-white rounded-full opacity-50 z-10" />

      {/* Heading */}
      <h2 className="text-2xl italic mb-24 z-10 relative">My Projects</h2>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 z-10 relative place-items-center md:place-items-start max-w-3xl">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border border-white p-6 rounded-3xl max-w-sm h-44 flex flex-col justify-between"
          >
            <div>
              <h3 className="italic font-instrument text-white text-lg">{project.title}</h3>
              <p className="text-sm italic font-bale text-white my-2 leading-tight">
                {project.description}
              </p>
            </div>

            {/* Button */}
            <div className="mt-2 flex items-center gap-1">
              <span className="bg-white text-black italic px-4 py-1 rounded-full font-instrument text-sm">
                Know more
              </span>
              <span className="bg-white text-black px-2 py-2 rounded-full text-sm">
                <FiArrowRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

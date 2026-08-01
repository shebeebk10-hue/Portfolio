export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[rgba(233,233,233,0.33)] dark:bg-[#0f1113] border-b border-gray-300 dark:border-[#2d3238] transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-[5%] lg:px-5 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          <div className="lg:col-start-2 lg:col-span-7">
            <span className="eyebrow">hey, I'am</span>

            <h1 className="font-serif leading-[0.9] mb-4 text-[clamp(32px,4vw,70px)] text-ink dark:text-white">
              Shebeeb K
            </h1>

            <h2 className="text-[clamp(18px,2.5vw,32px)] leading-[1.3] font-light text-[#6c757d] dark:text-[#a0aab4] mb-4">
              Software Engineer <span className="opacity-25">/</span> <br />
              Python Full Stack &amp; Mobile Developer <span className="opacity-25">/</span> <br />
              Data Analytics Specialist
            </h2>

            <p className="font-light text-2xl text-[#6c757d] dark:text-[#a0aab4] max-w-2xl">
              I craft digital experiences that are thoughtful, performant, and purposeful.
              Specializing in Modern Web (Python/React), Mobile (Flutter),
              and Data Science (Power BI/NumPy) with a focus on clean architecture.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap gap-3 self-center">
            <a href="#resume" className="btn-outline-pill no-underline">Resume</a>
            <a href="#projects" className="btn-outline-pill no-underline">View Work</a>
            <a href="#contact" className="btn-outline-pill no-underline">Get In Touch</a>
          </div>

        </div>
      </div>
    </section>
  );
}

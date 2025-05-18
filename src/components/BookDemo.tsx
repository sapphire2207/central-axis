import React from "react";

const BookDemo: React.FC = () => {
  return (
    <section className="relative mx-auto flex flex-col items-center gap-10 px-6 pb-14 bg-black">
      <article
        className="relative flex h-[250px] flex-col items-center justify-center gap-9 self-stretch overflow-hidden rounded-xl border border-[#27272A] bg-surface-secondary p-6"
      >
        {/* Background image */}
        <img
          className="absolute left-0 top-0 h-full w-full object-cover"
          src="https://www.centralaxis.com/background.png"
          alt="Background"
          style={{ filter: "blur(2px)" }}
        />

        {/* Overlays and content */}
        <div
          className="flex h-full w-full flex-col items-center justify-center"
          style={{ zIndex: 10 }}
        >
          {/* Dark overlay */}
          <div className="absolute left-0 top-0 h-full w-full bg-black opacity-60"></div>
          {/* Transparent filter (if needed for effects) */}
          <div className="absolute left-0 top-0 z-10 h-full w-full filter"></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center gap-2 text-center">
            <h4 className="text-center text-3xl font-medium tracking-tighter text-white md:text-4xl">
              Book a Demo
            </h4>
            <p className="mb-4 text-lg text-white/70 md:text-xl">
              See how CentralAxis can revolutionize your data center operations.
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10 flex items-center gap-2">
            <a
              target="_blank"
              href="https://calendly.com/margarita-centralaxis/30min"
              rel="noreferrer"
            >
              <span className="rounded bg-white px-4 py-2 text-base font-semibold text-black">
                Schedule Now
              </span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BookDemo;

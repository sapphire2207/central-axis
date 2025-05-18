import React from "react";

const Future: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center gap-10 px-6 py-14 md:py-[72px] bg-black text-white">
      <article className="bg-[#150E22] flex flex-col justify-center gap-9 self-stretch rounded-xl p-6 lg:flex-row lg:justify-between lg:p-10">
        <div className="flex flex-col gap-2">
          <h4 className="text-white text-3xl font-medium lg:text-4xl">
            We've Built the Future of Data Centers
          </h4>
          <p className="text-[#A1A1AA] text-lg lg:text-xl">
            Contact our team for a demo
          </p>
        </div>
        <div className="grid grid-cols-2 items-center gap-2 md:flex lg:flex-col">
          <a
            className="ring-control bg-[#8b5cf6] hover:bg-[#7C3AED] text-textOnAccent-primary border-accent-600 inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full px-3.5 text-sm font-normal outline-none outline-0 focus-visible:ring-2 md:px-5"
            href="https://calendly.com/margarita-centralaxis/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Set Up a Time
          </a>
          <a
            className="ring-control bg-[#18181B] text-white hover:bg-[#27272A] inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full border border-[#27272A] px-3.5 text-sm font-normal outline-none outline-0 focus-visible:ring-2 md:px-5"
            href="/learn-more"
          >
            Learn More
          </a>
        </div>
      </article>
    </section>
  );
};

export default Future;

import React from "react";
import { assets } from "../assets/assets.ts";

const LOGOS = [
  assets.nvidia,
  assets.amd,
  assets.cisco,
  assets.dell,
  assets.hp,
  assets.intel,
  assets.lenovo,
  assets.schneider,
  assets.supermicro,
];

const REPEATED_LOGOS = [...LOGOS, ...LOGOS];

const Integrations: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-10 py-14 md:pt-[73px] bg-black">
      <h2 className="text-dark-text-tertiary text-center tracking-tight opacity-80 text-[#63636B]">
        Seamless integrations with any data center hardware
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[10%] bg-gradient-to-r from-black" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[10%] bg-gradient-to-l from-black" />

        {/* Scrolling Track */}
        <div className="flex min-w-[300%] animate-scroll whitespace-nowrap">
          {REPEATED_LOGOS.map((logo, index) => (
            <div
              key={index}
              className="flex h-32 items-center justify-center px-8"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-20 w-48 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;

import React from "react";
import {assets} from "../assets/assets.ts";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#27272A] bg-black text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 md:pl-[30px]">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <img
            src={assets.logo}
            alt="Logo"
            width={36}
            height={36}
            loading="lazy"
            decoding="async"
            className="w-9 h-9"
          />
          <p className="text-center text-sm leading-loose md:text-left">
            Copyright © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

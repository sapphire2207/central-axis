import React from "react";
import { assets } from "../assets/assets.ts"; 

const cardData = [
  {
    title: "Resource Management",
    description:
      "See all of your resources in one place, update issues, and dynamically plan your resources.",
    icon: assets.mail,
  },
  {
    title: "Deployment Automation",
    description:
      "From design, sourcing, supply, manufacutinring, and deployment - our system automates the entire process.",
    icon: assets.zap,
  },
  {
    title: "Networking",
    description:
      "Ensure that your networking infrastructure is always in place and ready to scale with your deployments.",
    icon: assets.barchart,
  },
  {
    title: "Firmware Versioning",
    description:
      "Ensure that your firmware is always up to date and secure with our automated versioning system.",
    icon: assets.smile,
  },
  {
    title: "Digital Twins",
    description:
      "Plan capacity intelligently with our digital twin technology.",
    icon: assets.command,
  },
];

const Card: React.FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }) => (
  <article className="bg-[#18181B] flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-[#27272A] p-4 lg:w-full lg:flex-row lg:p-5">
    <figure className="bg-[#27272A] flex size-12 shrink-0 items-center justify-center rounded-full p-3">
      <img
        alt={title}
        loading="lazy"
        width="24"
        height="24"
        src={icon}
        className="dark:invert"
      />
    </figure>
    <div className="flex flex-col items-start gap-1">
      <h5 className="text-lg font-medium">{title}</h5>
      <p className="text-[#71717A] text-pretty">{description}</p>
    </div>
  </article>
);

const BuildForScale: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center gap-10 py-14 md:py-[72px] lg:mx-auto lg:!flex-row lg:gap-0 lg:p-28 bg-black text-white">
      {/* Left Content */}
      <div className="container relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20">
        <div className="sticky bottom-0 top-[calc(var(--header-height)+40px)] flex flex-col gap-10">
          <div className="flex flex-col items-start gap-3 self-start">
            <h3 className="bg-[#18181B] text-[#71717A] flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base">
              Built for Scale
            </h3>
            <div className="flex max-w-[800px] flex-col items-start justify-center gap-1 self-start">
              <h4
                className="text-pretty text-left text-3xl font-medium md:text-4xl"
                title="Supercharge Team Productivity"
              >
                Dynamic Resource Management
              </h4>
            </div>
            <p className="text-[#71717A] max-w-screen-md text-pretty text-left text-lg font-light md:text-xl">
              Seamlessly expand from racks to data centers. Our system grows
              with you, automatically managing resources across your entire
              infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Right Cards */}
      <div className="w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1">
        <div className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
          {cardData.map((card, idx) => (
            <Card
              key={idx}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildForScale;

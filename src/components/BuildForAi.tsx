import React from "react";
import { assets } from "../assets/assets";

const cardData = [
  {
    title: "Advanced Monitoring",
    description:
      "CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.",
    points: [
      "Real-time performance metrics and predictive analytics",
      "Automated alerts and intelligent incident response",
      "Comprehensive reporting and trend analysis",
    ],
    video: assets.monitoring,
  },
  {
    title: "Network Management and Monitoring",
    description:
      "Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.",
    points: [
      "Real-time network performance monitoring and bandwidth optimization",
      "Automated network security and threat detection",
      "Advanced network diagnostics and troubleshooting tools",
    ],
    video: assets.networking,
  },
  {
    title: "Asset Management",
    description:
      "Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.",
    points: [
      "Automated inventory tracking and lifecycle management",
      "Intelligent ticketing based on asset health and performance",
      "Efficient resource allocation and optimization",
    ],
    video: assets.assetManagement,
  },
  {
    title: "A Single Pane of Glass",
    description:
      "A unified view across all of your BMS and EPMS systems, tailored to your needs.",
    points: [
      "Comprehensive visibility across all of your colocation infrastructure",
      "Customizable interface tailored to your specific operational requirements and priorities.",
      "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.",
    ],
    video: assets.singlePane,
  },
  {
    title: "Built-In Compliance",
    description:
      "CentralAxis provides compliance as a service for data centers.",
    points: [
      "Track data for EU, US, and global regulatary standards.",
      "We guarantee compliance and handle every step between monitoring and reporting.",
    ],
    video: assets.compliance,
  },
  {
    title: "Data Center Planning",
    description:
      "Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.",
    points: [
      "Model new architectures and see detailed implications on power and cooling needs.",
      "Design unique specifications for your data center.",
      "Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability.",
    ],
    video: assets.dataCenter,
  },
];

const BuildForAi: React.FC = () => {
  return (
    <section className="relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px] bg-black text-white">
      <div className="flex flex-col items-center gap-3 self-center">
        <h3 className="bg-[#18181B] text-[#71717A] flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base">
          Built for AI
        </h3>
        <div className="flex max-w-[800px] flex-col items-center justify-center gap-1 self-center">
          <h4 className="text-pretty text-center text-3xl font-medium md:text-4xl">
            Modernizing the Digital Backbone
          </h4>
        </div>
        <p className="text-[#71717A] max-w-screen-md text-pretty text-center text-lg font-light md:text-xl">
          Data center software (DCIM, BMS and EPMS) has stagnated. We've built a
          better way.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {cardData.map((card, index) => (
          <article
            key={index}
            className="bg-[#18181B] flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-[#27272A] p-px sm:max-w-full md:w-full md:flex-row xl:gap-16"
          >
            {index % 2 === 0 ? (
              <>
                <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
                  <div
                    className={`flex flex-col items-start ${
                      card.title === "Built-In Compliance" ? "gap-9" : "gap-2"
                    }`}
                  >
                    <h5 className="text-white text-2xl font-medium md:text-3xl">
                      {card.title}
                    </h5>
                    <p className="text-[#A1A1AA] font-normal md:text-lg">
                      {card.description}
                    </p>
                  </div>
                  <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                    {card.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-[#A1A1AA] flex items-center gap-4 font-normal"
                      >
                        <span
                          style={{ minWidth: "1.5rem" }}
                          className="bg-[#27272A] flex size-6 items-center justify-center rounded-full"
                        >
                          <img src={assets.tick} alt="" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "var(--radius)",
                      display: "block",
                      height: "100%",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      inset: "0px",
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        aspectRatio: "16 / 9",
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        border: "none",
                        objectFit: "contain",
                        borderRadius: "var(--radius)",
                      }}
                    >
                      <source src={card.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </figure>
              </>
            ) : (
              <>
                <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "var(--radius)",
                      display: "block",
                      height: "100%",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      inset: "0px",
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        aspectRatio: "16 / 9",
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        border: "none",
                        objectFit: "contain",
                        borderRadius: "var(--radius)",
                      }}
                    >
                      <source src={card.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </figure>

                <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
                  <div className={`flex flex-col items-start ${
                      card.title === "Built-In Compliance" ? "gap-9" : "gap-2"
                    }`}
                  >
                    <h5 className="text-white text-2xl font-medium md:text-3xl">
                      {card.title}
                    </h5>
                    <p className="text-[#A1A1AA] font-normal md:text-lg">
                      {card.description}
                    </p>
                  </div>
                  <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                    {card.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-[#A1A1AA] flex items-center gap-4 font-normal"
                      >
                        <span
                          style={{ minWidth: "1.5rem" }}
                          className="bg-[#27272A] flex size-6 items-center justify-center rounded-full"
                        >
                          <img src={assets.tick} alt="" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </article>

        ))}
      </div>
    </section>
  );
};

export default BuildForAi;

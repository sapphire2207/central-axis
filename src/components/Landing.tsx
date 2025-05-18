import React from "react";

const Landing: React.FC = () => {
  return (
    <section className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10 bg-black
    ">
      {/* Background grid */}
      <div className="border-[#202024] absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b">
        <div className="col-span-1 flex h-full items-center justify-center"></div>
        <div className="border-[#202024] col-span-1 flex h-full items-center justify-center border-x"></div>
        <div className="col-span-1 flex h-full items-center justify-center"></div>
      </div>

      {/* Blurred figure behind content */}
      <figure className="bg-[#8B5CF6]/40 pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full blur-[200px]"></figure>

      {/* Additional blurred backgrounds */}
      <figure className="bg-[#7c3aed1a] pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] md:block"></figure>
      <figure className="bg-[#7c3aed1a] pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full opacity-50 blur-[100px] md:block"></figure>

      {/* Content container */}
      <div className="relative z-10 flex flex-col divide-y divide-[#202024] pt-[35px]">
        <div>
          <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
            <h1 className="text-[#111827] dark:text-[#f9fafb] max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] md:tracking-[-2.16px]">
              Data Center Management Software
            </h1>
            <h2 className="text-md text-[#63636B] max-w-2xl text-pretty text-center md:text-lg">
              Increase uptime, reduce costs, automate operations, and stay compliant.
            </h2>
            <h2 className="text-md text-[#63636B] max-w-2xl text-pretty text-center md:text-lg">
              Built for colocations, data centers, and cloud providers.
            </h2>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex items-start justify-center px-8 sm:px-24">
          <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
            <a
              className="bg-[#8b5cf6] hover:bg-[#6832C5] text-[#ffffff] border-[#6C33CF] 
                        flex h-14 w-full shrink-0 flex-col items-center justify-center gap-1 
                        rounded-none px-3.5 text-sm font-normal outline-none focus-visible:ring-2 md:px-5"
              href="https://calendly.com/margarita-centralaxis/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

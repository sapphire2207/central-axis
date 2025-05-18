import React from "react";

const faqItems = [
  {
    question: "Are these solutions applicable to me if I am operating a co-location?",
    answer:
      "Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.",
  },
  {
    question: "How do you ensure data privacy and security?",
    answer:
      "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Depending on your requirements, we offer flexible pricing models.",
  },
  {
    question: "Do you provide ongoing support and maintenance for your solutions?",
    answer:
      "Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Set up a demo and we'll guide you through our offerings and start a trial!",
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px] bg-black text-white">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 self-center">
        <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base bg-[#18181B] text-[#71717A]">
          FAQs
        </h3>

        <div className="flex max-w-[800px] flex-col items-center justify-center gap-1 self-center">
          <h4
            className="text-pretty text-center text-3xl font-medium md:text-4xl"
            title="Frequently asked questions"
          >
            Frequently asked questions
          </h4>
        </div>

        <p className="max-w-screen-md text-pretty text-center text-lg font-light text-[#71717A] md:text-xl">
          Find answers to common questions about our solutions.
        </p>
      </div>

      {/* FAQ Items */}
      <ul className="mx-auto flex w-full flex-col place-content-start items-start gap-8 self-stretch lg:grid lg:grid-cols-3 lg:gap-14 lg:px-24">
        {faqItems.map((item, index) => (
          <li key={index} className="flex flex-col gap-1.5">
            <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
              {item.question}
            </p>
            <p className="text-sm leading-relaxed tracking-tight text-[#71717A] sm:text-base">
              {item.answer}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;

import { HiSparkles } from "react-icons/hi2";
export default function ScrollingText() {
  const words = [
    "Smart Cleaning",
    "100% Satisfaction Guarantee",
    "Modern Technology",
    "Eco-Friendly Products",
    "Expert & Insured Cleaners",
  ];

  return (
    <div className="bg-green-dark text-white py-4 overflow-hidden relative border-y border-green-medium/30">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        {/* Double the list of items to allow infinite seamless looping */}
        {[...words, ...words, ...words].map((word, idx) => (
          <div
            key={idx}
            className="flex items-center mx-8 text-lg md:text-xl font-bold uppercase tracking-wider"
          >
            <span>{word}</span>
            <HiSparkles className="ml-4 text-green-light h-5 w-5" />
          </div>
        ))}
      </div>
    </div>
  );
}

import { FiCheck } from "react-icons/fi";
import ContainerLayout from "./ContainerLayout";
import { REASONS_DATA } from "../constants/data";

export default function WhyChoice() {
  const reasons = REASONS_DATA;

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <ContainerLayout>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-center md:text-left space-y-3">
              <span className="bg-[#0A1F1C] text-lime-400 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider inline-block shadow-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
                Why Cleanora is the Right Choice
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed text-center md:text-left">
              We know cleaning is a personal service. That's why we take the
              time to recruit and train only the best professionals in the
              market, backed by our ironclad guarantees.
            </p>

            <div className="pt-2 divide-y divide-gray-100">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <div className="shrink-0 pt-0.5">
                    <div className="bg-lime-400 text-gray-950 p-1.5 rounded-full flex items-center justify-center w-7 h-7 shadow-md shadow-lime-400/20">
                      <FiCheck className="h-4 w-4 stroke-[3]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-gray-950 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Content */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800"
                alt="Professional cleaner wearing gloves and holding eco-friendly spray bottle"
                loading="lazy"
                decoding="async"
                className="w-full h-100 lg:h-120 object-cover hover:scale-102 transition-transform duration-500"
              />
              {/* Overlay card */}
              <div className="hidden lg:block absolute bottom-6 right-6 bg-[#0A1F1C] text-white p-6 rounded-xl sm:rounded-2xl shadow-2xl max-w-xs border border-white/15 backdrop-blur-md">
                <p className="text-3xl font-black text-lime-400">99.8%</p>
                <p className="text-xs font-semibold text-white/80 mt-1 leading-relaxed">
                  Of our clients recommend our services to friends and
                  neighbors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";
import ContainerLayout from "./ContainerLayout";
import { FAQS_DATA } from "../constants/data";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const navigate = useNavigate();

  const faqs = FAQS_DATA;

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F8FAF8]">
      <ContainerLayout>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="bg-[#0A1F1C] text-lime-400 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider inline-block shadow-sm">
                Support & FAQs
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
                Got Questions? We've Got Answers
              </h2>
            </div>

            <div className="space-y-4 pt-2">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    openIdx === idx
                      ? "bg-white border-[#0A1F1C] shadow-lg"
                      : "bg-white border-gray-200/80 hover:border-gray-400"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-extrabold text-sm sm:text-base text-gray-950 cursor-pointer gap-4"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`p-2 rounded-full transition-colors flex-shrink-0 ${
                        openIdx === idx
                          ? "bg-[#0A1F1C] text-lime-400"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {openIdx === idx ? (
                        <FiMinus className="h-4 w-4" />
                      ) : (
                        <FiPlus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIdx === idx
                        ? "max-h-64 border-t border-gray-100"
                        : "max-h-0"
                    }`}
                  >
                    <p className="p-5 sm:p-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dark Forest Support CTA Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-[#0A1F1C] text-white border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center space-y-6 relative overflow-hidden shadow-2xl">
              <div className="h-44 sm:h-52 rounded-2xl overflow-hidden relative border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800"
                  alt="Team of cleaners standing together smiling"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0A1F1C]/20" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-black text-white">
                  Expert Cleaning for Modern Living
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto font-medium">
                  A professional team of 100+ vetted and background-checked
                  cleaners are ready to transform your spaces today.
                </p>
              </div>

              <div className="flex justify-center w-full">
                <button
                  onClick={() => navigate("/quote")}
                  className="w-full bg-lime-400 hover:bg-lime-300 text-gray-950 font-black py-4 rounded-full transition-all shadow-xl shadow-lime-400/20 flex items-center justify-center gap-3 hover:scale-105 cursor-pointer text-sm sm:text-base group"
                >
                  <span>Book Now</span>
                  <span className="w-7 h-7 rounded-full bg-gray-950 text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                    <FiArrowRight className="stroke-[2.5]" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

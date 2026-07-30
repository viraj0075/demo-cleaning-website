import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import ContainerLayout from "./ContainerLayout";
import { PRICING_DATA } from "../constants/data";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState("monthly"); // 'monthly' or 'yearly'
  const [bedrooms, setBedrooms] = useState("2 Bedrooms");
  const [bathrooms, setBathrooms] = useState("1 Bathroom");
  const navigate = useNavigate();

  const handleToggle = (period) => {
    setBillingPeriod(period);
  };

  const getPrice = (basePrice) => {
    if (billingPeriod === "yearly") {
      return Math.round(basePrice * 0.8); // 20% savings
    }
    return basePrice;
  };

  const { basic, premium } = PRICING_DATA;

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#F8FAF8]">
      <ContainerLayout>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-4">
          <span className="bg-[#0A1F1C] text-lime-400 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2 inline-block shadow-sm">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
            Affordable Plans for Easy Clean
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium max-w-lg mx-auto leading-relaxed">
            Choose the clean option that fits your calendar and budget. Cancel
            or upgrade anytime.
          </p>

          {/* Toggle Swiper */}
          <div className="inline-flex max-w-full flex-wrap sm:flex-nowrap justify-center items-center gap-1.5 p-1.5 bg-gray-200/70 border border-gray-300/60 rounded-full mt-4 sm:mt-6 shadow-inner">
            <button
              onClick={() => handleToggle("monthly")}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-[#0A1F1C] text-lime-400 shadow-md"
                  : "text-gray-700 hover:text-gray-950"
              }`}
            >
              Monthly Plan
            </button>
            <button
              onClick={() => handleToggle("yearly")}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                billingPeriod === "yearly"
                  ? "bg-[#0A1F1C] text-lime-400 shadow-md"
                  : "text-gray-700 hover:text-gray-950"
              }`}
            >
              <span>Yearly Plan</span>
              <span className="bg-lime-400 text-gray-950 px-2 py-0.5 rounded-full text-[10px] uppercase font-black whitespace-nowrap">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          {/* Left Card: Basic Clean */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200/80 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-row items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950">
                    {basic.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">
                    {basic.tagline}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-gray-400 text-[10px] sm:text-xs font-black uppercase tracking-wider block">
                    STARTS AT
                  </span>
                  <p className="text-3xl sm:text-4xl font-black text-gray-950">
                    ${getPrice(basic.basePrice)}
                    <span className="text-gray-400 text-xs font-medium">
                      /mo
                    </span>
                  </p>
                </div>
              </div>

              {/* Selector Previews */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="border border-gray-200/80 rounded-2xl p-3 bg-gray-50/70 flex items-center justify-between text-xs sm:text-sm font-bold text-gray-800">
                  <label
                    htmlFor="bedrooms-select"
                    className="text-gray-700 font-bold"
                  >
                    Bedrooms
                  </label>
                  <select
                    id="bedrooms-select"
                    aria-label="Select number of bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="bg-transparent border-none text-gray-950 font-black focus:outline-none cursor-pointer text-xs sm:text-sm text-right"
                  >
                    <option value="1 Bedroom">1 Bed</option>
                    <option value="2 Bedrooms">2 Beds</option>
                    <option value="3 Bedrooms">3 Beds</option>
                    <option value="4 Bedrooms">4 Beds</option>
                  </select>
                </div>
                <div className="border border-gray-200/80 rounded-2xl p-3 bg-gray-50/70 flex items-center justify-between text-xs sm:text-sm font-bold text-gray-800">
                  <label
                    htmlFor="bathrooms-select"
                    className="text-gray-700 font-bold"
                  >
                    Bathrooms
                  </label>
                  <select
                    id="bathrooms-select"
                    aria-label="Select number of bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="bg-transparent border-none text-gray-950 font-black focus:outline-none cursor-pointer text-xs sm:text-sm text-right"
                  >
                    <option value="1 Bathroom">1 Bath</option>
                    <option value="2 Bathrooms">2 Baths</option>
                    <option value="3 Bathrooms">3 Baths</option>
                  </select>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3.5 pt-2">
                {basic.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <span className="p-1 rounded-full bg-lime-100 text-[#0A1F1C] mt-0.5 flex-shrink-0">
                      <FiCheck className="h-3.5 w-3.5 stroke-3" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-100 flex justify-center">
              <button
                onClick={() =>
                  navigate(`/quote?plan=basic-clean&billing=${billingPeriod}`)
                }
                className="w-full bg-[#0A1F1C] hover:bg-black text-white font-black py-4 rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-3 text-sm sm:text-base cursor-pointer group"
              >
                <span>Book Now</span>
                <span className="w-7 h-7 rounded-full bg-lime-400 text-gray-950 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                  <FiArrowRight className="stroke-[2.5]" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Card: Premium Clean (Dark Forest Featured Card) */}
          <div className="bg-[#0A1F1C] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-lime-400/40 shadow-2xl flex flex-col justify-between relative mt-4 md:mt-0">
            <span className="absolute -top-4 left-6 sm:left-8 bg-lime-400 text-gray-950 font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              {premium.badge}
            </span>

            <div className="space-y-6">
              {/* Testimonial callout box inside the card */}
              <div className="bg-white/10 rounded-2xl p-4 sm:p-5 border border-white/15 backdrop-blur-md mt-2">
                <div className="flex items-center gap-3 mb-2.5 flex-wrap">
                  <div className="flex -space-x-2">
                    {premium.testimonial.avatars.map((img, i) => (
                      <img
                        key={i}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                        src={img}
                        alt=""
                      />
                    ))}
                  </div>
                  <div className="flex text-yellow-400 gap-0.5 text-xs sm:text-sm">
                    {[...Array(premium.testimonial.rating)].map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-xs font-medium text-white/90 leading-relaxed italic">
                  {premium.testimonial.text}
                </p>
                <span className="text-[10px] text-lime-400 font-extrabold uppercase tracking-wider block mt-2">
                  {premium.testimonial.author}
                </span>
              </div>

              {/* Inclusions list */}
              <div className="space-y-3.5">
                <p className="text-[10px] font-black text-lime-400 uppercase tracking-widest">
                  Premium Clean includes:
                </p>
                <div className="space-y-3">
                  {premium.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <span className="p-1 rounded-full bg-lime-400/20 text-lime-400 mt-0.5 flex-shrink-0">
                        <FiCheck className="h-3.5 w-3.5 stroke-3" />
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white/90 leading-tight">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <span className="text-white/60 text-[10px] sm:text-xs font-black uppercase tracking-wider block">
                  STARTS AT
                </span>
                <p className="text-3xl sm:text-4xl font-black text-white">
                  ${getPrice(premium.basePrice)}
                  <span className="text-white/60 text-xs font-medium">/mo</span>
                </p>
              </div>
              <button
                onClick={() =>
                  navigate(`/quote?plan=premium-clean&billing=${billingPeriod}`)
                }
                className="w-full sm:flex-1 max-w-sm bg-lime-400 hover:bg-lime-300 text-gray-950 font-black py-4 rounded-full shadow-xl shadow-lime-400/20 hover:scale-105 transition-all flex items-center justify-center gap-3 text-sm sm:text-base cursor-pointer group"
              >
                <span>Book Now</span>
                <span className="w-7 h-7 rounded-full bg-gray-950 text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                  <FiArrowRight className="stroke-[2.5]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

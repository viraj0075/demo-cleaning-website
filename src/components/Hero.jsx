import { AiFillStar } from "react-icons/ai";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ContainerLayout from "./ContainerLayout";
import { HERO_IMAGES_DATA } from "../constants/data";

export default function Hero() {
  const navigate = useNavigate();
  const heroImages = HERO_IMAGES_DATA;

  return (
    <section className="relative overflow-hidden bg-[#0A1F1C] text-white">
      <div className="pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 text-center md:text-left">
        <ContainerLayout>
          {/* Top Rating Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <AiFillStar className="text-emerald-400 h-4 w-4" />
            <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wide">
              4.8/5 star on Trustpilot
            </span>
          </div>

          {/* 2-Column Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
            {/* Left Giant Headline */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Bringing freshness <br />
                to <span className="text-lime-400">every</span> little corner.
              </h1>
            </div>

            {/* Right Description & Action Buttons */}
            <div className="lg:col-span-5 space-y-6 lg:pt-2">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium max-w-lg">
                Experience meticulous cleaning that refreshes your home,
                enhances comfort, and brings care into every corner.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-1">
                {/* Book Now Lime Pill Button */}
                <button
                  onClick={() => navigate("/quote")}
                  className="bg-lime-400 hover:bg-lime-300 text-gray-950 font-black px-7 sm:px-9 py-3.5 sm:py-4 rounded-full inline-flex items-center gap-3.5 transition-all duration-300 shadow-xl shadow-lime-400/20 hover:scale-105 cursor-pointer text-sm sm:text-base group"
                >
                  <span>Book Now</span>
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-950 text-white flex items-center justify-center text-sm group-hover:translate-x-0.5 transition-transform">
                    <FiArrowRight className="stroke-[2.5]" />
                  </span>
                </button>

                {/* Learn More Text Link */}
                <button
                  onClick={() => {
                    const el = document.getElementById("about");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white hover:text-lime-400 text-xs sm:text-sm font-bold inline-flex items-center gap-1 transition-colors cursor-pointer group py-2"
                >
                  <span>Learn more</span>
                  <FiChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-white/70 group-hover:text-lime-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Infinite Image Marquee Slider */}
          <div className="relative w-full overflow-hidden pt-4 pb-2">
            {/* Left and Right Fade Edge Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#0A1F1C] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#0A1F1C] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 sm:gap-6 animate-marquee-slow w-max hover:[animation-play-state:paused]">
              {/* Duplicated array for seamless infinite marquee scrolling */}
              {[...heroImages, ...heroImages].map((img, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 w-60 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 shrink-0 group/card transition-all duration-300 hover:border-lime-400/50 hover:scale-[1.02] cursor-pointer"
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full inline-block">
                      {img.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ContainerLayout>
      </div>
    </section>
  );
}

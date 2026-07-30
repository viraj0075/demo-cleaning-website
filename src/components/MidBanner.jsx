import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ContainerLayout from "./ContainerLayout";

export default function MidBanner() {
  const navigate = useNavigate();

  return (
    <section className="py-12 lg:py-16 bg-[#F8FAF8]">
      <ContainerLayout>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-[#0A1F1C]">
          {/* Left Column: Image */}
          <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-auto min-h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800"
              alt="Sparkling clean interior space background"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1F1C]/30 mix-blend-multiply" />
          </div>

          {/* Right Column: Dark Forest Text Block */}
          <div className="lg:col-span-6 bg-[#0A1F1C] text-white p-6 sm:p-10 lg:p-14 flex flex-col justify-center space-y-6">
            <div>
              <span className="bg-white/10 text-lime-400 border border-white/15 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 inline-block">
                Quick & Reliable
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Effortless Cleaning for Modern Living
              </h2>
            </div>

            <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed">
              Your busy schedule shouldn't get in the way of a pristine home.
              Our streamlined booking process connects you with trusted experts
              in under 60 seconds.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => navigate("/quote")}
                className="bg-lime-400 hover:bg-lime-300 text-gray-950 font-black px-7 sm:px-8 py-3.5 sm:py-4 rounded-full inline-flex items-center gap-3 transition-all duration-300 shadow-xl shadow-lime-400/20 hover:scale-105 cursor-pointer text-sm sm:text-base group"
              >
                <span>Book a Cleaner</span>
                <span className="w-8 h-8 rounded-full bg-gray-950 text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                  <FiArrowRight className="stroke-[2.5]" />
                </span>
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById("about");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-white/30 hover:border-white text-white hover:bg-white/10 font-bold px-6 py-3.5 rounded-full transition-all hover:-translate-y-0.5 cursor-pointer text-xs sm:text-sm text-center"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

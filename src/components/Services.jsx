import { useNavigate } from "react-router-dom";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import ContainerLayout from "./ContainerLayout";
import { SERVICES_DATA } from "../constants/data";

export default function Services() {
  const navigate = useNavigate();
  const servicesData = SERVICES_DATA;

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F8FAF8]">
      <ContainerLayout>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6 text-center md:text-left">
          <div className="space-y-3">
            <span className="bg-[#0A1F1C] text-lime-400 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider inline-block shadow-sm">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              Explore Our Cleaning Services
            </h2>
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <button
              onClick={() => navigate("/quote")}
              className="bg-lime-400 hover:bg-lime-300 text-gray-950 font-black px-7 sm:px-8 py-3.5 sm:py-4 rounded-full inline-flex items-center gap-3 transition-all duration-300 shadow-xl shadow-lime-400/20 hover:scale-105 cursor-pointer text-sm sm:text-base group"
            >
              <span>Book Now</span>
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-950 text-white flex items-center justify-center text-sm group-hover:translate-x-0.5 transition-transform">
                <FiArrowRight className="stroke-[2.5]" />
              </span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200/80 hover:border-lime-500/40 flex flex-col h-full group"
            >
              {/* Image Block */}
              <div className="h-64 sm:h-80 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6">
                  <span className="bg-[#0A1F1C]/90 backdrop-blur-md border border-white/15 text-lime-400 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-8 grow flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-950 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.bullets.map((bullet, bulletIdx) => (
                      <div
                        key={bulletIdx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-bold"
                      >
                        <span className="bg-lime-100 text-[#0A1F1C] p-1 rounded-full flex-shrink-0">
                          <FiCheck className="h-3.5 w-3.5 stroke-[3]" />
                        </span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    Starting at{" "}
                    <strong className="text-gray-950 text-base">
                      {service.price}
                    </strong>
                  </span>
                  <button
                    onClick={() =>
                      navigate(
                        `/quote?plan=${service.title.toLowerCase().replace(/ \/ | & | /g, "-")}`,
                      )
                    }
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#0A1F1C] hover:text-lime-600 cursor-pointer transition-colors group/btn"
                  >
                    <span>Get Started</span>
                    <FiArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
}

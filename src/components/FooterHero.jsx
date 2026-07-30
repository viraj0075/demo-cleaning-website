import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function FooterHero() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0A1F1C] border-t border-white/10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
          alt="Spotless luxury interior background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1F1C]/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="bg-white/10 text-lime-400 border border-white/15 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider inline-block shadow-sm">
          Ready to Start?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
          Your Free & Spotless Home <br className="hidden sm:inline" />
          Begins Now.
        </h2>
        <p className="text-white/80 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
          Request your customized cleaning estimate in under a minute and let our certified professionals take care of the heavy lifting.
        </p>
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => navigate('/quote')}
            className="bg-lime-400 hover:bg-lime-300 text-gray-950 font-black px-8 sm:px-10 py-4 sm:py-4.5 rounded-full transition-all shadow-2xl shadow-lime-400/25 hover:scale-105 flex items-center justify-center gap-3.5 cursor-pointer text-sm sm:text-base md:text-lg group"
          >
            <span>Get Started</span>
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-950 text-white flex items-center justify-center text-sm group-hover:translate-x-0.5 transition-transform">
              <FiArrowRight className="stroke-[2.5]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

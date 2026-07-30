import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import ContainerLayout from './ContainerLayout';

export default function Footer() {
  return (
    <footer className="bg-[#0A1F1C] text-white border-t border-white/10">
      <ContainerLayout>
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10">

            {/* Brand Col */}
            <div className="sm:col-span-2 space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
              <Link to="/" className="inline-flex items-center gap-2 group">
                <div className="bg-white/10 p-2 rounded-xl text-white border border-white/15 group-hover:scale-105 transition-transform">
                  <HiSparkles className="h-5 w-5 text-lime-400" />
                </div>
                <span className="text-2xl font-black tracking-tight text-white">
                  Cleanora <span className="text-lime-400">Cleaners</span>
                </span>
              </Link>
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed max-w-xs font-medium">
                Connecting you with certified, vetted local cleaning professionals. 100% satisfaction guaranteed for sparkling home & office spaces.
              </p>
              <div className="flex justify-center sm:justify-start space-x-3 pt-2">
                {[
                  { icon: <FaFacebookF />, url: '#', name: 'Facebook' },
                  { icon: <FaTwitter />, url: '#', name: 'Twitter' },
                  { icon: <FaInstagram />, url: '#', name: 'Instagram' },
                  { icon: <FaLinkedinIn />, url: '#', name: 'LinkedIn' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.name}
                    className="bg-white/10 hover:bg-lime-400 hover:text-gray-950 p-2.5 rounded-full text-white text-sm transition-all duration-300 border border-white/10"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links Col */}
            <div className="text-center sm:text-left">
              <h4 className="font-extrabold text-lime-400 text-xs sm:text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-medium">
                <li>
                  <Link to="/" className="hover:text-lime-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/#about" className="hover:text-lime-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/#pricing" className="hover:text-lime-400 transition-colors">
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <Link to="/#testimonials" className="hover:text-lime-400 transition-colors">
                    Customer Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/quote" className="hover:text-lime-400 transition-colors">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Col */}
            <div className="text-center sm:text-left">
              <h4 className="font-extrabold text-lime-400 text-xs sm:text-sm uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-medium">
                {[
                  { name: 'Basic Clean', plan: 'basic-clean' },
                  { name: 'Premium Clean', plan: 'premium-clean' },
                  { name: 'Office Cleaning', plan: 'office-cleaning' },
                  { name: 'Deep / Spring Clean', plan: 'deep-spring-clean' },
                  { name: 'Carpet & Window', plan: 'carpet-window-care' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={`/quote?plan=${item.plan}`} className="hover:text-lime-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support / Contact Col */}
            <div className="text-center sm:text-left">
              <h4 className="font-extrabold text-lime-400 text-xs sm:text-sm uppercase tracking-wider mb-4">Contact Support</h4>
              <ul className="space-y-3 text-xs sm:text-sm text-white/80 font-medium">
                <li>
                  <span className="block text-[10px] uppercase text-white/50 font-black">Call Us</span>
                  <a href="tel:+18005553264" className="text-white hover:text-lime-400 text-xs sm:text-sm font-bold mt-0.5 block transition-colors">
                    +1 (800) 555-3264
                  </a>
                </li>
                <li>
                  <span className="block text-[10px] uppercase text-white/50 font-black">Email</span>
                  <a href="mailto:support@cleanora.com" className="text-white hover:text-lime-400 text-xs sm:text-sm font-bold mt-0.5 block transition-colors">
                    support@cleanora.com
                  </a>
                </li>
                <li>
                  <span className="block text-[10px] uppercase text-white/50 font-black">Location</span>
                  <span className="text-white/90 text-xs sm:text-sm font-bold mt-0.5 block">
                    100 Clean Street, Suite 400, Chicago, IL
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 font-medium gap-4 text-center sm:text-left">
            <p>© 2026 Cleanora Inc. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-lime-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-lime-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FiHome, FiCheck, FiArrowRight, FiUser, FiMail, FiPhone, FiMapPin, FiBriefcase, FiZap, FiDroplet } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';

export default function QuotePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialPlan = searchParams.get('plan') || '';

  // Get mapped initial plan
  const getInitialCleaningType = () => {
    const plan = initialPlan.toLowerCase();
    if (plan.includes('premium')) return 'premium';
    if (plan.includes('office')) return 'office';
    if (plan.includes('deep') || plan.includes('spring')) return 'deep';
    if (plan.includes('carpet') || plan.includes('window')) return 'carpet';
    return 'house'; // default house clean
  };

  // Form states
  const [cleaningType, setCleaningType] = useState(getInitialCleaningType());
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [estimatedCost, setEstimatedCost] = useState(39);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync initial type if url plan changes
  useEffect(() => {
    document.title = "Book Cleaning Service Online | Cleanora Quote";
    if (initialPlan) {
      setCleaningType(getInitialCleaningType());
    }
  }, [initialPlan]);

  // Pricing calculation logic (Price matching selected plan only)
  useEffect(() => {
    let base = 39;
    if (cleaningType === 'premium') base = 79;
    else if (cleaningType === 'office') base = 99;
    else if (cleaningType === 'deep') base = 129;
    else if (cleaningType === 'carpet') base = 79;
    setEstimatedCost(base);
  }, [cleaningType]);

  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (!phone.trim() || phoneDigits.length < 7) {
      newErrors.phone = 'Please enter a valid phone number (at least 7 digits).';
    }

    if (!address.trim() || address.trim().length < 5) {
      newErrors.address = 'Please enter your complete cleaning address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 600);
    }
  };

  const services = [
    { id: 'house', name: 'Basic Clean', price: '$39', icon: <FiHome className="h-5 w-5" />, desc: 'Standard dusting, mopping & vacuuming.' },
    { id: 'premium', name: 'Premium Clean', price: '$79', icon: <HiSparkles className="h-5 w-5" />, desc: 'Standard details plus oven & interior fridge.' },
    { id: 'office', name: 'Office Clean', price: '$99', icon: <FiBriefcase className="h-5 w-5" />, desc: 'Tailored commercial schedules & workspaces.' },
    { id: 'deep', name: 'Deep / Spring', price: '$129', icon: <FiZap className="h-5 w-5" />, desc: 'Detailed scrub & post-move sanitizing.' },
    { id: 'carpet', name: 'Carpet & Window', price: '$79', icon: <FiDroplet className="h-5 w-5" />, desc: 'Steam carpet extraction & streak-free windows.' }
  ];

  if (submitted) {
    return (
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gray-50/50 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-famic-lg border border-gray-100 p-6 sm:p-8 md:p-12 text-center space-y-6">
          <div className="bg-green-50 text-green-600 p-4 sm:p-6 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto shadow-md">
            <FiCheck className="h-8 w-8 sm:h-10 sm:w-10 stroke-[3]" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-green-medium">Booking Request Sent!</h2>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
              Thank you, <span className="font-bold text-green-medium">{fullName}</span>. We have sent a confirmation email to <span className="font-semibold text-green-medium">{email}</span>. Our team will contact you shortly at <span className="font-semibold text-green-medium">{phone}</span>.
            </p>
          </div>

          {/* Booking Summary Box */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-100 text-left space-y-3.5">
            <h3 className="font-bold text-green-medium text-xs sm:text-sm border-b border-gray-200 pb-2 uppercase tracking-wider">Cleaning Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs sm:text-sm">
              <span className="text-gray-400">Service:</span>
              <span className="text-green-medium font-semibold sm:text-right capitalize">
                {services.find(s => s.id === cleaningType)?.name || cleaningType}
              </span>

              <span className="text-gray-400">Client Name:</span>
              <span className="text-green-medium font-semibold sm:text-right">{fullName}</span>

              <span className="text-gray-400">Email:</span>
              <span className="text-green-medium font-semibold sm:text-right truncate">{email}</span>

              <span className="text-gray-400">Phone:</span>
              <span className="text-green-medium font-semibold sm:text-right">{phone}</span>

              <span className="text-gray-400">Cleaning Address:</span>
              <span className="text-green-medium font-semibold sm:text-right truncate">{address}</span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between items-baseline">
              <span className="text-green-medium font-extrabold text-sm sm:text-base">Booking Cost:</span>
              <span className="text-green-dark font-black text-xl sm:text-2xl">${estimatedCost}/mo</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="w-full bg-green-dark hover:bg-green-medium text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-lg shadow-green-dark/20 cursor-pointer text-xs sm:text-sm"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 bg-green-50 px-3.5 py-1.5 rounded-xl text-xs font-bold text-green-dark border border-blue-100">
            <HiSparkles className="h-4 w-4 animate-pulse" />
            Super Fast Online Booking
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-green-medium tracking-tight">Book Your Cleaning</h1>
          <p className="text-gray-500 text-xs sm:text-sm font-semibold max-w-lg mx-auto">
            Enter your details below to schedule your cleaning package instantly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

          {/* Main Form Fields */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-100 shadow-famic-md space-y-6 sm:space-y-8">

            {/* Step 1: Select Plan */}
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-3">
                <h3 className="text-base sm:text-lg font-extrabold text-green-medium">1. Select Service Plan</h3>
                <p className="text-gray-400 text-[11px] mt-0.5 font-medium">Choose a service tier that fits your needs.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {services.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => setCleaningType(srv.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between h-36 text-left group ${cleaningType === srv.id
                      ? 'border-green-dark bg-green-50/20 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-xl transition-colors ${cleaningType === srv.id ? 'bg-green-dark text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                        }`}>
                        {srv.icon}
                      </div>
                      <span className="font-black text-green-medium text-base sm:text-lg">{srv.price}</span>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-green-medium text-xs sm:text-sm leading-snug">{srv.name}</h4>
                      <p className="text-[10px] text-gray-400 font-medium leading-tight mt-1 truncate">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Contact & Address Details */}
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-3">
                <h3 className="text-base sm:text-lg font-extrabold text-green-medium">2. Your Contact & Address</h3>
                <p className="text-gray-400 text-[11px] mt-0.5 font-medium">Please enter your contact and cleaning location details.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-green-medium flex items-center gap-1.5">
                    <FiUser className="text-green-dark" /> Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: null });
                    }}
                    className={`w-full bg-gray-50/80 border rounded-xl px-3.5 py-3 text-xs sm:text-sm text-green-medium focus:outline-none font-semibold transition-colors ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-green-dark'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] font-bold text-red-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-green-medium flex items-center gap-1.5">
                    <FiMail className="text-green-dark" /> Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    className={`w-full bg-gray-50/80 border rounded-xl px-3.5 py-3 text-xs sm:text-sm text-green-medium focus:outline-none font-semibold transition-colors ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-green-dark'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] font-bold text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-green-medium flex items-center gap-1.5">
                    <FiPhone className="text-green-dark" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: null });
                    }}
                    className={`w-full bg-gray-50/80 border rounded-xl px-3.5 py-3 text-xs sm:text-sm text-green-medium focus:outline-none font-semibold transition-colors ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-green-dark'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] font-bold text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-green-medium flex items-center gap-1.5">
                    <FiMapPin className="text-green-dark" /> Cleaning Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Main St, Apt 4B, Chicago, IL"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      if (errors.address) setErrors({ ...errors, address: null });
                    }}
                    className={`w-full bg-gray-50/80 border rounded-xl px-3.5 py-3 text-xs sm:text-sm text-green-medium focus:outline-none font-semibold transition-colors ${
                      errors.address ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-green-dark'
                    }`}
                  />
                  {errors.address && (
                    <p className="text-[11px] font-bold text-red-500 mt-1">{errors.address}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Form Submit Button with Text and Arrow */}
            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 sm:px-10 bg-lime-400 hover:bg-lime-300 text-gray-950 font-black py-4 rounded-full shadow-xl shadow-lime-400/20 hover:scale-105 transition-all flex items-center justify-center gap-3 cursor-pointer text-sm sm:text-base disabled:opacity-75 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-950 border-t-transparent rounded-full animate-spin" />
                    <span>Processing Booking...</span>
                  </>
                ) : (
                  <>
                    <span>Book Now</span>
                    <span className="w-7 h-7 rounded-full bg-gray-950 text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                      <FiArrowRight className="stroke-[2.5]" />
                    </span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Live Estimate Cost Card */}
          <div className="lg:col-span-4 bg-white border border-gray-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl space-y-5 sm:space-y-6">
            <h3 className="font-black text-gray-950 text-base pb-3 border-b border-gray-100">Live Estimate Summary</h3>

            <div className="space-y-3 text-xs font-semibold">
              <div className="flex justify-between">
                <span className="text-gray-400">Selected Plan</span>
                <span className="text-gray-950 font-extrabold capitalize">
                  {services.find(s => s.id === cleaningType)?.name}
                </span>
              </div>
            </div>

            <div className="bg-[#0A1F1C] text-white p-5 sm:p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-1 text-center shadow-lg">
              <span className="text-[10px] text-lime-400 font-extrabold uppercase tracking-wider">Estimated price</span>
              <span className="text-white font-black text-3xl sm:text-4xl">${estimatedCost}<span className="text-xs font-semibold text-white/60">/mo</span></span>
              <span className="text-white/60 text-[10px] font-medium mt-1">Taxes & fees included. Cancel for free.</span>
            </div>

            {/* Confirm submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-lime-400 hover:bg-lime-300 text-gray-950 font-black py-4 rounded-full shadow-xl shadow-lime-400/20 hover:scale-105 transition-all flex items-center justify-center gap-3 cursor-pointer text-sm sm:text-base disabled:opacity-75 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-950 border-t-transparent rounded-full animate-spin" />
                  <span>Processing Booking...</span>
                </>
              ) : (
                <>
                  <span>Book Now</span>
                  <span className="w-7 h-7 rounded-full bg-gray-950 text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                    <FiArrowRight className="stroke-[2.5]" />
                  </span>
                </>
              )}
            </button>

            {/* Trust highlights */}
            <div className="space-y-3 text-xs text-gray-500 font-semibold border-t border-gray-100 pt-4 sm:pt-5">
              <div className="flex items-center gap-2">
                <div className="bg-green-50 text-green-600 p-1.5 rounded-xl flex-shrink-0"><FiCheck className="h-3.5 w-3.5 stroke-[3]" /></div>
                <span>Free reschedule 24 hours prior</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-50 text-green-600 p-1.5 rounded-xl flex-shrink-0"><FiCheck className="h-3.5 w-3.5 stroke-[3]" /></div>
                <span>Certified green safe solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-50 text-green-600 p-1.5 rounded-xl flex-shrink-0"><FiCheck className="h-3.5 w-3.5 stroke-[3]" /></div>
                <span>Fully vetted & trained staff</span>
              </div>
            </div>
          </div>


        </form>

      </div>
    </div>
  );
}

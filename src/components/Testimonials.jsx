import { useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ContainerLayout from "./ContainerLayout";
import { REVIEWS_DATA } from "../constants/data";

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 340;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const reviews = REVIEWS_DATA;

  return (
    <section className="py-16 sm:py-24 bg-white" id="testimonials">
      <ContainerLayout>
        {/* Header with Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 gap-6">
          <div className="space-y-3">
            <span className="bg-[#0A1F1C] text-lime-400 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider inline-block shadow-sm">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              What Our Customers Say
            </h2>
          </div>

          <div className="flex gap-2.5 shrink-0 self-end sm:self-auto">
            <button
              onClick={() => scroll("left")}
              className="bg-gray-100 border border-gray-200 text-gray-900 hover:bg-[#0A1F1C] hover:text-lime-400 p-3 rounded-full transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
              aria-label="Scroll left"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-gray-100 border border-gray-200 text-gray-900 hover:bg-[#0A1F1C] hover:text-lime-400 p-3 rounded-full transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
              aria-label="Scroll right"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 sm:gap-6 pb-6 pt-2 scroll-smooth scrollbar-none snap-x snap-mandatory px-1 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="snap-start bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 p-6 sm:p-8 w-[290px] xs:w-[330px] sm:w-[360px] shadow-sm hover:shadow-xl transition-all duration-300 flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex text-yellow-400 gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <AiFillStar key={i} className="h-4.5 w-4.5" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Profile Details */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100 mt-auto">
                <img
                  src={rev.avatar}
                  alt={`${rev.name} - ${rev.title}`}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
                />
                <div>
                  <h3 className="font-extrabold text-gray-950 text-sm">
                    {rev.name}
                  </h3>
                  <p className="text-gray-400 text-xs font-medium">
                    {rev.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
}

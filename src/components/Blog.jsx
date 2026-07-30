import React from "react";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";
import ContainerLayout from "./ContainerLayout";

export default function Blog() {
  const blogs = [
    {
      title: "The Ultimate Guide to Eco-Friendly Cleaning Products",
      desc: "Discover why switching to green and organic cleaning products benefits your health, your family, and the planet.",
      image:
        "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=600",
      date: "May 12, 2026",
      readTime: "5 min read",
      category: "Guides",
    },
    {
      title: "How to Maintain a Clean and Productive Office Space",
      desc: "Simple routines and organization habits to keep your workplace hygienic, tidy, and motivating for employees.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
      date: "Apr 28, 2026",
      readTime: "4 min read",
      category: "Office Care",
    },
    {
      title: "5 Quick and Easy Weekly Home Cleaning Routines",
      desc: "Banish dust and grime with a simple, high-efficiency weekly cleaning checklist designed for busy modern professionals.",
      image:
        "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&q=80&w=600",
      date: "Mar 15, 2026",
      readTime: "6 min read",
      category: "Tips",
    },
  ];

  return (
    <section id="blog" className="py-10 bg-gray-50/50">
      <ContainerLayout>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="bg-green-50 text-green-dark px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider mb-3 inline-block">
              Resources
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-green-medium tracking-tight">
              Latest Blog & Articles
            </h2>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-xs sm:text-sm font-black rounded-xl text-green-medium bg-white hover:bg-gray-50 shadow-famic-sm transition-all hover:-translate-y-0.5"
            >
              View All Articles
              <FiArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-famic-md hover:shadow-famic-lg transition-all duration-300 border border-gray-100 flex flex-col h-full group"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-green-medium px-3 py-1 rounded-xl text-[10px] font-black uppercase shadow-sm">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6 grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
                    <span className="flex items-center gap-1">
                      <FiCalendar />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-green-medium group-hover:text-green-dark transition-colors leading-snug">
                    <a href="#">{blog.title}</a>
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {blog.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-green-dark hover:text-green-medium uppercase tracking-wider"
                  >
                    Read Article
                    <FiArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
}

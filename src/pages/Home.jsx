import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChoice from "../components/WhyChoice";
import MidBanner from "../components/MidBanner";
import Pricing from "../components/Pricing";
import ScrollingText from "../components/ScrollingText";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = "Cleanora - Professional Home & Office Cleaning Services";
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <ScrollingText />
      <WhyChoice />
      <MidBanner />
      <Pricing />
      <Testimonials />
      <FAQ />
    </div>
  );
}

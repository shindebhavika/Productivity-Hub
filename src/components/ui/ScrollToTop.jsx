'use client'
import { ChevronsUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 right-2 z-[999]">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 text-white shadow-md transition-all duration-300 hover:w-40 hover:rounded-full hover:bg-orange-400"
      >
        <ChevronsUp className="transition-transform duration-300 group-hover:translate-x-12" />
        <span className="absolute opacity-0 text-xs transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-3 font-semibold">
          Back to Top
        </span>
      </button>
    </div>
  );
}

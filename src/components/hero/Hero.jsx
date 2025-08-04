import React, { useEffect, useRef, } from "react";
import Button from "../common/buttons/Button";


import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
const teamMembers = [
"../images/people1.webp",
"../images/people2.webp",
"../images/people3.webp",

];
  useEffect(() => {
    const animateElement = (selector, keyframes, options, threshold = 0.5) => {
      const elements = document.querySelectorAll(selector);
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.animate(keyframes, options);
            }
          });
        },
        {
          threshold,
        }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    };

    // Animate heading, description, and fade-in items
    animateElement(
      ".heading, .des, .fade-in-item",
      [
        { transform: "translateY(10rem)", opacity: 0 },
        { transform: "translateY(5rem)", opacity: 1 },
        { transform: "translateY(0)", opacity: 1 },
      ],
      {
        duration: 800,
        easing: "ease-out", // smoother deceleration
        fill: "forwards",
        delay: 100,
      },
      0.3
    );

    // Animate main-img
    animateElement(
      ".main-img",
      [
        { transform: "translateY(0) rotate(10deg) scale(0.75)", opacity: 0 },
        { transform: "translateY(0px) rotate(0deg) scale(1)", opacity: 1 },
      ],
      {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards",
      },
      0.4
    );

    // Animate sub-images infinitely when in view
    const subImages = document.querySelectorAll(".sub-image");
    const subObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.animate(
              [
                { transform: "rotate(5deg)" },
                { transform: "translateY(-2rem)" },
                { transform: "rotate(-5deg)" },
              ],
              {
                duration: 5000,
                iterations: Infinity,
                direction: "alternate",
                easing: "ease-in-out",
                fill: "forwards",
              }
            );
          }
        });
      },
      { threshold: 0.6 }
    );

    subImages.forEach((el) => subObserver.observe(el));

    return () => {
      subObserver.disconnect();
    };
  }, []);

  return (
    <main className="w-full bg-[#fbf7ff] dark:bg-gray-900 dark:text-white pt-24  ">
      <div className="container w-full xs:max-w-screen-3xl  grid grid-cols-1 xl:grid-cols-2 items-center gap-12 px-1 py-16  xs:px-3 xxs:px-8 ">
        {/* Left Content */}
        {/* <AppointmentScheduler/> */}
        <div className="space-y-6w-full px-0">
          {/* Trust Indicator */}
          <div className="flex items-center gap-4 fade-in-item">
            <div className="flex -space-x-4">
              {teamMembers.map((img, index) => (
                <img
                  key={index}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full  dark:border-gray-900"
                  src={`${img}`}
                  alt={`User ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
            <p className="  text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
              Trusted by 1000+ people
            </p>
          </div>

          {/* Hero Heading */}
          <h1 className="text-[18px] heading  xxs:text-[24px]   sm:text-[30px] md:text-[42px] lg:text-[48px] font-semibold leading-[140%] text-black/80 dark:text-white whitespace-nowrap mt-4 mb-3">
            Welcome to the
            <br className="" />
            Productivity Hub
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-white leading-relaxed des">
            Stay organized and productive with our simple To-Do list, or explore
            GitHub user profiles with ease.
          </p>

          {/* Buttons */}
          <div className="flex  flex-wrap gap-4 sm:items-center w-fit mt-5">
            <Button
              textColor="text-black animate-bounce [animation-delay:-.3s]"
              onClick={() => navigate("/todo")}
            >
              To-Do
            </Button>
            <Button
              textColor="text-black animate-bounce [animation-delay:-.3s]"
              onClick={() => navigate("/github")}
            >
              Github
            </Button>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="relative w-full max-w-[250px] xs:m:max-w-[70px] sm:max-w-[400px]  aspect-square mx-auto">
          <div className="relative w-full h-full p-4 border-2 border-orange-400 border-dashed rounded-full">
            <img
              src="../images/hero.jpg"
              alt="Main hero visual"
              className="w-full h-full object-cover rounded-full main-img "
              loading="lazy"
            />

 


  
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

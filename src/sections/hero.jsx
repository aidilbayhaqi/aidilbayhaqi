import React from "react";
import FadeIn from "../components/fadeIn";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FaDatabase, FaFigma, FaLaravel, FaReact } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";

const Hero = ({ scrollToSection }) => {
  const logos = [
    { id: 1, url: <FaReact /> },
    { id: 2, url: <FaLaravel /> },
    { id: 3, url: <FaDatabase /> },
    { id: 3, url: <FaFigma /> },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/0 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Creating <span className="text-purple-500">exceptional</span>{" "}
                digital experiences
              </h1>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-gray-400 text-lg mb-8">
               Im Aidil Bayhaqi, a tech eunthusiast as a fullstack web developer and designer. lets build your product digital 
              </p>
            </FadeIn>
            <FadeIn delay={600}>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-colors flex items-center"
                >
                  View Projects
                  <ArrowRight size={18} className="ml-2" />
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="border border-gray-700 hover:border-purple-500 text-white px-8 py-4 rounded-full transition-colors flex items-center"
                >
                  Learn More
                  <ArrowUpRight size={18} className="ml-2" />
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={800}>
              <div className="mt-16 flex items-center">
                <div className="flex -space-x-4">
                  {logos.map((logo, i) => (
                    <div
                      key={i}
                      className="w-14 h-14 items-center overflow-hidden gap-3 mx-2"
                    >
                      <span className="items-center text-5xl w-full h-full">
                        {logo.url}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="relative">
            <FadeIn delay={600} direction="left">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/profile-removebg-preview.png"
                  alt="Designer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm p-4 rounded-xl max-w-xs">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-xs text-green-500">
                      Available for projects
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mt-2">Aidil Bayhaqi</h3>
                  <p className="text-sm text-gray-300">
                    Fullstack Developer & Designer
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center py-1">
          <div className="w-1 h-2 bg-purple-500 rounded-full animate-bounce"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import FadeIn from "../components/fadeIn";
import { ArrowRight } from "lucide-react";

const service = () => {
  const services = [
    {
      title: "Fullstack Web Development",
      description:
        "End-to-end development of modern, scalable web applications — from crafting intuitive frontends to building secure and efficient backends with clean architecture.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-friendly and engaging interfaces with seamless user experiences that not only look great but also drive business results.",
      icon: "📱",
    },
    {
      title: "Mobile App Design",
      description:
        "Creating sleek and functional mobile app interfaces tailored for both iOS and Android, ensuring smooth and consistent usability.",
      icon: "📲",
    },
    {
      title: "System Architecture",
      description:
        "Designing robust and scalable software architectures, ensuring your product is maintainable, efficient, and ready to grow with your business.",
      icon: "🏗️",
    },
    {
      title: "Design Systems",
      description:
        "Developing comprehensive design systems that provide consistency, speed up development, and keep your product experience unified across platforms.",
      icon: "🧩",
    },
    {
      title: "API Integration & Automation",
      description:
        "Building and integrating APIs, automating workflows, and connecting services to optimize processes and enhance digital ecosystems.",
      icon: "⚡",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="text-purple-500 text-sm font-medium uppercase tracking-wider">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              What I Can Do For You
            </h2>
            <p className="text-gray-400">
              I offer a complete range of design and development services to
              bring your digital vision to life.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={200 * index}>
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all group">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-purple-500 mt-6 group"
                >
                  <span className="group-hover:mr-2 transition-all">
                    Learn more
                  </span>
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all"
                  />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default service;

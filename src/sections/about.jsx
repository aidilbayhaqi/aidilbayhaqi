import React from "react";
import FadeIn from "../components/fadeIn";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="text-purple-500 text-sm font-medium uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Crafting Digital Product
            </h2>
            <p className="text-gray-400">
              With over 3 years learning in programming specially to a Fullstack
              development and learn to build the architecture of software in
              bussiness field, I help to build any infrastucture of technology
              on you company.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={200}>
            <div className="relative bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-purple-500 text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Strategic Thinking</h3>
              <p className="text-gray-400">
                Every project starts with a deep understanding of your business
                goals and target audience.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="relative bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-purple-500 text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Creative Design</h3>
              <p className="text-gray-400">
                Translating strategy into visually captivating interfaces that
                engage and delight users.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="relative bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-purple-500 text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Development</h3>
              <p className="text-gray-400">
                Bringing designs to life with clean, efficient code that
                performs flawlessly across all devices.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
          <FadeIn delay={200}>
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-8 h-1 bg-purple-500 mr-4"></span>
                Work Experience
              </h3>

              <div className="space-y-10">
                {[
                  {
                    period: "2025 - present",
                    title: "Web Developer Product Digital",
                    company: "Freelance",
                    description: [
                      "create a fullstack website based on React, Express, and MySQL",
                      "build and design a backend and frontend system using clean code and safety type methods",
                      "perform debugging when the application or website error",
                    ],
                  },
                  {
                    period: "2024 - 2025",
                    title: "IT Support",
                    company: "PT Leader IT",
                    description: [
                      "Target-oriented in troubleshooting and installing UMPC ewacspro device",
                      "Prioritizing work safety and adhering to safety, health, and environmental regulations.",
                      "Installing UMPC ewacspro devices on mining vehicles such as dump trucks, excavators, dozers, and others.",
                      "Configuring applications in case of errors in the ewacspro application.",
                    ],
                  },
                  {
                    period: "2022 -2023",
                    title: "IT Support Intern",
                    company: "STIMA IMMI",
                    description: [
                      "Maintenancing and troubleshooting device on company",
                      "Installation device computer for employee member on campus, starting from hardware installation to software such as oprating system windows 10, microsoft office, etc.",
                      "Provide best service to employee in use IT device such as computer, networking, printers, projector, etc. by communicating with employees regarding problems that occur with the devices.",
                      "Troubleshooting when have a problems occur with each device and doing a daily maintenance so that performance remains stable",
                    ],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l border-gray-800"
                  >
                    <span className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500"></span>
                    <span className="text-sm text-purple-500">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.company}</p>
                    {item.description && (
                      <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                        {item.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-8 h-1 bg-purple-500 mr-4"></span>
                Education & Skills
              </h3>

              <div className="space-y-8 mb-12">
                {[
                  {
                    period: "2024 - present",
                    school: "Mitra Bangsa University",
                    institution: "System and Technology Information",
                    description: [
                      "Building and designing database systems",
                      "Learn to design computer architecture and software",
                      "Understand more deeply about technological systems",
                    ],
                  },
                  {
                    period: "2021 - 2024",
                    school: "Citra Negara Vocational High School",
                    institution: "Computer and Network Engineering",
                    description: [
                      "Building a network design project using Cisco and Mikrotik",
                      "Learn to understand problems and how to solve problems with computer hardware and software",
                      "Building a server and network",
                    ],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l border-gray-800"
                  >
                    <span className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500"></span>
                    <span className="text-sm text-purple-500">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold mt-1">{item.school}</h4>
                    <p className="text-gray-400 text-sm">{item.institution}</p>
                    {item.description && (
                      <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                        {item.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Professional Skills</h4>
                <div className="space-y-4">
                  {[
                    { skill: "Fullstack devlopment", percentage: 95 },
                    { skill: "Design Architecture website", percentage: 90 },
                    { skill: "Progamming", percentage: 85 },
                    { skill: "UI UX design", percentage: 80 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span>{item.skill}</span>
                        <span className="text-purple-500">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-700"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;

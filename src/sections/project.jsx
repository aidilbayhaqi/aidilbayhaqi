import React, { useState } from "react";
import FadeIn from "../components/fadeIn";
import { Play } from "lucide-react";

const Project = () => {
  const projects = [
    {
      title: "Computech Ecommerce",
      category: "Web App Development",
      image: "/ecommerce.jpg",
      stack: [
        "Next JS",
        "Express JS",
        "Node JS",
        "Mysql",
        "Figma",
        "midtrans",
        "tailwind",
      ],
    },
    {
      title: "Dashboard Finance Website",
      category: "Web App Development",
      image: "/web-dashboard.jpg",
      stack: ["React", "TailwindCSS", "Node.js"],
    },
    {
      title: "Shoes Ecommerce Website",
      category: "Web App Development",
      image: "/shoe-commerce.jpg",
      stack: ["React", "TailwindCSS", "FastAPI", "Typescript"],
    },
    {
      title: "ERD Ecommerce",
      category: "Database",
      image: "/ERD-ecommerce.jpg",
      stack: ["Mysql", "Node JS", "Draw io"],
    },
    {
      title: "Hospital Website",
      category: "Web App Development",
      image: "/hospital-laravel.jpg",
      stack: ["Laravel", "Filament", "PHP"],
    },
    {
      title: "Employee Absense Website",
      category: "Web App Development",
      image: "/absensi-karyawan.jpg",
      stack: ["React", "Next JS", "Javacript", "Mysql", "Node JS"],
    },
    {
      title: "Organization Profile",
      category: "UI UX design",
      image: "/landing-page.jpg",
      stack: ["React", "Javacript", "Figma"],
    },
    {
      title: "Filament Blog Website",
      category: "Web App Development",
      image: "/filament-blog.jpg",
      stack: ["Laravel", "Filament", "PHP"],
    },
    {
      title: "Portofolio Profile",
      category: "UI UX design",
      image: "/web-porto-1.jpg",
      stack: ["HTML","CSS", "Javacript", "Figma"],
    },
    {
      title: "Company Profile",
      category: "UI UX design",
      image: "/company-profile.jpg",
      stack: ["HTML","CSS", "Javacript", "Figma"],
    },
    {
      title: "Anime Information Website",
      category: "Web App Development",
      image: "/anime-search.jpg",
      stack: ["NextJS","prisma", "Javacript", "Mysql"],
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        {/* Header + Filter */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <FadeIn>
            <div>
              <span className="text-purple-500 text-sm font-medium uppercase tracking-wider">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Selected Projects
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`py-2 px-6 rounded-full border transition-colors  ${
                    activeCategory === cat
                      ? "bg-purple-500 text-white border-purple-500"
                      : "text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn
              key={index}
              delay={200 * index}
              className={project.big ? "md:col-span-2" : ""}
            >
              <div className="group relative overflow-hidden rounded-2xl hover:cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* overlay gradient (tetap) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />

                {/* Bottom content: category, title, and stack (no overlap) */}
                <div className="absolute inset-x-0 bottom-0 p-8 z-10">
                  <span className="text-white text-sm">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{project.title}</h3>

                  {/* Stack muncul di bawah title saat hover */}
                  <div
                    className="
                      mt-3 overflow-hidden opacity-0 max-h-0
                      transition-[max-height,opacity] duration-300
                      group-hover:opacity-100 group-hover:max-h-32
                    "
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-white/10 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

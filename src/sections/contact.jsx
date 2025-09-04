import React from "react";
import FadeIn from "../components/fadeIn";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <div>
              <span className="text-purple-500 text-sm font-medium uppercase tracking-wider">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-gray-400 mb-8">
                Interested in working together? Reach me directly via WhatsApp
                or email, or simply fill out the form. I’ll respond as soon as
                possible!
              </p>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-500" />
                  <a
                    href="mailto:m.aidilbayhaqi@gmail.com"
                    className="hover:text-purple-400 transition"
                  >
                    My Email
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-green-500" />
                  <a
                    href="https://wa.me/6289504322572"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition"
                  >
                    My Phone
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-500" />
                  Jakarta, Indonesia
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <form
              className="space-y-6"
              action="mailto:m.aidilbayhaqi@gmail.com"
              method="POST"
              encType="text/plain"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-1 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-1 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full mt-1 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;

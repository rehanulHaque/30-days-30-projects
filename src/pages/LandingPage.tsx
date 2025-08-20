import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Twitter, Instagram } from "lucide-react";

const projects = [
  { name: "Todo App", path: "/todo", img: "https://img.icons8.com/color/96/task.png" },
  { name: "Password Generator", path: "/password-generator", img: "https://img.icons8.com/color/96/password.png" },
  { name: "Weather App", path: "/weather", img: "https://img.icons8.com/color/96/partly-cloudy-day.png" },
  { name: "Rock Paper Scissor", path: "/rock-paper-scissor", img: "https://img.icons8.com/color/96/hand-rock.png" },
  { name: "Qr Code Generator", path: "/qr-code", img: "https://img.icons8.com/color/96/qr-code.png" },
  { name: "Movies App", path: "/movies", img: "https://img.icons8.com/color/96/movie-projector.png" },
  { name: "Dictionary App", path: "/dictionary", img: "https://img.icons8.com/color/96/book.png" },
  { name: "Cryptocurrency App", path: "/crypto", img: "https://img.icons8.com/color/96/bitcoin.png" },
  { name: "Unit Converter", path: "/unit-converter", img: "https://img.icons8.com/color/96/scale.png" },
  { name: "Clock", path: "/clock", img: "https://img.icons8.com/color/96/clock--v1.png" },
  { name: "E-Commerce", path: "/ecommerce", img: "https://img.icons8.com/color/96/shopping-cart.png" },
  { name: "Event Countdown Timer", path: "/countdown", img: "https://img.icons8.com/color/96/hourglass-sand.png" },
  { name: "Country Details", path: "/country-details", img: "https://img.icons8.com/color/96/globe.png" },
  { name: "Blog", path: "/blog", img: "https://img.icons8.com/color/96/blogger.png" },
  { name: "Image Compression", path: "/image-compression", img: "https://img.icons8.com/?size=100&id=SxB3taNaJxYE&format=png&color=000000" },
  { name: "Image Gallery", path: "/gallery", img: "https://img.icons8.com/color/96/picture.png" },
  { name: "Appointment List", path: "/appointment", img: "https://img.icons8.com/color/96/calendar.png" },
  { name: "Expense Tracker", path: "/expense-tracker", img: "https://img.icons8.com/color/96/money.png" },
  { name: "Password Manager", path: "/password-manager", img: "https://img.icons8.com/color/96/lock.png" },
  { name: "Fitness Tracker", path: "/fitness-tracker", img: "https://img.icons8.com/color/96/dumbbell.png" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          🚀 30 Days, 30 Projects
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          A coding challenge where I build 30 React projects in 30 days and share them with the world 🌍
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a href="https://github.com/rehanulHaque/" target="_blank" rel="noreferrer">
            <Github className="w-6 h-6 hover:text-black transition" />
          </a>
          <a href="https://x.com/MdRehan_CR" target="_blank" rel="noreferrer">
            <Twitter className="w-6 h-6 hover:text-sky-500 transition" />
          </a>
          <a href="https://www.instagram.com/rehan_._cr" target="_blank" rel="noreferrer">
            <Instagram className="w-6 h-6 hover:text-blue-600 transition" />
          </a>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects Showcase ✨</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition relative group"
            >
              <Link to={project.path}>
                <div className="relative h-40 bg-gray-100 flex items-center justify-center">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-20 h-20 object-contain group-hover:scale-110 transition"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition">
                    {project.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

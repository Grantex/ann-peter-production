import { useEffect, useState } from "react"
import bgImage from "./assets/hero-background.png"

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen text-white">

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-300
        ${scrolled ? "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200" : "bg-transparent"}
        `}
      >
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-white via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Ann Peter Production
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300">
          {["Home", "About", "Services", "Works", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="hidden md:block bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
          Start a Project with Us
        </button>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center space-y-8 text-xl z-40">
          {["Home", "About", "Services", "Works", "Contact"].map((item) => (
            <a key={item} href="#" onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section
        className="h-screen flex items-center px-6 md:px-16 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-left">
          
          {/* Artistic Heading */}
          <h1 className="font-display text-6xl md:text-8xl leading-[1.1] md:leading-[1.05] mb-8">
            
            {/* First line */}
            <span className="block whitespace-nowrap text-white font-artistic italic tracking-wide">
              Stories from the
            </span>

            {/* Second line */}
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Heart of Africa
            </span>

          </h1>

          {/* Description */}
          <p className="text-gray-300 mb-8 text-lg">
            Ann Peter Production is a film studio crafting cinematic features,
            commercials and documentaries — rooted in African soul, made for the world.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
              Start a Project with Us
            </button>

            <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Scroll Section */}
      <section className="h-[120vh] bg-white text-black flex items-center justify-center">
        <h2 className="text-3xl font-bold">Scroll to see navbar effect</h2>
      </section>

    </div>
  )
}

export default App
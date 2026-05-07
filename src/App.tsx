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

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Works", href: "#works" },
    { label: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "")
    const section = document.getElementById(id)
    if (section) {
      const offset = 72
      const top = section.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen text-white">

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-300
        ${scrolled ? "bg-black/80 backdrop-blur-md shadow-md border-b border-gray-800" : "bg-transparent"}
        `}
      >
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-white via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Ann Peter Production
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="relative group transition"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
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
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                scrollToSection(item.href)
                setMenuOpen(false)
              }}
              className="text-white hover:text-yellow-500 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center px-6 md:px-16 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl text-left">
          <h1 className="font-display text-6xl md:text-8xl leading-[1.1] md:leading-[1.05] mb-8">
            <span className="block whitespace-nowrap text-white font-artistic italic tracking-wide">
              Stories from the
            </span>
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Heart of Africa
            </span>
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Ann Peter Production is a film studio crafting cinematic features,
            commercials and documentaries — rooted in African soul, made for the world.
          </p>
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

      {/* About Section */}
      <section id="about" className="bg-black text-white px-6 md:px-16 py-32">
        <div className="max-w-7xl mx-auto">

          {/* About Title - mobile only */}
          <div className="flex items-center gap-4 mb-8 md:hidden">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <h3 className="font-display text-lg tracking-wide text-gray-400">
              About Ann Peter Productions
            </h3>
          </div>

          {/* Top Artistic Statement */}
          <div className="mb-20 md:ml-[50%] md:pl-8">
            <h2 className="font-artistic italic text-4xl md:text-5xl leading-tight">
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                We tell African stories with the craft they deserve
              </span>
            </h2>
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-yellow-500"></div>
                <h3 className="font-display text-lg md:text-xl tracking-wide text-gray-400">
                  About Ann Peter Productions
                </h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-lg leading-relaxed">
              <p>
                Africa's stories demand to be heard. Its creativity demands to be seen. Ann Peter Production
                exists to make that happen.
              </p>
              <p>
                Our roots are African. Our vision is global. Every film we make carries both.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#0a0a0a] text-white px-6 md:px-16 py-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}
          <div>

            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-yellow-500"></div>

              <h3 className="font-display text-lg md:text-xl tracking-wide text-gray-400">
                Lets create something together
              </h3>
            </div>

            {/* Artistic Heading */}
            <h2 className="font-artistic italic text-4xl md:text-5xl leading-tight mb-8 whitespace-nowrap">

              <span className="text-gray-100">
                Got a story to{" "}
              </span>

              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                tell?
              </span>

        

            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-12">
              Whether it's a 30-second spot or a feature-length film,
              we'd love to hear what you're imagining!
            </p>

            {/* Contact Info */}
            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-500">
                  ✉
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-200">hello@annpeterproduction.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-500">
                  ☎
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-200">+254 700 000 000</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-500">
                  ⌖
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-200">Nairobi, Kenya</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 md:p-8">

            <form className="space-y-6">

              {/* Full Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-500 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Phone No: <span className="text-gray-600">(Optional)</span>
                </label>

                <input
                  type="text"
                  placeholder="+254700000000"
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-500 transition"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Inquiry Type
                </label>

                <select
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-500 transition"
                >
                  <option>Feature Film</option>
                  <option>Commercial/Advertisement</option>
                  <option>Documentary/Events</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Tell us about your project/idea
                </label>

                <textarea
                  rows={6}
                  placeholder="Share your vision..."
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-4 text-white resize-none focus:outline-none focus:border-yellow-500 transition"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-medium py-4 rounded-xl hover:bg-yellow-600 transition duration-300"
              >
                Send Inquiry
              </button>

            </form>

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
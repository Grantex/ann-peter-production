import { useEffect, useState } from "react"
import bgImage from "./assets/hero-background.png"
import works1 from "./assets/Ndani_Ya_Tabasamu_Cast_Pic2.jpeg"
import works2 from "./assets/Kona.png"

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
        className={`fixed top-0 left-0 w-full z-[60] px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-300
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

        {/* CTA - desktop only */}
        <button
          onClick={() => scrollToSection("#contact")}
          className="hidden md:block border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition text-sm"
        >
          Get in Touch
        </button>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 p-2"
          >
            {menuOpen ? (
              <div className="relative w-6 h-6">
                <span className="block w-6 h-[2px] bg-white absolute top-1/2 rotate-45"></span>
                <span className="block w-6 h-[2px] bg-white absolute top-1/2 -rotate-45"></span>
              </div>
            ) : (
              <div className="space-y-1">
                <span className="block w-6 h-[2px] bg-white"></span>
                <span className="block w-6 h-[2px] bg-white"></span>
                <span className="block w-6 h-[2px] bg-white"></span>
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center space-y-8 text-xl z-50">
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
        className="h-screen flex items-center px-6 md:px-16 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 w-full max-w-3xl text-left">
          <h1 className="font-display leading-[1.1] mb-6">
            <span className="block text-white font-artistic italic tracking-wide text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
              Stories from the
            </span>
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
              Heart of Africa
            </span>
          </h1>
          <p className="text-gray-300 mb-8 text-base md:text-lg max-w-xl">
            Ann Peter Production is a film studio crafting cinematic features,
            commercials and documentaries — rooted in African soul, made for the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold"
            >
              Start a Project with Us
            </button>
            <button
              onClick={() => scrollToSection("#about")}
              className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
            >
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

      {/* Services Section */}
      <section id="services" className="bg-[#0a0a0a] text-white px-6 md:px-16 py-28">

        <div className="max-w-7xl mx-auto">

          {/* Section Title */}
          <div className="flex items-center gap-4 mb-16">

            <div className="w-12 h-[2px] bg-yellow-500"></div>

            <h3 className="font-display text-lg md:text-xl tracking-wide text-gray-400">
              What we do
            </h3>

          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="group bg-[#111111] border border-gray-800 rounded-3xl p-8 transition duration-300 hover:border-yellow-500 hover:-translate-y-1">

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-black border border-yellow-500 flex items-center justify-center text-2xl text-yellow-500 mb-6">
                🎬
              </div>

              {/* Title */}
              <h4 className="text-2xl font-semibold mb-4">
                Feature Films
              </h4>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                Original screenplays and full-scale productions, from development through distribution.
              </p>

            </div>

            {/* CARD 2 */}
            <div className="group bg-[#111111] border border-gray-800 rounded-3xl p-8 transition duration-300 hover:border-yellow-500 hover:-translate-y-1">

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-black border border-yellow-500 flex items-center justify-center text-2xl text-yellow-500 mb-6">
                📺
              </div>

              {/* Title */}
              <h4 className="text-2xl font-semibold mb-4">
                Commercials
              </h4>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                Brand films and TVCs that move audiences and drive results across African markets.
              </p>

            </div>

            {/* CARD 3 */}
            <div className="group bg-[#111111] border border-gray-800 rounded-3xl p-8 transition duration-300 hover:border-yellow-500 hover:-translate-y-1">

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-black border border-yellow-500 flex items-center justify-center text-2xl text-yellow-500 mb-6">
                🎥
              </div>

              {/* Title */}
              <h4 className="text-2xl font-semibold mb-4">
                Documentaries
              </h4>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                Long-form storytelling for broadcasters, NGOs and streaming platforms.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Works Section */}
      <section id="works" className="bg-black text-white px-6 md:px-16 py-28">

        <div className="max-w-7xl mx-auto">

          {/* Section Title */}
          <div className="flex items-center justify-end gap-4 mb-14">
            <div className="w-12 h-[2px] bg-yellow-500"></div>

            <h3 className="font-display text-lg md:text-xl tracking-wide text-gray-400">
              Featured Works
            </h3>
          </div>

          {/* Works Grid */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* CARD 1 */}
            <div className="group relative overflow-hidden rounded-3xl h-[520px] cursor-pointer">

              {/* Background Image */}
              <img
                src={works1}
                alt="Ndani ya Tabasamu"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">

                {/* Film Type */}
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 mb-3">
                  Feature Film • 2026
                </p>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
                  Ndani ya Tabasamu
                </h2>

                {/* Bottom Row */}
                <div className="flex items-center justify-between">

                  {/* Small Description */}
                  <p className="text-gray-300 max-w-sm text-sm md:text-base leading-relaxed">
                    A look into the complexities of the everyday relationships, from hot romance, cold affections
                    and the front put up for the world to see hidign the drama underneath the homestead. 
                  </p>

                  {/* Artistic Explore Button */}
                  <button className="group/button flex items-center gap-3 text-yellow-400 hover:text-white transition">

                    <span className="text-sm uppercase tracking-[0.2em]">
                      Explore
                    </span>

                    <div className="w-12 h-12 rounded-full border border-yellow-500 flex items-center justify-center transition group-hover/button:bg-yellow-500 group-hover/button:text-black">
                      →
                    </div>

                  </button>

                </div>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="group relative overflow-hidden rounded-3xl h-[520px] cursor-pointer">

              {/* Background Image */}
              <img
                src={works2}
                alt="Whispers Beneath"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">

                {/* Film Type */}
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 mb-3">
                  Documentary • 2025
                </p>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
                  Destiny Brother
                </h2>

                {/* Bottom Row */}
                <div className="flex items-center justify-between">

                  {/* Description */}
                  <p className="text-gray-300 max-w-sm text-sm md:text-base leading-relaxed">
                    Uncovering stories buried beneath the 'African tax': who benefits, who loses
                  </p>

                  {/* Explore Button */}
                  <button className="group/button flex items-center gap-3 text-yellow-400 hover:text-white transition">

                    <span className="text-sm uppercase tracking-[0.2em]">
                      Explore
                    </span>

                    <div className="w-12 h-12 rounded-full border border-yellow-500 flex items-center justify-center transition group-hover/button:bg-yellow-500 group-hover/button:text-black">
                      →
                    </div>

                  </button>

                </div>

              </div>

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

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition"
                  />
                </div>

              </div>

              {/* Phone + Inquiry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Phone */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Phone No: <span className="text-gray-600">(Optional)</span>
                  </label>

                  <input
                    type="text"
                    placeholder="+254700000000"
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition"
                  />
                </div>

                {/* Inquiry */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Inquiry Type
                  </label>

                  <select
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition"
                  >
                    <option>Feature Film</option>
                    <option>Commercial/Advertisement</option>
                    <option>Documentary/Events</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Tell us about your project/idea
                </label>

                <textarea
                  rows={6}
                  placeholder="Share your vision..."
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white resize-none focus:outline-none focus:border-yellow-500 transition"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-medium py-3 rounded-xl hover:bg-yellow-600 transition duration-300"
              >
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 md:px-16 pt-20 pb-10 border-t border-gray-900">

        <div className="max-w-7xl mx-auto">

          {/* Top Footer */}
          <div className="grid md:grid-cols-4 gap-14 pb-16 border-b border-gray-900">

            {/* Brand */}
            <div>

              <h2 className="font-artistic italic text-3xl mb-6">
                <span className="text-white">Ann Peter</span>{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Productions
                </span>
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Crafting cinematic African stories through film,
                documentaries, and visual storytelling for global audiences.
              </p>

            </div>

            {/* Navigation */}
            <div>

              <h3 className="text-lg font-semibold mb-6 text-white">
                Navigation
              </h3>

              <ul className="space-y-4 text-gray-400">

                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#about" className="hover:text-yellow-500 transition">
                    About
                  </a>
                </li>

                <li>
                  <a href="#works" className="hover:text-yellow-500 transition">
                    Featured Works
                  </a>
                </li>

                <li>
                  <a href="#services" className="hover:text-yellow-500 transition">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#contact" className="hover:text-yellow-500 transition">
                    Contact
                  </a>
                </li>

              </ul>

            </div>

            {/* Company */}
            <div>

              <h3 className="text-lg font-semibold mb-6 text-white">
                Company
              </h3>

              <ul className="space-y-4 text-gray-400">

                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    Partnerships
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    Terms of Service
                  </a>
                </li>

              </ul>

            </div>

            {/* Contact */}
            <div>

              <h3 className="text-lg font-semibold mb-6 text-white">
                Contact
              </h3>

              <div className="space-y-4 text-gray-400">

                <p>
                  hello@annpeterproduction.com
                </p>

                <p>
                  +254 700 000 000
                </p>

                <p>
                  Nairobi, Kenya
                </p>

              </div>

            </div>

          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">

            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Ann Peter Productions. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-gray-500">

              <a href="#" className="hover:text-yellow-500 transition">
                Instagram
              </a>

              <a href="#" className="hover:text-yellow-500 transition">
                YouTube
              </a>

              <a href="#" className="hover:text-yellow-500 transition">
                TikTok
              </a>

              <a href="#" className="hover:text-yellow-500 transition">
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default App
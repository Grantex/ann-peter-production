// src/Partnership.tsx

export default function Partnership() {
  const partnershipTypes = [
    {
      icon: "🏢",
      title: "Brand Collaborations",
      description: "Integrate your brand into cinematic content that resonates with African audiences. From product placement to full brand films.",
    },
    {
      icon: "🎬",
      title: "Co-Productions",
      description: "Join forces on feature films, series, or documentaries. We bring the creative vision, crew, and production infrastructure.",
    },
    {
      icon: "🌍",
      title: "Distribution Partnerships",
      description: "Help bring African stories to new markets. We are open to partnerships with distributors across streaming, broadcast, and theatrical.",
    },
    {
      icon: "✨",
      title: "Creative Collaborations",
      description: "Directors, writers, photographers, and artists — if your creative vision aligns with ours, let us make something together.",
    },
    {
      icon: "📸",
      title: "Event Coverage",
      description: "Full cinematic coverage of cultural events, premieres, corporate functions, and live experiences.",
    },
    {
      icon: "🤝",
      title: "NGO / Cultural Projects",
      description: "We partner with NGOs and cultural institutions to tell impactful stories that drive social change across the continent.",
    },
  ]

  const whyUs = [
    {
      icon: "🌍",
      title: "Rooted in African Storytelling",
      body: "We bring authentic, nuanced perspectives to every project — stories told from the inside out.",
    },
    {
      icon: "🎥",
      title: "Cinematic Quality",
      body: "Every frame is crafted with intention. Our productions meet international standards without losing local soul.",
    },
    {
      icon: "⚙️",
      title: "Flexible Production",
      body: "From lean commercial shoots to full-scale productions, we adapt to your timeline, budget, and creative brief.",
    },
    {
      icon: "🧭",
      title: "Creative Direction",
      body: "We don't just execute — we co-create. Our team brings strategic and artistic direction to every collaboration.",
    },
    {
      icon: "📡",
      title: "Regional and Global Reach",
      body: "Our network spans East Africa and beyond, with distribution relationships across the continent and internationally.",
    },
    {
    icon: "🎭",
    title: "Rich Cast and Acting Talent",
    body: "We work with a diverse pool of skilled actors and performers across East Africa, bringing depth, authenticity, and star power to every production.",
    },
    {
      icon: "📊",
      title: "Measurable Impact",
      body: "We track reach, engagement, and audience response so your partnership investment translates to real outcomes.",
    },
  ]

  const stats = [
    { value: "1", label: "Years in Production" },
    { value: "1", label: "Projects Completed" },
    { value: "1.5k+", label: "Film Viewership" },
    { value: "1", label: "Award Nominations" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
        <header className="bg-black border-b border-gray-900 px-6 md:px-16 py-5 flex items-center justify-between">

        <a
            href="/"
            className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-white via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
        >
            Ann Peter Production
        </a>

        <a
            href="/"
            className="text-sm text-gray-400 hover:text-yellow-500 transition"
        >
            Back to Home
        </a>

        </header>
      {/* Hero */}
      <section className="px-6 md:px-16 py-24 bg-[#0a0a0a] border-b border-gray-900">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <p className="text-gray-400 tracking-widest text-sm uppercase">Partnerships</p>
          </div>
          <h1 className="font-artistic italic text-5xl md:text-7xl leading-tight mb-8">
            <span className="text-white">{"Let's build stories "}</span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              together
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            We believe the most powerful stories are built through collaboration.
            Whether you are a brand, studio, investor, NGO, or independent creator —
            there is a place for you in what we are building.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 md:px-16 py-14 bg-black border-b border-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-artistic italic text-4xl md:text-5xl bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Types */}
      <section className="px-6 md:px-16 py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-14">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <h2 className="font-display text-lg md:text-xl tracking-wide text-gray-400 uppercase">
              Ways to Collaborate
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipTypes.map((type) => (
              <div
                key={type.title}
                className="bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-yellow-500 transition duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{type.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="px-6 md:px-16 py-20 bg-black border-t border-gray-900">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <h2 className="font-display text-lg md:text-xl tracking-wide text-gray-400 uppercase">
              Why Partner With Us
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mb-14">
            Partnering with Ann Peter Production means your investment goes beyond a transaction
            — it becomes part of a story the world will see.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-5 items-start">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#111111] border border-yellow-500 flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="px-6 md:px-16 py-20 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-3xl mx-auto">

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <p className="text-gray-400 tracking-widest text-sm uppercase">Get In Touch</p>
          </div>

          <h2 className="font-artistic italic text-4xl md:text-5xl mb-4">
            <span className="text-white">Interested in </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              partnering?
            </span>
          </h2>

          <p className="text-gray-400 mb-12 text-base leading-relaxed">
            Tell us a little about yourself and what you have in mind.
            We will get back to you within 2 business days.
          </p>

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 md:p-10">
            <form className="space-y-6">

              {/* Name + Organization */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Organization / Company <span className="text-gray-600">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your company or organization"
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Phone Number <span className="text-gray-600">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+254 700 000 000"
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition"
                  />
                </div>
              </div>

              {/* Partnership Type */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Type of Partnership</label>
                <select className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition">
                  <option value="">Select partnership type...</option>
                  <option value="Brand Collaboration">Brand Collaboration</option>
                  <option value="Co-Production">Co-Production</option>
                  <option value="Distribution">Distribution Partnership</option>
                  <option value="Creative Collaboration">Creative Collaboration</option>
                  <option value="Event Coverage">Event Coverage</option>
                  <option value="NGO / Cultural Project">NGO / Cultural Project</option>
                  <option value="Investment">Investment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Tell us about your idea</label>
                <textarea
                  rows={5}
                  placeholder="Describe what you have in mind, your goals, and how you see us working together..."
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white resize-none focus:outline-none focus:border-yellow-500 transition"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-xl hover:bg-yellow-600 transition duration-300"
              >
                Start a Conversation
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 px-6 md:px-16 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">2026 Ann Peter Productions. All rights reserved.</p>
          <a href="/" className="text-sm text-gray-400 hover:text-yellow-500 transition">
            Back to Home
          </a>
        </div>
      </footer>

    </div>
  )
}
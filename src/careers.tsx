// src/Careers.tsx

export default function Careers() {
  const roles = [
    { title: "Acting / Cast", icon: "🎭", description: "Lead roles, supporting characters, and extras for feature films and commercials." },
    { title: "Makeup Artist", icon: "💄", description: "Creative and special effects makeup for film, TV, and live productions." },
    { title: "Video Editor", icon: "🎞️", description: "Post-production editing for features, documentaries, and brand content." },
    { title: "Script Writer", icon: "✍️", description: "Original screenplays, adaptations, and creative writing for African narratives." },
    { title: "Script Supervisor", icon: "📋", description: "Continuity management and script coordination on set." },
    { title: "Gaffer & Key Grip", icon: "💡", description: "Lighting design, electrical setup, and rigging for cinematic productions." },
    { title: "Fashion Designer", icon: "👗", description: "Costume and wardrobe design that brings characters and stories to life." },
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

      {/* Hero Banner */}
      <section className="px-6 md:px-16 py-24 bg-[#0a0a0a] border-b border-gray-900">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <p className="text-gray-400 tracking-widest text-sm uppercase">Join Our Team</p>
          </div>
          <h1 className="font-artistic italic text-5xl md:text-7xl leading-tight mb-8">
            <span className="text-white">Be part of </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              the story
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            Ann Peter Production is always on the lookout for talent and would love to have you on board.
            Whether you're in front of the camera or behind it — if you have the passion, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="px-6 md:px-16 py-20 bg-black">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl font-semibold text-white mb-10">Open Opportunities</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {roles.slice(0, 6).map((role) => (
              <div
                key={role.title}
                className="bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-yellow-500 transition duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{role.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{role.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>

          {/* Last card centered */}
          <div className="flex justify-center">
            <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-yellow-500 transition duration-300 hover:-translate-y-1 w-full sm:w-[calc(33.333%-12px)]">
              <div className="text-3xl mb-4">{roles[6].icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{roles[6].title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{roles[6].description}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Application Form */}
      <section className="px-6 md:px-16 py-20 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-2xl mx-auto">

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <p className="text-gray-400 tracking-widest text-sm uppercase">Apply Now</p>
          </div>

          <h2 className="font-artistic italic text-4xl md:text-5xl mb-4">
            <span className="text-white">Let's talk </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">talent</span>
          </h2>

          <p className="text-gray-400 mb-12 text-base leading-relaxed">
            Fill in the form below and we'll be in touch for further auditioning or an interview.
          </p>

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 md:p-10">
            <form className="space-y-6">

              {/* Full Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition"
                />
              </div>

              {/* Phone */}
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

              {/* Role */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Role Applying For</label>
                <select className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition">
                  <option value="">Select a role...</option>
                  <option>Acting / Cast</option>
                  <option>Makeup Artist</option>
                  <option>Video Editor</option>
                  <option>Script Writer</option>
                  <option>Script Supervisor</option>
                  <option>Gaffer &amp; Key Grip</option>
                  <option>Fashion Designer (Clothing)</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-xl hover:bg-yellow-600 transition duration-300"
              >
                Submit Application
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* ✅ Fixed: replaced raw ← with &larr; */}
      <footer className="bg-black border-t border-gray-900 px-6 md:px-16 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Ann Peter Productions. All rights reserved.</p>
          <a href="/" className="text-sm text-gray-400 hover:text-yellow-500 transition">
            &larr; Back to Home
          </a>
        </div>
      </footer>

    </div>
  )
}
// src/TermsOfService.tsx

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing or using the Ann Peter Production website (annpeterproduction.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.",
        "These terms apply to all visitors, users, and anyone who accesses or submits information through the website, including through contact forms, partnership inquiries, and career applications.",
      ],
    },
    {
      title: "2. Intellectual Property",
      content: [
        "All content on this website is the exclusive property of Ann Peter Productions and is protected under applicable copyright, trademark, and intellectual property laws.",
        "This includes but is not limited to: feature films, documentary footage, trailers, and video content; scripts, screenplays, and written works; photographs, production stills, and graphics; branding, logos, and visual identity; and all other creative works produced or commissioned by Ann Peter Productions.",
        "You may not reproduce, distribute, modify, publicly display, or create derivative works from any content on this site without prior written permission from Ann Peter Productions.",
      ],
    },
    {
      title: "3. User Submissions",
      content: [
        "When you submit information through any form on this website — including contact inquiries, partnership proposals, or career applications — the following terms apply:",
        "Submitting a career application does not guarantee employment, an audition, or any form of engagement with Ann Peter Productions. All applications are reviewed at our discretion.",
        "Submitting a project idea, script, or creative concept does not guarantee production, development, or any form of compensation. Ann Peter Productions may have similar projects in development independently.",
        "You agree not to submit any content that is unlawful, defamatory, harassing, obscene, or that infringes on the intellectual property rights of any third party.",
        "By submitting content, you grant Ann Peter Productions a non-exclusive right to review and use the submitted information solely for the purpose of evaluating your inquiry or application.",
      ],
    },
    {
      title: "4. External Links",
      content: [
        "This website may contain links to third-party platforms including but not limited to social media pages, streaming services, and partner websites.",
        "Ann Peter Productions does not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and privacy policies of any external sites you visit.",
        "The inclusion of any link does not imply endorsement by Ann Peter Productions.",
      ],
    },
    {
      title: "5. Limitation of Liability",
      content: [
        "Ann Peter Productions makes no warranties, expressed or implied, regarding the accuracy, completeness, or reliability of any content on this website.",
        "To the fullest extent permitted by law, Ann Peter Productions shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of or inability to use this website, including any reliance on information obtained through it.",
        "This includes damages resulting from errors, omissions, interruptions, or delays in service, even if Ann Peter Productions has been advised of the possibility of such damages.",
      ],
    },
    {
      title: "6. Privacy and Data",
      content: [
        "Any personal information you submit through this website — including your name, email address, and phone number — is collected solely for the purpose of responding to your inquiry or application.",
        "Ann Peter Productions does not sell, rent, or share your personal information with third parties without your consent, except where required by law.",
        "By submitting your information, you consent to Ann Peter Productions storing and using it for follow-up communications related to your submission.",
      ],
    },
    {
      title: "7. Governing Law",
      content: [
        "These Terms of Service are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of Nairobi, Kenya.",
      ],
    },
    {
      title: "8. Changes to Terms",
      content: [
        "Ann Peter Productions reserves the right to update or modify these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting to the website.",
        "Your continued use of the website following any changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically to stay informed.",
        "The date of the most recent revision will always be noted at the bottom of this page.",
      ],
    },
    {
      title: "9. Contact",
      content: [
        "If you have any questions about these Terms of Service, please contact us at hello@annpeterproduction.com or through the contact form on our website.",
      ],
    },
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
      <section className="px-6 md:px-16 py-20 bg-[#0a0a0a] border-b border-gray-900">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <p className="text-gray-400 tracking-widest text-sm uppercase">Legal</p>
          </div>
          <h1 className="font-artistic italic text-5xl md:text-6xl leading-tight mb-6">
            <span className="text-white">Terms of </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
            Please read these terms carefully before using the Ann Peter Production website.
            By accessing this site, you agree to be bound by the terms outlined below.
          </p>
          <p className="text-gray-600 text-sm mt-6">Last updated: May 2026</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="px-6 md:px-16 py-20 bg-black">
        <div className="max-w-4xl mx-auto space-y-14">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-white mb-5 pb-3 border-b border-gray-900">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-400 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 md:px-16 py-16 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg mb-1">Still have questions?</p>
            <p className="text-gray-400 text-sm">Our team is happy to clarify anything in these terms.</p>
          </div>
          <a
            href="/?scrollTo=contact"
            className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-600 transition duration-300 whitespace-nowrap"
          >
            Contact Us
          </a>
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
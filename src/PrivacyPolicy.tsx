// src/PrivacyPolicy.tsx

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content: [
        "Ann Peter Productions ('we', 'us', or 'our') is committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, how we protect it, and your rights in relation to it.",
        "This policy applies to all information collected through our website, including through our contact form, partnership inquiry form, and careers application form.",
        "By using our website and submitting information through any of our forms, you consent to the practices described in this Privacy Policy.",
      ],
    },
    {
      title: "2. Information We Collect",
      content: [
        "We only collect information that you voluntarily provide to us. Depending on which form you use, this may include:",
        "Contact Form: your full name, email address, phone number (optional), inquiry type, and your project description or message.",
        "Careers Application Form: your full name, email address, phone number (optional), and the role you are applying for.",
        "Partnership Inquiry Form: your full name, organization or company name (optional), email address, phone number (optional), partnership type, and a description of your proposal.",
        "We do not collect any information automatically at this time, such as cookies, IP addresses, or browser data. This policy will be updated when analytics or tracking tools are introduced.",
      ],
    },
    {
      title: "3. How We Use Your Information",
      content: [
        "The information you submit is used strictly for the purpose it was intended. Specifically:",
        "Contact inquiries are used to respond to your message, answer questions, and follow up on project discussions.",
        "Career applications are used to evaluate your suitability for a role and to contact you regarding auditions, interviews, or follow-up steps.",
        "Partnership inquiries are used to assess potential collaboration opportunities and to initiate a conversation with you or your organization.",
        "We do not use your information for unsolicited marketing, and we will not contact you for purposes unrelated to your original submission without your explicit consent.",
      ],
    },
    {
      title: "4. Data Security",
      content: [
        "We take the security of your personal information seriously and apply industry-standard practices to protect it.",
        "Encryption in Transit: all data transmitted between your browser and our website is protected using TLS (Transport Layer Security) encryption, ensuring that information you submit cannot be intercepted during transfer.",
        "Encryption at Rest: personal data stored on our servers is encrypted at rest, meaning it is protected even in the event of unauthorized server access.",
        "Access Controls: access to submitted data is restricted to authorized personnel only, on a strict need-to-know basis. We do not allow broad internal access to personal submissions.",
        "Data Minimization: we only collect the information that is necessary for the stated purpose. We do not request sensitive personal data such as national ID numbers, financial information, or biometric data through our website forms.",
        "While we implement strong security measures, no method of transmission over the internet or electronic storage is 100% secure. We are committed to maintaining the highest practical standard of protection and will notify affected users in the event of a data breach.",
      ],
    },
    {
      title: "5. Sharing of Personal Information",
      content: [
        "We do not sell, rent, trade, or share your personal information with any third party without your explicit prior permission. Your data belongs to you.",
        "We will only disclose your information in the following limited circumstances:",
        "With your consent: if you have given us clear, specific permission to share your information with a named third party for a stated purpose.",
        "Legal obligation: if we are required by law, court order, or regulatory authority to disclose your information, we will do so only to the minimum extent required and will notify you where legally permitted.",
        "We do not currently use third-party marketing platforms, advertising networks, or data brokers. If this changes in the future, this policy will be updated and you will be notified.",
      ],
    },
    {
      title: "6. Third-Party Services",
      content: [
        "Our website does not currently use third-party analytics, advertising, or tracking tools. However, the following may apply as the website evolves:",
        "Analytics: if we introduce tools such as Google Analytics in the future, they may collect anonymized usage data such as page views and session duration. You will be informed and given the option to opt out.",
        "Video Embeds: if we embed videos from platforms such as YouTube or Vimeo, those platforms may set their own cookies and collect data according to their own privacy policies. We recommend reviewing their policies independently.",
        "Payment Systems: if payment functionality is introduced for services, the payment processor used will handle transaction data under their own security and privacy standards. We will not store payment card details on our servers.",
        "Email Delivery: when our backend is live, we may use a trusted email service provider to deliver responses to your inquiries. These providers are contractually bound to protect your data and are not permitted to use it for their own purposes.",
        "This section will be updated as new third-party integrations are introduced.",
      ],
    },
    {
      title: "7. Data Retention",
      content: [
        "We retain your personal information only for as long as is necessary to fulfill the purpose for which it was collected.",
        "Contact and partnership inquiries are retained for up to 12 months to allow for follow-up on ongoing discussions, after which they are securely deleted.",
        "Career applications are retained for up to 6 months after the application is reviewed. If we wish to keep your profile on file for future opportunities, we will request your explicit consent.",
        "You may request deletion of your data at any time by contacting us at the address provided in Section 9 of this policy.",
      ],
    },
    {
      title: "8. Your Rights",
      content: [
        "Depending on your location, you may have the following rights regarding your personal data:",
        "Right of Access: you may request a copy of the personal information we hold about you.",
        "Right to Rectification: you may request that we correct any inaccurate or incomplete information.",
        "Right to Erasure: you may request that we delete your personal information, subject to any legal obligations we may have to retain it.",
        "Right to Withdraw Consent: where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing.",
        "To exercise any of these rights, please contact us using the details in Section 9. We will respond within 14 business days.",
      ],
    },
    {
      title: "9. Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time, particularly as our website and backend services develop. Any changes will be posted on this page with a revised effective date.",
        "We encourage you to review this policy periodically. Continued use of the website after changes are posted constitutes your acceptance of the updated policy.",
        "For significant changes that affect how we use your data, we will make reasonable efforts to notify you directly where we have your contact information.",
      ],
    },
    {
      title: "10. Contact Us",
      content: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:",
        "Email: hello@annpeterproduction.com",
        "Location: Nairobi, Kenya",
        "We take privacy inquiries seriously and will respond within 5 business days.",
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
            <span className="text-white">Privacy </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
            Your privacy matters to us. This policy explains what data we collect,
            how we use it, how we protect it, and your rights as a user of our website.
          </p>
          <p className="text-gray-600 text-sm mt-6">Last updated: May 2026</p>
        </div>
      </section>

      {/* Quick Summary Banner */}
      <section className="px-6 md:px-16 py-10 bg-[#111111] border-b border-gray-900">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 rounded-xl border border-yellow-500 flex items-center justify-center text-lg">
              🔒
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-1">Encrypted and Secure</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                All data is encrypted in transit and at rest.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 rounded-xl border border-yellow-500 flex items-center justify-center text-lg">
              🚫
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-1">Never Sold or Shared</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Your data is never sold or shared without your explicit permission.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 rounded-xl border border-yellow-500 flex items-center justify-center text-lg">
              ✋
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-1">You Are in Control</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Request access, correction, or deletion of your data at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
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
            <p className="text-white font-semibold text-lg mb-1">Privacy concerns or questions?</p>
            <p className="text-gray-400 text-sm">
              Reach out to us directly and we will respond within 5 business days.
            </p>
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
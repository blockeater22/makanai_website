import { Link } from "react-router-dom";

export default function TermsOfServicePage() {
  const lastUpdated = "May 4, 2026";

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link to="/" className="font-['Outfit'] font-bold text-xl text-slate-900">
            MakanAI
          </Link>
          <Link to="/" className="text-sm text-slate-600 hover:text-slate-900 transition">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="font-['Outfit'] text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <p className="text-base text-slate-700 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) form a binding agreement between you (&quot;you&quot;,
              &quot;your&quot;, or &quot;Builder&quot;) and MakanAI (&quot;we&quot;, &quot;our&quot;, or
              &quot;Platform&quot;). By creating an account, accessing, or using MakanAI, you agree to these
              Terms. If you do not agree, do not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">1. Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>You must be at least 18 years old.</li>
              <li>You must be a registered real estate developer, agency, or authorized representative thereof.</li>
              <li>For projects in India, you must hold a valid RERA registration. We may request proof.</li>
              <li>The service is for business use only. Personal or non-commercial use is not permitted.</li>
              <li>You are responsible for keeping your login credentials secure and for all activity under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">2. What MakanAI does</h2>
            <p className="text-slate-700 leading-relaxed">
              MakanAI is an AI-powered marketing automation platform for Indian real estate developers. It helps
              you generate landing pages, plan and run ad campaigns on Meta and Google, capture and route leads,
              and automate WhatsApp follow-ups. The platform makes recommendations and automations; final
              campaign approval and publishing remain at your discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">3. Your responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Account ownership:</strong> if you connect your own Meta Business Manager or Google Ads Manager (Agency plan), those accounts remain yours and you are solely responsible for them.</li>
              <li><strong>Ad content:</strong> you are responsible for ensuring all ad copy, creatives, claims, and landing pages comply with Meta Advertising Policies, Google Ads Policies, RERA, the Real Estate (Regulation and Development) Act 2016, the Consumer Protection Act 2019, and all other applicable Indian laws.</li>
              <li><strong>RERA disclosure:</strong> all projects advertised via MakanAI must include a valid RERA registration number. We will block publishing if RERA is missing.</li>
              <li><strong>Lead consent:</strong> you must obtain valid consent before contacting leads via call, SMS, or WhatsApp under the TRAI commercial communications regulations.</li>
              <li><strong>Truthful project data:</strong> all information you enter (price, possession, RERA, amenities, configurations) must be accurate. Misrepresentation may result in account suspension and legal liability under the RERA Act.</li>
              <li><strong>No prohibited targeting:</strong> housing ads are bound by Special Ad Category rules. We enforce these automatically; you may not attempt to circumvent them.</li>
              <li><strong>Compliance:</strong> you are responsible for any tax, GST, and reporting obligations arising from advertising spend you incur through MakanAI.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">4. Payment, wallet, refunds</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Subscription fees:</strong> billed monthly or annually via Razorpay. Plan pricing is shown at signup and may change with 30 days&apos; notice.</li>
              <li><strong>Ad wallet (Managed mode):</strong> you top up an ad wallet that we use to pay Meta/Google on your behalf. Wallet balances are non-refundable except in cases of platform error.</li>
              <li><strong>Direct billing (Agency mode):</strong> when you publish via your own connected Meta/Google account, those platforms bill you directly.</li>
              <li><strong>Refunds:</strong> subscription fees are refundable on a pro-rata basis only within the first 7 days of a new subscription. Past-period subscription fees, ad spend, and AI generation costs are non-refundable.</li>
              <li><strong>Failed payments:</strong> if Razorpay charges fail, we may suspend the service after 7 days&apos; notice. Active campaigns will be paused.</li>
              <li><strong>Cancellation:</strong> you may cancel anytime via account settings. Cancellation takes effect at the end of the current billing period. Active campaigns under managed mode will be paused at cancellation.</li>
              <li><strong>Taxes:</strong> all fees are exclusive of GST. GST is added at the prevailing rate as required by Indian law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">5. Prohibited use</h2>
            <p className="text-slate-700 leading-relaxed mb-3">You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Run ads for projects without valid RERA registration.</li>
              <li>Make misleading claims about pricing, possession dates, amenities, returns, or appreciation.</li>
              <li>Advertise schemes, lotteries, or guaranteed-return real estate offers in violation of SEBI / RBI rules.</li>
              <li>Run ads for properties you do not have legal authorization to sell.</li>
              <li>Attempt to bypass HOUSING Special Ad Category restrictions or any other Meta / Google policy enforcement.</li>
              <li>Spam, send unsolicited messages, or violate TRAI / DPDPA / DLT regulations.</li>
              <li>Reverse-engineer, decompile, scrape, or attempt to extract source code from MakanAI.</li>
              <li>Use the service to harm, harass, defame, or discriminate against any individual or group.</li>
              <li>Resell, sublicense, or share your account credentials with unauthorized parties.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              Violations may result in immediate suspension or termination, and we may report serious violations
              to Meta, Google, RERA authorities, or law enforcement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">6. AI-generated content</h2>
            <p className="text-slate-700 leading-relaxed">
              MakanAI generates landing pages, ad copy, audience targeting, and other marketing assets using
              third-party AI models. These outputs are tools, not guarantees. You are responsible for reviewing
              all AI-generated content for accuracy, legal compliance, and appropriateness before publishing.
              We make no representations about the performance, conversion rate, or revenue impact of any
              AI-generated material.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">7. Intellectual property</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>You retain all rights to project data, brand assets, and creatives you upload.</li>
              <li>You grant us a non-exclusive license to use your project data and assets solely to provide the service to you.</li>
              <li>Landing pages we generate are licensed to you for use on subdomains and custom domains you control.</li>
              <li>The MakanAI platform, software, designs, AI prompts, and templates remain our exclusive intellectual property.</li>
              <li>You may not redistribute or resell our templates outside of campaigns you publish for your own real estate projects.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">8. Limitation of liability</h2>
            <p className="text-slate-700 leading-relaxed mb-3">To the maximum extent permitted by Indian law:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>We provide MakanAI &quot;as is&quot; without warranties of any kind, express or implied.</li>
              <li>We do not guarantee any specific number of leads, lead quality, conversion rate, cost per lead, sales, or revenue from campaigns published via the platform.</li>
              <li>We are not liable for actions taken by Meta, Google, WhatsApp, Razorpay, or any third-party platform, including ad disapprovals, account suspensions, billing errors on third-party platforms, API outages, or policy changes.</li>
              <li>We are not responsible for losses arising from your own ad copy, creative quality, project misrepresentation, or non-compliance with applicable laws.</li>
              <li>Our total aggregate liability for any claim relating to MakanAI is limited to the fees paid by you to MakanAI in the 3 months immediately preceding the claim.</li>
              <li>We are not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, lost data, or business interruption.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">9. Indemnification</h2>
            <p className="text-slate-700 leading-relaxed">
              You agree to indemnify and hold MakanAI, its officers, employees, and partners harmless from any
              claims, damages, losses, or legal fees arising from (a) your use of the platform, (b) your ad
              content, (c) your project misrepresentation, (d) violations of RERA or other laws, or (e) your
              breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">10. Termination</h2>
            <p className="text-slate-700 leading-relaxed mb-3">We may suspend or terminate your account immediately if:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>You materially breach these Terms.</li>
              <li>You violate applicable laws (RERA, DPDPA, TRAI, Consumer Protection Act, etc.).</li>
              <li>Your subscription payment fails and is not resolved within 7 days.</li>
              <li>You misrepresent project data or run ads for projects you do not legally control.</li>
              <li>We are required to do so by law enforcement or court order.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              You may terminate your account at any time via account settings. Upon termination, we will retain
              your data per our Privacy Policy and applicable retention laws. See our{" "}
              <Link to="/data-deletion" className="text-blue-600 underline hover:text-blue-700">Data Deletion page</Link>{" "}
              for the full deletion process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">11. Governing law and dispute resolution</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms are governed by the laws of India. Any dispute will first be attempted to be resolved
              through good-faith negotiation. If unresolved within 30 days, disputes will be subject to
              arbitration under the Arbitration and Conciliation Act 1996, with the seat of arbitration in
              Mumbai, Maharashtra. Subject to the arbitration clause, courts in Mumbai have exclusive
              jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">12. Changes to these Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update these Terms periodically. Material changes will be communicated via email and
              in-app notification at least 14 days before they take effect. Continued use of MakanAI after the
              effective date constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">13. Contact</h2>
            <p className="text-slate-700 leading-relaxed">
              MakanAI<br />
              India<br />
              Email: <a href="mailto:blockeater22@gmail.com" className="text-blue-600 underline hover:text-blue-700">blockeater22@gmail.com</a>
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 mt-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} MakanAI. All rights reserved.</p>
          <div className="mt-3 flex items-center justify-center gap-6">
            <Link to="/privacy" className="hover:text-slate-900 transition">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-900 transition">Terms</Link>
            <Link to="/data-deletion" className="hover:text-slate-900 transition">Data Deletion</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

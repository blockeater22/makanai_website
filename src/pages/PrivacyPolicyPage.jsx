import { Link } from "react-router-dom";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <p className="text-base text-slate-700 leading-relaxed">
              MakanAI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates a marketing automation platform for
              real estate developers in India. This Privacy Policy explains what information we collect, how we
              use it, with whom we share it, and what rights you have. By creating an account or using our
              services, you agree to the practices described here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">1. Information we collect</h2>
            <p className="text-slate-700 leading-relaxed mb-3">We collect the following categories of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Account information:</strong> name, email address, phone number, business name, and password (hashed).</li>
              <li><strong>Project data:</strong> real estate project details you provide, including project name, RERA number, location, configurations, pricing, amenities, gallery images, and floor plans.</li>
              <li><strong>Ad account credentials:</strong> Meta Business Manager and Google Ads Manager OAuth tokens, ad account IDs, Facebook Page IDs, Instagram identity IDs, Google Ads customer IDs, and Pixel IDs.</li>
              <li><strong>Lead data:</strong> name, phone, email, configuration interest, and any custom fields collected via lead forms on landing pages or Meta lead-gen ads.</li>
              <li><strong>Campaign performance data:</strong> spend, impressions, clicks, leads, cost per lead, and other metrics from Meta and Google Ads APIs.</li>
              <li><strong>Payment information:</strong> processed by Razorpay; we do not store full card or bank details. We retain transaction IDs and amounts for billing records.</li>
              <li><strong>Usage information:</strong> pages viewed, features used, IP address, browser type, device information, and timestamps.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">2. How we use your information</h2>
            <p className="text-slate-700 leading-relaxed mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Create and manage Meta and Google ad campaigns on your behalf using the credentials you provide.</li>
              <li>Generate AI-powered landing pages, ad creatives, copy, and audience targeting strategies based on your project data.</li>
              <li>Route incoming leads from ads to your dashboard and trigger WhatsApp greetings.</li>
              <li>Bill you for ad spend (via your wallet) and platform subscription fees.</li>
              <li>Send service notifications, alerts (e.g., low wallet balance), and account-related emails.</li>
              <li>Improve our AI models using anonymized, aggregated patterns (we never train on your raw lead data or personally identifiable information).</li>
              <li>Comply with legal obligations including RERA, GST, and Indian tax laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">3. Third parties we share data with</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              We share specific data only with service providers necessary to operate the platform:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Meta (Facebook):</strong> ad account, page, pixel, and campaign data via the Marketing API + Conversions API.</li>
              <li><strong>Google (Google Ads, Google Cloud):</strong> ad account, conversion, and campaign data via the Google Ads API.</li>
              <li><strong>WhatsApp Business (Meta):</strong> phone numbers and message content for automated lead nurture.</li>
              <li><strong>Razorpay:</strong> billing and wallet payments; we share name, email, phone, and amount.</li>
              <li><strong>ImageKit:</strong> stores project images and ad creatives.</li>
              <li><strong>MongoDB Atlas (data hosting), Cloudflare (CDN + DNS):</strong> infrastructure providers.</li>
              <li><strong>Anthropic and OpenAI:</strong> for AI-generated copy and strategy. We send anonymized project briefs; we do not send lead PII.</li>
              <li><strong>Government / law enforcement:</strong> if required by valid legal process under Indian law.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              We never sell your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">4. Data retention</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Account and project data:</strong> retained while your account is active. Deleted within 30 days of account deletion request.</li>
              <li><strong>Lead data:</strong> retained until you delete it or your account is deleted.</li>
              <li><strong>Campaign performance data:</strong> retained for 24 months for analytics, then anonymized.</li>
              <li><strong>OAuth tokens:</strong> revoked immediately on disconnect or account deletion.</li>
              <li><strong>Billing records:</strong> retained for 8 years as required under Indian tax law (GST Act, Income Tax Act).</li>
              <li><strong>Audit logs:</strong> retained for 12 months for security and compliance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">5. Your rights</h2>
            <p className="text-slate-700 leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Access</strong> the personal data we hold about you.</li>
              <li><strong>Correct</strong> inaccurate or incomplete data through your account settings.</li>
              <li><strong>Delete</strong> your data — see our <Link to="/data-deletion" className="text-blue-600 underline hover:text-blue-700">Data Deletion page</Link> for the process.</li>
              <li><strong>Export</strong> your data in a structured, machine-readable format.</li>
              <li><strong>Withdraw consent</strong> for ad-account access at any time by disconnecting Meta or Google.</li>
              <li><strong>Object</strong> to processing or restrict how we use your data.</li>
              <li><strong>Lodge a complaint</strong> with the relevant Data Protection Authority (Government of India under the DPDPA).</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              Send any request to <a href="mailto:blockeater22@gmail.com" className="text-blue-600 underline hover:text-blue-700">blockeater22@gmail.com</a>. We respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">6. Cookies and tracking</h2>
            <p className="text-slate-700 leading-relaxed mb-3">We use cookies for:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Authentication:</strong> session cookies that keep you signed in (httpOnly, Secure).</li>
              <li><strong>Preferences:</strong> remembering UI settings like sandbox mode toggle.</li>
              <li><strong>Analytics:</strong> first-party analytics to measure feature usage; we do not use third-party tracking like Google Analytics on our admin app.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              Landing pages we generate on your behalf may include Meta Pixel and Google Tag scripts for ad
              measurement — these are configured per project and disclosed on the landing page footer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">7. Security</h2>
            <p className="text-slate-700 leading-relaxed">
              We encrypt OAuth tokens and sensitive data at rest using Fernet (AES-128) and in transit using TLS 1.2+.
              Passwords are hashed with bcrypt. Access to production data is restricted to a small set of authorized
              personnel with audit logging. We never store full payment-card details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">8. Children's privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              MakanAI is a B2B platform for licensed real estate developers and is not intended for individuals
              under 18 years of age. We do not knowingly collect data from minors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">9. International data transfers</h2>
            <p className="text-slate-700 leading-relaxed">
              Data may be processed outside India by service providers (e.g., Meta, Google, Anthropic, OpenAI).
              We ensure these providers comply with applicable data protection standards and use Standard
              Contractual Clauses where required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">10. Changes to this policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Material changes will be communicated via
              email and an in-app notification at least 14 days before they take effect. The &quot;Last updated&quot;
              date at the top of this page reflects the latest revision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">11. Contact us</h2>
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

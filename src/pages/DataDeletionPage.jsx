import { Link } from "react-router-dom";

export default function DataDeletionPage() {
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
            Data Deletion
          </h1>
          <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <p className="text-base text-slate-700 leading-relaxed">
              You can request deletion of your MakanAI account and all associated personal data at any time.
              This page explains exactly what gets deleted, how to make the request, how long it takes, and what
              we cannot delete due to legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">1. What gets deleted</h2>
            <p className="text-slate-700 leading-relaxed mb-3">When your deletion request is processed, we permanently delete:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Your account profile (name, email, phone, password hash)</li>
              <li>All projects, strategies, landing pages, and creatives you created</li>
              <li>All leads collected through your campaigns and forms</li>
              <li>All campaigns, ad sets, ads, and related metadata stored on MakanAI</li>
              <li>Connected ad-account credentials and OAuth tokens (Meta access tokens, Google refresh tokens, Pixel IDs, Page IDs, Customer IDs)</li>
              <li>Uploaded media (images, videos, floor plans) from our storage and from ImageKit</li>
              <li>Static landing-page bundles deployed to Cloudflare R2 under your subdomains</li>
              <li>WhatsApp message history processed through our platform</li>
              <li>AI-generated content (copy, audiences, plans) tied to your account</li>
              <li>Activity logs and usage data tied to your user ID</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              We also revoke and disconnect any Meta and Google OAuth tokens we hold for you. After deletion,
              MakanAI cannot access your ad accounts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">2. How to request deletion</h2>
            <p className="text-slate-700 leading-relaxed mb-3">You have three ways to delete your data:</p>

            <div className="rounded-lg border border-slate-200 bg-white p-6 mb-4">
              <h3 className="font-['Outfit'] font-semibold text-lg text-slate-900 mb-2">Option A — Self-serve (fastest)</h3>
              <ol className="list-decimal pl-6 space-y-1 text-slate-700">
                <li>Sign in to your MakanAI account</li>
                <li>Go to <strong>Settings → Account → Delete Account</strong></li>
                <li>Confirm with your password</li>
                <li>Account is queued for deletion immediately</li>
              </ol>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 mb-4">
              <h3 className="font-['Outfit'] font-semibold text-lg text-slate-900 mb-2">Option B — Email request</h3>
              <p className="text-slate-700 mb-2">
                Email <a href="mailto:blockeater22@gmail.com?subject=Data%20Deletion%20Request" className="text-blue-600 underline hover:text-blue-700">blockeater22@gmail.com</a> with subject <strong>&quot;Data Deletion Request&quot;</strong> from the email address registered on your account. Include:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Your registered email</li>
                <li>Your business / project name (helps us locate the account quickly)</li>
                <li>Your phone number (for verification)</li>
              </ul>
              <p className="text-slate-700 mt-2">
                We will reply within 2 business days to verify the request before deletion proceeds.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="font-['Outfit'] font-semibold text-lg text-slate-900 mb-2">Option C — Meta-initiated request</h3>
              <p className="text-slate-700">
                If you used &quot;Sign in with Facebook&quot; or connected your Meta account and want to revoke
                MakanAI&apos;s access, you can also remove the app at{" "}
                <a
                  href="https://www.facebook.com/settings?tab=business_tools"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  Facebook Settings → Business Integrations
                </a>{" "}
                — find &quot;MakanAI&quot;, click <strong>Remove</strong>, and check &quot;Delete posts, videos
                or events that MakanAI posted on your timeline&quot;. Meta will notify us and we will delete
                your data within 30 days.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">3. How long deletion takes</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>OAuth tokens:</strong> revoked immediately upon request submission.</li>
              <li><strong>Active campaigns:</strong> paused immediately to stop further ad spend.</li>
              <li><strong>Account, projects, leads, creatives:</strong> deleted within 30 days from receipt of a verified request.</li>
              <li><strong>Backups:</strong> purged from rolling backups within 90 days.</li>
              <li><strong>Cloudflare R2 deployed landing pages:</strong> bucket objects deleted within 30 days; CDN propagation completes within ~6 hours.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              You will receive a final confirmation email once deletion is complete.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">4. What we cannot delete</h2>
            <p className="text-slate-700 leading-relaxed mb-3">Some records must be retained to comply with Indian law:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Billing and tax records (8 years):</strong> retained per GST Act 2017 and Income Tax Act, 1961. These records contain transaction IDs, amounts, GSTIN, and your business name — not project or lead data.</li>
              <li><strong>Audit logs of security events (12 months):</strong> retained for fraud prevention and dispute resolution.</li>
              <li><strong>Anonymized aggregated analytics:</strong> we may retain non-identifiable usage statistics that cannot be linked back to you.</li>
              <li><strong>Data already exported by you:</strong> if you downloaded leads, campaign reports, or other data before deletion, copies you possess are out of our control.</li>
              <li><strong>Data on third-party platforms:</strong> ads already published via Meta or Google remain on those platforms per their retention policies. Disconnecting your account does not delete past ad records on Meta Ads Manager or Google Ads. To delete those, you must use Meta&apos;s and Google&apos;s own data-deletion processes.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              Where required by law (e.g., a court order or pending legal proceeding), we may retain specific
              records longer than indicated here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">5. Confirmation process</h2>
            <p className="text-slate-700 leading-relaxed mb-3">You will receive:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>An <strong>acknowledgement email</strong> within 2 business days of submitting your request.</li>
              <li>A <strong>verification step</strong> if requested via email (we may ask you to confirm from your registered email or by phone to prevent fraudulent deletions).</li>
              <li>A <strong>final confirmation email</strong> once all data has been deleted, typically within 30 days.</li>
              <li>A <strong>confirmation code</strong> you can keep for your records.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">6. Restoration after deletion</h2>
            <p className="text-slate-700 leading-relaxed">
              Deletion is permanent. We cannot restore your account, projects, leads, campaigns, or creatives
              after the 30-day deletion window has passed. If you only want to pause ads or remove a single
              project, please use the in-app options instead — contact{" "}
              <a href="mailto:blockeater22@gmail.com" className="text-blue-600 underline hover:text-blue-700">blockeater22@gmail.com</a>{" "}
              if you need help.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Outfit'] font-semibold text-slate-900 mb-3">7. Questions</h2>
            <p className="text-slate-700 leading-relaxed">
              Contact us at <a href="mailto:blockeater22@gmail.com" className="text-blue-600 underline hover:text-blue-700">blockeater22@gmail.com</a>{" "}
              for any questions about data deletion. See our <Link to="/privacy" className="text-blue-600 underline hover:text-blue-700">Privacy Policy</Link>{" "}
              for full details on how we handle your data.
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

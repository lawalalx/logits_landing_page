import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4 text-lg leading-relaxed">
          At Syncliq Lab, we respect your privacy. This page explains what
          information we collect, how we use it, and the choices you have.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Information we collect</h2>
          <p className="mb-2">
            We collect only what helps us run and improve the site and our
            products: information you provide directly (like contact details
            when you reach out), and non-identifying usage data (pages you
            visit, device and browser information). We do not sell your
            personal data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">How we use data</h2>
          <p className="mb-2">
            We use collected information to operate the website, respond to
            inquiries, and make our services better — for example by fixing
            bugs, improving features, and understanding how people use the
            site. We may also use aggregated, anonymized data for analytics.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Cookies and tracking</h2>
          <p className="mb-2">
            We use cookies and similar technologies for essential site
            functionality and analytics. You can control cookie settings in
            your browser; disabling some cookies may reduce functionality.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Third-party services</h2>
          <p className="mb-2">
            We may use trusted third-party services (for hosting, analytics,
            or payments). Those services have their own privacy policies — we
            encourage you to review them. We only share the minimum data
            required for the service to work.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your choices</h2>
          <p className="mb-2">
            You can contact us to access, correct, or delete your personal
            information. You can opt out of marketing messages and disable
            non-essential cookies in your browser.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Security</h2>
          <p className="mb-2">
            We take reasonable measures to protect your information, but no
            system is completely secure. If we learn of a data breach that
            affects your information, we'll notify you according to
            applicable law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="mb-2">
            If you have questions or requests about your data, email us at
            <a className="text-electric-500 underline ml-1" href="mailto:hello@syncliq.com">hello@syncliq.com</a>.
          </p>
        </section>

        <p className="text-sm text-gray-600">Last updated: April 30, 2026</p>

        <div className="mt-8">
          <Link href="/" className="text-electric-500 underline">Back to home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

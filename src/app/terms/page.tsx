import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="font-heading text-4xl text-brand-text mb-8">Terms of Service</h1>
          <div className="prose prose-zinc max-w-none space-y-6 text-sm leading-relaxed text-zinc-600">
            <p className="text-zinc-500 text-xs">Last updated: February 2025</p>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">1. Acceptance of Terms</h2>
            <p>
              By accessing or using ProofBase (&quot;Service&quot;), you agree to be bound by these Terms
              of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Service.
            </p>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">2. Description of Service</h2>
            <p>
              ProofBase provides tools for collecting, managing, and displaying customer testimonials
              on websites. The Service includes collection forms, management dashboards, and
              embeddable display widgets.
            </p>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account. You agree to notify us
              immediately of any unauthorized use.
            </p>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">4. User Content</h2>
            <p>
              You retain ownership of testimonials and content you submit to the Service. By
              submitting content, you grant us a license to display, store, and process that content
              as necessary to provide the Service.
            </p>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Submit false or misleading testimonials</li>
              <li>Use the Service for any illegal purpose</li>
              <li>Interfere with the proper working of the Service</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">6. AI Enhancement</h2>
            <p>
              The AI enhancement feature modifies testimonial text using artificial intelligence.
              You are responsible for reviewing enhanced content for accuracy before publishing.
              We do not guarantee the accuracy of AI-generated modifications.
            </p>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">7. Limitation of Liability</h2>
            <p>
              The Service is provided &quot;as is&quot; without warranties of any kind. We shall not be
              liable for any indirect, incidental, special, or consequential damages resulting
              from your use of the Service.
            </p>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">8. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href="mailto:hello@automatik.studio" className="text-brand-pink hover:underline">
                hello@automatik.studio
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

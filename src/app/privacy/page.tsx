import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="font-heading text-4xl text-brand-text mb-8">Privacy Policy</h1>
          <div className="prose prose-zinc max-w-none space-y-6 text-sm leading-relaxed text-zinc-600">
            <p className="text-zinc-500 text-xs">Last updated: February 2025</p>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">1. Information We Collect</h2>
            <p>
              ProofBase (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects information you provide directly to us when
              you create an account, submit testimonials, or contact us. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name and email address</li>
              <li>Company and role information</li>
              <li>Testimonial content and ratings</li>
              <li>Usage data and analytics</li>
            </ul>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and display testimonials as directed by our users</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
            </ul>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">3. AI Processing</h2>
            <p>
              Our AI enhancement feature uses third-party AI services to improve testimonial text.
              When you use this feature, the testimonial content is sent to our AI provider for
              processing. The AI does not store your data beyond the processing session.
            </p>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">4. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share information with third-party
              service providers who help us operate our business, such as hosting providers and
              analytics services.
            </p>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">5. Data Security</h2>
            <p>
              We take reasonable measures to help protect your personal information from loss, theft,
              misuse, and unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2 className="font-heading text-2xl text-brand-text !mt-8">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
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

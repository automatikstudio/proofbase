"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import ComingSoonModal from "@/components/ComingSoonModal";
import { sampleTestimonials } from "@/lib/sample-data";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-zinc-600">Now in beta — free to try</span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl text-brand-text leading-tight max-w-4xl mx-auto">
          Social proof that{" "}
          <span className="gradient-text">sells</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          Collect and display customer testimonials effortlessly. Beautiful widgets that build trust and boost conversions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/app"
            className="bg-brand-pink text-white px-8 py-4 rounded-btn font-semibold text-lg hover:bg-pink-700 transition-all shadow-lg shadow-pink-200 pulse-glow"
          >
            Start Collecting Free →
          </Link>
          <a
            href="#how-it-works"
            className="text-zinc-600 px-8 py-4 rounded-btn font-medium text-lg hover:text-brand-pink transition-colors"
          >
            See how it works
          </a>
        </div>

        {/* Social proof bar */}
        <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
          <div className="flex -space-x-2">
            {["SC", "MJ", "AP", "DK", "EW"].map((initials, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-pink to-brand-violet flex items-center justify-center text-white text-[10px] font-bold border-2 border-white"
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500">
            <span className="font-semibold text-brand-text">500+</span> businesses trust ProofBase
          </p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-zinc-500 ml-1">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function WallOfLovePreview() {
  const testimonials = sampleTestimonials.filter((t) => t.approved);
  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-text">
            Wall of <span className="gradient-text">Love</span>
          </h2>
          <p className="text-zinc-500 mt-3 max-w-lg mx-auto">
            See what our users are saying. These beautiful widgets can be yours.
          </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <div key={t.id} className="break-inside-avoid">
              <TestimonialCard
                testimonial={t}
                variant={i === 0 ? "featured" : "default"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Collect",
      desc: "Share a beautiful collection form. Customers submit testimonials in seconds.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Curate",
      desc: "Review, approve, and enhance testimonials with AI. Keep only the best.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Display",
      desc: "Embed stunning widgets on your site. Wall of love, carousel, grid — you choose.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-text">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-zinc-500 mt-3">Three simple steps to social proof paradise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="relative bg-white rounded-card p-8 border border-pink-50 shadow-sm group hover:shadow-lg hover:border-pink-200 transition-all">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-brand-pink text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg shadow-pink-200">
                {s.step}
              </div>
              <div className="text-brand-pink mb-4 mt-2">{s.icon}</div>
              <h3 className="font-heading text-2xl text-brand-text mb-2">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Collection Forms",
      desc: "Beautiful, customizable forms that make it easy for customers to leave testimonials.",
      icon: "📝",
    },
    {
      title: "Embeddable Widgets",
      desc: "Carousel, grid, wall of love — choose the perfect display for your site.",
      icon: "🎨",
    },
    {
      title: "AI Enhancement",
      desc: "Polish rough feedback into compelling stories while keeping the authentic voice.",
      icon: "✨",
    },
    {
      title: "Google Reviews Import",
      desc: "Import your existing Google reviews and showcase them alongside testimonials.",
      icon: "📥",
    },
    {
      title: "Star Ratings",
      desc: "Collect and display star ratings for quick social proof at a glance.",
      icon: "⭐",
    },
    {
      title: "One-line Embed",
      desc: "Copy-paste a single line of code. Works with any website or platform.",
      icon: "🔗",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-text">
            Everything you need for{" "}
            <span className="gradient-text">social proof</span>
          </h2>
          <p className="text-zinc-500 mt-3">Powerful features, delightfully simple.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-card p-6 border border-pink-50 hover:border-pink-200 hover:shadow-lg transition-all group"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="font-heading text-xl text-brand-text mt-4 mb-2">
                {f.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePlanClick = (plan: string) => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "pricing_click",
        plan,
        product: "proofbase",
      }),
    }).catch(() => {});

    if (plan === "Free") {
      window.location.href = "/app";
      return;
    }
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "Perfect for getting started",
      features: [
        "10 testimonials",
        "1 collection form",
        "Basic widget styles",
        "ProofBase branding",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Starter",
      price: "$15",
      period: "/month",
      desc: "For growing businesses",
      features: [
        "Unlimited testimonials",
        "5 collection forms",
        "All widget styles",
        "No branding",
        "AI enhancement",
        "Custom colors",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Pro",
      price: "$39",
      period: "/month",
      desc: "For teams & agencies",
      features: [
        "Everything in Starter",
        "Video testimonials",
        "Analytics dashboard",
        "Google Reviews import",
        "Priority support",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-text">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-zinc-500 mt-3">Start free. Upgrade when you&apos;re ready.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-card p-8 border ${
                plan.popular
                  ? "border-brand-pink shadow-xl shadow-pink-100 scale-105"
                  : "border-pink-50 shadow-sm"
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-pink text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-pink-200">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-2xl text-brand-text">{plan.name}</h3>
              <p className="text-zinc-500 text-sm mt-1">{plan.desc}</p>
              <div className="mt-6 mb-6">
                <span className="font-heading text-4xl text-brand-text">{plan.price}</span>
                <span className="text-zinc-400 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-600">
                    <svg className="w-4 h-4 text-brand-pink flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePlanClick(plan.name)}
                className={`w-full py-3 rounded-btn font-semibold text-sm transition-colors ${
                  plan.popular
                    ? "bg-brand-pink text-white hover:bg-pink-700 shadow-lg shadow-pink-200"
                    : "bg-pink-50 text-brand-pink hover:bg-pink-100"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      <ComingSoonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        plan={selectedPlan}
      />
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-brand-pink to-brand-violet rounded-card p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="font-heading text-3xl md:text-4xl relative">
            Ready to turn happy customers into your best marketing?
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto relative">
            Join 500+ businesses using ProofBase to collect and display testimonials that convert.
          </p>
          <Link
            href="/app"
            className="inline-block mt-8 bg-white text-brand-pink px-8 py-4 rounded-btn font-semibold text-lg hover:bg-pink-50 transition-colors shadow-xl relative"
          >
            Get Started Free →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WallOfLovePreview />
        <HowItWorks />
        <Features />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

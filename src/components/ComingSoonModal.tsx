"use client";

import { useState, useEffect } from "react";

export default function ComingSoonModal({
  isOpen,
  onClose,
  plan,
}: {
  isOpen: boolean;
  onClose: () => void;
  plan: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track signup interest
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "waitlist_signup",
        plan,
        email,
        product: "proofbase",
      }),
    }).catch(() => {});
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-card p-8 max-w-md w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading text-xl">You&apos;re on the list!</h3>
            <p className="text-zinc-500 text-sm mt-2">We&apos;ll notify you when {plan} launches.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl">Coming Soon!</h3>
              <p className="text-zinc-500 text-sm mt-2">
                The <span className="font-semibold text-brand-pink">{plan}</span> plan is launching soon.
                Join the waitlist to get early access.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-btn border border-pink-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink text-sm"
              />
              <button
                type="submit"
                className="w-full bg-brand-pink text-white py-3 rounded-btn font-semibold text-sm hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200"
              >
                Join Waitlist
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

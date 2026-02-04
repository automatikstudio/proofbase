"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sampleTestimonials, formQuestions, Testimonial } from "@/lib/sample-data";
import { StarRating } from "@/components/TestimonialCard";

/* ─── Collect Tab ─── */
function CollectTab() {
  return (
    <div className="space-y-8">
      {/* Shareable form URL */}
      <div className="bg-white rounded-card p-6 border border-pink-50 shadow-sm">
        <h3 className="font-heading text-xl mb-4">Your Collection Form</h3>
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-brand-bg rounded-btn px-4 py-3 text-sm text-zinc-600 border border-pink-100 truncate">
            https://proofbase.co/collect/your-company-abc123
          </div>
          <button
            onClick={() => navigator.clipboard?.writeText("https://proofbase.co/collect/your-company-abc123")}
            className="bg-brand-pink text-white px-5 py-3 rounded-btn text-sm font-semibold hover:bg-pink-700 transition-colors whitespace-nowrap"
          >
            Copy Link
          </button>
        </div>
        <p className="text-xs text-zinc-400 mt-2">Share this link with your customers to collect testimonials.</p>
      </div>

      {/* Form preview */}
      <div className="bg-white rounded-card p-6 border border-pink-50 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-xl">Form Preview</h3>
          <span className="text-xs bg-pink-100 text-brand-pink px-3 py-1 rounded-full font-medium">Live Preview</span>
        </div>

        <div className="bg-brand-bg rounded-card p-8 border border-pink-100">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h4 className="font-heading text-2xl text-brand-text">We&apos;d love your feedback!</h4>
              <p className="text-zinc-500 text-sm mt-1">Share your experience to help others.</p>
            </div>

            <div className="space-y-5">
              {formQuestions.map((q) => (
                <div key={q.id}>
                  <label className="block text-sm font-medium text-brand-text mb-1.5">
                    {q.label}
                    {q.required && <span className="text-brand-pink ml-1">*</span>}
                  </label>
                  {q.type === "rating" ? (
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-8 h-8 text-zinc-200 hover:text-amber-400 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  ) : q.type === "textarea" ? (
                    <textarea
                      placeholder="Type your response..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-btn border border-pink-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink text-sm resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Type your response..."
                      className="w-full px-4 py-3 rounded-btn border border-pink-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink text-sm"
                    />
                  )}
                </div>
              ))}
              <button className="w-full bg-brand-pink text-white py-3 rounded-btn font-semibold text-sm hover:bg-pink-700 transition-colors mt-4">
                Submit Testimonial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Form builder */}
      <div className="bg-white rounded-card p-6 border border-pink-50 shadow-sm">
        <h3 className="font-heading text-xl mb-4">Form Builder</h3>
        <div className="space-y-3">
          {formQuestions.map((q, i) => (
            <div key={q.id} className="flex items-center gap-3 bg-brand-bg rounded-btn px-4 py-3 border border-pink-50">
              <span className="text-xs text-zinc-400 font-mono">{i + 1}</span>
              <span className="text-sm flex-1">{q.label}</span>
              <span className="text-xs bg-white text-zinc-500 px-2 py-0.5 rounded border border-pink-100">
                {q.type}
              </span>
              {q.required && (
                <span className="text-xs text-brand-pink font-medium">Required</span>
              )}
            </div>
          ))}
          <button className="w-full py-3 border-2 border-dashed border-pink-200 rounded-btn text-sm text-brand-pink font-medium hover:bg-pink-50 transition-colors">
            + Add Question
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Manage Tab ─── */
function ManageTab() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(sampleTestimonials);
  const [enhancing, setEnhancing] = useState<string | null>(null);
  const [enhancedText, setEnhancedText] = useState<Record<string, string>>({});

  const toggleApproval = (id: string) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, approved: !t.approved } : t))
    );
  };

  const enhanceTestimonial = async (id: string) => {
    const t = testimonials.find((t) => t.id === id);
    if (!t) return;

    setEnhancing(id);
    try {
      const res = await fetch("/api/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: t.text, name: t.name }),
      });
      const data = await res.json();
      if (data.enhanced) {
        setEnhancedText((prev) => ({ ...prev, [id]: data.enhanced }));
        setTestimonials((prev) =>
          prev.map((t) => (t.id === id ? { ...t, text: data.enhanced } : t))
        );
      }
    } catch {
      // silently fail
    }
    setEnhancing(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-heading text-xl">All Testimonials</h3>
          <p className="text-sm text-zinc-500">{testimonials.length} total · {testimonials.filter(t => t.approved).length} approved</p>
        </div>
        <div className="flex gap-2">
          <select className="text-sm border border-pink-200 rounded-btn px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-brand-pink/30">
            <option>All</option>
            <option>Approved</option>
            <option>Pending</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-card p-5 border border-pink-50 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink to-brand-violet flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-brand-text">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.role} · {t.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleApproval(t.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    t.approved
                      ? "bg-green-100 text-green-700 hover:bg-green-200"
                      : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                  }`}
                >
                  {t.approved ? "✓ Approved" : "Pending"}
                </button>
              </div>
            </div>

            <StarRating rating={t.rating} />

            <p className="text-sm text-zinc-600 mt-3 leading-relaxed">{t.text}</p>

            {enhancedText[t.id] && (
              <div className="mt-2 text-xs text-brand-violet bg-violet-50 rounded-btn px-3 py-1.5">
                ✨ AI Enhanced
              </div>
            )}

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-pink-50">
              <span className="text-xs text-zinc-400">{t.date}</span>
              <button
                onClick={() => enhanceTestimonial(t.id)}
                disabled={enhancing === t.id}
                className="flex items-center gap-1.5 text-xs font-medium text-brand-violet hover:text-violet-700 transition-colors disabled:opacity-50"
              >
                {enhancing === t.id ? (
                  <>
                    <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enhancing...
                  </>
                ) : (
                  <>✨ AI Enhance</>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Display Tab ─── */
function DisplayTab() {
  const [widgetStyle, setWidgetStyle] = useState<"carousel" | "grid" | "wall">("wall");
  const approved = sampleTestimonials.filter((t) => t.approved);

  const embedCode = `<!-- ProofBase Widget -->
<script src="https://proofbase.co/widget.js" 
  data-id="your-company-abc123" 
  data-style="${widgetStyle}"
  data-theme="light">
</script>`;

  return (
    <div className="space-y-8">
      {/* Style selector */}
      <div className="bg-white rounded-card p-6 border border-pink-50 shadow-sm">
        <h3 className="font-heading text-xl mb-4">Widget Style</h3>
        <div className="flex gap-3">
          {(["wall", "grid", "carousel"] as const).map((style) => (
            <button
              key={style}
              onClick={() => setWidgetStyle(style)}
              className={`px-5 py-2.5 rounded-btn text-sm font-medium transition-all ${
                widgetStyle === style
                  ? "bg-brand-pink text-white shadow-lg shadow-pink-200"
                  : "bg-pink-50 text-zinc-600 hover:bg-pink-100"
              }`}
            >
              {style === "wall" ? "🧱 Wall of Love" : style === "grid" ? "📱 Grid" : "🎠 Carousel"}
            </button>
          ))}
        </div>
      </div>

      {/* Widget preview */}
      <div className="bg-white rounded-card p-6 border border-pink-50 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-xl">Preview</h3>
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Live Preview</span>
        </div>

        <div className="bg-brand-bg rounded-card p-6 border border-pink-100 min-h-[300px]">
          {widgetStyle === "wall" && (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-3 space-y-3">
              {approved.map((t) => (
                <div key={t.id} className="break-inside-avoid bg-white rounded-card p-4 border border-pink-50 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-pink to-brand-violet flex items-center justify-center text-white text-[10px] font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-semibold">{t.name}</p>
                      <p className="text-[10px] text-zinc-400">{t.company}</p>
                    </div>
                  </div>
                  <StarRating rating={t.rating} />
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>
          )}

          {widgetStyle === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {approved.slice(0, 6).map((t) => (
                <div key={t.id} className="bg-white rounded-card p-4 border border-pink-50 shadow-sm">
                  <StarRating rating={t.rating} />
                  <p className="text-xs text-zinc-600 mt-2 line-clamp-3">{t.text}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-pink to-brand-violet flex items-center justify-center text-white text-[8px] font-bold">
                      {t.avatar}
                    </div>
                    <p className="text-[10px] font-semibold">{t.name}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {widgetStyle === "carousel" && (
            <div className="overflow-hidden">
              <div className="flex gap-4 animate-slide" style={{ width: "200%" }}>
                {[...approved, ...approved].map((t, i) => (
                  <div key={`${t.id}-${i}`} className="bg-white rounded-card p-5 border border-pink-50 shadow-sm min-w-[280px]">
                    <StarRating rating={t.rating} />
                    <p className="text-xs text-zinc-600 mt-2 line-clamp-3">{t.text}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-pink to-brand-violet flex items-center justify-center text-white text-[10px] font-bold">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="text-xs font-semibold">{t.name}</p>
                        <p className="text-[10px] text-zinc-400">{t.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Embed code */}
      <div className="bg-white rounded-card p-6 border border-pink-50 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading text-xl">Embed Code</h3>
          <button
            onClick={() => navigator.clipboard?.writeText(embedCode)}
            className="text-xs bg-brand-pink text-white px-4 py-2 rounded-btn font-medium hover:bg-pink-700 transition-colors"
          >
            Copy Code
          </button>
        </div>
        <pre className="bg-zinc-900 text-green-400 rounded-btn p-4 text-xs overflow-x-auto">
          <code>{embedCode}</code>
        </pre>
        <p className="text-xs text-zinc-400 mt-3">Paste this code into your website&apos;s HTML. Works with any platform.</p>
      </div>
    </div>
  );
}

/* ─── Main App Page ─── */
export default function AppPage() {
  const [activeTab, setActiveTab] = useState<"collect" | "manage" | "display">("collect");

  const tabs = [
    { id: "collect" as const, label: "📝 Collect", desc: "Collection forms" },
    { id: "manage" as const, label: "⭐ Manage", desc: "Review & enhance" },
    { id: "display" as const, label: "🎨 Display", desc: "Embed widgets" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="font-heading text-3xl text-brand-text">Dashboard</h1>
            <p className="text-zinc-500 mt-1">Manage your testimonials and widgets.</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 bg-white rounded-card p-1.5 border border-pink-50 shadow-sm w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-btn text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-brand-pink text-white shadow-lg shadow-pink-200"
                    : "text-zinc-600 hover:bg-pink-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "collect" && <CollectTab />}
          {activeTab === "manage" && <ManageTab />}
          {activeTab === "display" && <DisplayTab />}
        </div>
      </main>
      <Footer />
    </>
  );
}

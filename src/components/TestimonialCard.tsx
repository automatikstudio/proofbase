"use client";

import { Testimonial } from "@/lib/sample-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-amber-400" : "text-zinc-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({
  testimonial,
  variant = "default",
}: {
  testimonial: Testimonial;
  variant?: "default" | "featured" | "compact";
}) {
  if (variant === "compact") {
    return (
      <div className="testimonial-card bg-white rounded-card p-5 border border-pink-50 shadow-sm">
        <StarRating rating={testimonial.rating} />
        <p className="text-sm text-zinc-600 mt-3 line-clamp-3">{testimonial.text}</p>
        <div className="flex items-center gap-2 mt-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-pink to-brand-violet flex items-center justify-center text-white text-xs font-bold">
            {testimonial.avatar}
          </div>
          <div>
            <p className="text-xs font-semibold text-brand-text">{testimonial.name}</p>
            <p className="text-[10px] text-zinc-400">{testimonial.company}</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <div className="testimonial-card bg-white rounded-card p-8 border border-pink-100 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-50 to-transparent rounded-bl-full" />
        <svg className="w-10 h-10 text-brand-violet/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
        </svg>
        <StarRating rating={testimonial.rating} />
        <p className="text-lg text-zinc-700 mt-4 leading-relaxed">{testimonial.text}</p>
        <div className="flex items-center gap-3 mt-6">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-pink to-brand-violet flex items-center justify-center text-white font-bold text-sm">
            {testimonial.avatar}
          </div>
          <div>
            <p className="font-semibold text-brand-text">{testimonial.name}</p>
            <p className="text-sm text-zinc-500">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="testimonial-card bg-white rounded-card p-6 border border-pink-50 shadow-sm">
      <StarRating rating={testimonial.rating} />
      <p className="text-sm text-zinc-600 mt-3 leading-relaxed">{testimonial.text}</p>
      <div className="flex items-center gap-3 mt-4">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-pink to-brand-violet flex items-center justify-center text-white text-xs font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-text">{testimonial.name}</p>
          <p className="text-xs text-zinc-400">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export { StarRating };

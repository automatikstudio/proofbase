"use client";

export default function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizes = {
    small: "text-xl",
    default: "text-2xl",
    large: "text-4xl",
  };

  return (
    <span className={`font-heading ${sizes[size]} text-brand-text`}>
      Proof<span className="text-brand-pink">Base</span>
    </span>
  );
}

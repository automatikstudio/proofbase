"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#features"
            className="text-sm font-medium text-zinc-600 hover:text-brand-pink transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-zinc-600 hover:text-brand-pink transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-zinc-600 hover:text-brand-pink transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-600 hover:text-brand-pink transition-colors"
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/app"
            className="bg-brand-pink text-white px-5 py-2.5 rounded-btn text-sm font-semibold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-pink-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-3 text-zinc-500 text-sm max-w-md">
              The easiest way to collect, manage, and display customer
              testimonials. Social proof that actually converts.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <Link href="/#features" className="hover:text-brand-pink transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-brand-pink transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/app" className="hover:text-brand-pink transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <Link href="/privacy" className="hover:text-brand-pink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-pink transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-pink-50 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} ProofBase. All rights reserved.
          </p>
          <p className="text-sm text-zinc-400">
            Built by{" "}
            <a
              href="https://automatik.studio"
              className="text-brand-pink hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Automatik.studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

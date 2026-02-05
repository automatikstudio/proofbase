import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — ProofBase",
  description:
    "Tips, guides, and insights on collecting and displaying customer testimonials, social proof, and boosting website conversions.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="font-heading text-4xl md:text-5xl text-brand-text mb-4">
            Blog
          </h1>
          <p className="text-zinc-500 text-lg mb-12">
            Guides and insights on testimonials, social proof, and growing your
            business with customer trust.
          </p>

          {posts.length === 0 ? (
            <p className="text-zinc-400">No posts yet. Check back soon!</p>
          ) : (
            <div className="space-y-10">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group border-b border-zinc-100 pb-10 last:border-0"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <time className="text-xs text-zinc-400 uppercase tracking-wide">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h2 className="font-heading text-2xl text-brand-text mt-2 group-hover:text-brand-pink transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-zinc-500 mt-3 leading-relaxed">
                      {post.description}
                    </p>
                    <span className="inline-block mt-4 text-sm font-medium text-brand-pink">
                      Read more →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

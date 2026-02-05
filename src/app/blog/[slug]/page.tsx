import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — ProofBase`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      siteName: "ProofBase",
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <Link
            href="/blog"
            className="text-sm text-brand-pink hover:underline mb-8 inline-block"
          >
            ← Back to Blog
          </Link>

          <time className="block text-xs text-zinc-400 uppercase tracking-wide mt-4">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          <h1 className="font-heading text-4xl md:text-5xl text-brand-text mt-4 mb-8 leading-tight">
            {post.title}
          </h1>

          <div
            className="prose prose-zinc prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-brand-text
              prose-a:text-brand-pink prose-a:no-underline hover:prose-a:underline
              prose-strong:text-zinc-800
              prose-li:text-zinc-600
              prose-p:text-zinc-600 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />

          <div className="mt-16 p-8 bg-gradient-to-br from-pink-50 to-violet-50 rounded-2xl border border-pink-100 text-center">
            <h3 className="font-heading text-2xl text-brand-text mb-3">
              Ready to add testimonials to your site?
            </h3>
            <p className="text-zinc-500 mb-6 max-w-lg mx-auto">
              ProofBase makes it easy to collect, manage, and display beautiful
              testimonial widgets — no code required.
            </p>
            <Link
              href="/app"
              className="inline-block bg-brand-pink text-white px-8 py-3 rounded-btn text-sm font-semibold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200"
            >
              Try ProofBase Free →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

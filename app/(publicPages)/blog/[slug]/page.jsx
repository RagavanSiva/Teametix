import BlogMotion from "../BlogMotion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found" };
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.teametix.com";
  const url = `${base}/blog/${post.slug}`;
  return {
    title: `${post.title} | Teametix Blog`,
    description: post.description,
    openGraph: {
      title: `${post.title} | Teametix Blog`,
      description: post.description,
      url,
      images: post.heroImage ? [{ url: post.heroImage }] : [],
      type: "article",
    },
    alternates: { canonical: url },
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <main className="pt-24 md:pt-28 px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
      <BlogMotion>
        <div className="max-w-3xl mx-auto w-full flex flex-col">
          <Link
            href="/blog"
            className="text-sm text-indigo-600 hover:underline"
          >
            ← Back to blog
          </Link>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            {post.title}
          </h1>
          <div className="mt-2 text-xs text-slate-500">
            {post.date} • {post.author}
          </div>
          {post.heroImage && (
            <Image
              src={post.heroImage}
              alt={post.title}
              width={1200}
              height={600}
              unoptimized
              className="mt-6 w-full rounded-md object-cover"
            />
          )}
          <div className="prose prose-slate mt-6 max-w-none w-full">
            {post.content.map((para, idx) => (
              <p className="mt-4" key={idx}>
                {para}
              </p>
            ))}
          </div>
          {post.tags?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </BlogMotion>
    </main>
  );
}

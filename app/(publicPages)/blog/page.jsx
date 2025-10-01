import BlogMotion from "./BlogMotion";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";

export const metadata = {
  title: "Blog | Teametix",
  description:
    "HR best practices for Sri Lanka: payroll with EPF/ETF, attendance devices, leave policy checklists, and more.",
};

export default function BlogIndexPage() {
  return (
    <main className="pt-24 md:pt-28 px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
      <BlogMotion>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Teametix Blog
          </h1>
          <p className="mt-3 text-slate-600">
            Practical guides on payroll, attendance, and HR operations for Sri
            Lankan teams.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 max-w-6xl mx-auto items-stretch">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="h-full rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition flex flex-col"
            >
              {post.heroImage && (
                <Image
                  src={`${post.heroImage}?auto=format&fit=crop&w=800&h=800&q=75`}
                  alt={post.title}
                  width={800}
                  height={800}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-slate-600 line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  {post.date} • {post.author}
                </div>
                <div className="mt-4 ">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-indigo-600 hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </BlogMotion>
    </main>
  );
}

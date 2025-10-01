import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-24 md:pt-28 px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-medium text-indigo-600">404</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-slate-600">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
            Go to Home
          </Link>
          <Link href="/blog" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50">
            Visit Blog
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}

import { blogPosts } from "@/data/blogPosts";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://teametix.com";
  const routes = [
    "",
    "/features",
    "/pricing",
    "/docs",
    "/integrations",
    "/about",
    "/contact",
    "/blog",
  ]; // add more as needed
  const now = new Date().toISOString();
  const staticUrls = routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));
  const postUrls = (blogPosts || []).map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date || now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticUrls, ...postUrls];
}

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.teametix.com";
  const routes = [
    "",
    "/features",
    "/pricing",
    "/docs",
    "/integrations",
    "/about",
    "/contact",
  ]; // add more as needed
  const now = new Date().toISOString();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}

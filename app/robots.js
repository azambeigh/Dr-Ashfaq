export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dr-ashfaq.vercel.app/sitemap.xml",
  };
}
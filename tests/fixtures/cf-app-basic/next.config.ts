import type { NextConfig } from "vinext";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/api/browser-cache-config",
        headers: [
          { key: "Cache-Control", value: "public, max-age=300" },
          { key: "Cloudflare-CDN-Cache-Control", value: "max-age=3600" },
        ],
      },
      {
        source: "/about",
        headers: [{ key: "X-Page-Header", value: "about-page" }],
      },
      {
        source: "/pages-about",
        headers: [{ key: "Cache-Control", value: "private, no-store" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/old-about",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/repeat-redirect/:id",
        destination: "/blog/:id/:id",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [{ source: "/rewrite-about", destination: "/about" }];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "cdn-images-1.medium.com" },
      { hostname: "miro.medium.com" },
    ],
  },
};

export default nextConfig;

/**
 * @type {import('next').NextConfig}
 */

// Config setup for Github pages
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};
export default nextConfig;

// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/portfoliov2/" : "",
  basePath: "/portfoliov2",
  images: {
    unoptimized: true,
  },
};

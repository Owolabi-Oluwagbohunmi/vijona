module.exports = {
  reactStrictMode: true,
  images: {
    domains : [
      'res.cloudinary.com'
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
}

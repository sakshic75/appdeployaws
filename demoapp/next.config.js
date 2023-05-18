module.exports = {
  reactStrictMode: true,
  webpack: function (config, options) {
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

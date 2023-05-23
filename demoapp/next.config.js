module.exports = {
  env: {
    title: process.env.NEXT_PUBLIC_TITLE,
  },
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

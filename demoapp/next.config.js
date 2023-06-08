console.log(process.env);

module.exports = {
  experimental: {
    outputStandalone: true,
  },
  env: {
    title: process.env.NEXT_PUBLIC_TITLE,
    baseUrl: "http://localhost:" + process.env.PORT,
  },
  reactStrictMode: true,
  webpack: function (config, options) {
    return config;
  },
};

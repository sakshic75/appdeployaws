console.log(process.env);

module.exports = {
  env: {
    title: process.env.NEXT_PUBLIC_TITLE,
    baseUrl: "http://localhost:" + process.env.PORT,
  },
  reactStrictMode: true,
  webpack: function (config, options) {
    return config;
  }

//   },
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/products",
//         permanent: true,
//       },
//     ];
//   },
 };

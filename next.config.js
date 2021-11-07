const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = {
  reactStrictMode: true,
  // env: {
  //   BASE_URL: process.env.BASE_URL,
  // },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
});

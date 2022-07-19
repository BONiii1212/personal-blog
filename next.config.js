/** @type {import('next').NextConfig} */

const withCSS = require("@zeit/next-css");

if (typeof require !== "undefined") {
  require.extensions[".css"] = (file) => {};
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = Object.assign({},withCSS,nextConfig)

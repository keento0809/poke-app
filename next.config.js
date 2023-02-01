/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  domains: ["localhost"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**raw.githubusercontent.com",
        // port: "",
        // pathname: "PokeAPI/**",
      },
    ],
  },
};

module.exports = nextConfig;

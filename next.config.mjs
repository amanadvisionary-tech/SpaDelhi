/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "spadelhi.com" }],
        destination: "https://www.spadelhi.com/:path*",
        permanent: true,
      },
      {
        source: "/hotel-and-home-spa",
        destination: "/massage-service-in-delhi",
        permanent: true,
      },
      {
        source: "/hotel-and-home-spa/",
        destination: "/massage-service-in-delhi",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spadelhi.com',
        port: '3001',
        pathname: '/**',
      },
      // add more patterns if needed
    ],
  },
  // other config...
};



export default nextConfig;

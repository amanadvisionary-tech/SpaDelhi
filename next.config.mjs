/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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

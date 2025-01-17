/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc', // Add this line to allow images from postimg.cc
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;

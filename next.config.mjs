/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
          },
        ],
      },
      typescript: {
        ignoreBuildErrors: true,
     },
};

export default nextConfig;

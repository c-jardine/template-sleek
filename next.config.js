/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      // Redirects unpaginated author url to the first paginated result.
      {
        source: '/blog',
        destination: 'https://blog.keplux.com',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

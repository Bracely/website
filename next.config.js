module.exports = {
  reactStrictMode: true,
  turbopack: {
    // point to the actual project directory if your workspace has multiple
    // package.json/lockfiles. Removing the root lockfile also resolves the
    // warning, but you may keep this setting for clarity.
    root: __dirname,
  },
  images: {
    // `domains` is deprecated; prefer `remotePatterns` going forward.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Example for environment variables
  },
};
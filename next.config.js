/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config, { nextRuntime }) { 
      // as of Next.js latest versions, the nextRuntime is preferred over `isServer`, because of edge-runtime
      if (typeof nextRuntime === "undefined") {
        const { IgnorePlugin } = require("webpack");
        const ignoreFs = new IgnorePlugin({ resourceRegExp: /fs/ });
        config.plugins.push(ignoreFs);
      }
  
      return config;
    },
    transpilePackages: ['lucide-react'] // Needed for dynamic icons
  };

module.exports = nextConfig

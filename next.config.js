const withBundleAnalyzer = require("@next/bundle-analyzer")();

const withAnalyzer = false;
const withSW = true;

/** @type {(phase: string, defaultConfig: import("next").NextConfig) => Promise<import("next").NextConfig>} */
module.exports = async () => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
  };

  const withSerwist = (await import("@serwist/next")).default({
    cacheOnNavigation: true,
    swSrc: "service-worker.ts",
    swDest: "public/sw.js",
  });

  const appConfig = withSW ? withSerwist(nextConfig) : nextConfig;

  if (withAnalyzer) {
    return withBundleAnalyzer(appConfig);
  }

  return appConfig;
};

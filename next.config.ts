import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: '@use "styles/mixins" as *;',
    loadPaths: [process.cwd()],
  },
};

export default nextConfig;

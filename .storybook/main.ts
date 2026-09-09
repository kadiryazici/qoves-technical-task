import type { StorybookConfig } from "@storybook/nextjs-vite"

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(ts|tsx)"],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  viteFinal(config) {
    return {
      ...config,
      css: {
        ...config.css,
        preprocessorOptions: {
          ...config.css?.preprocessorOptions,
          scss: {
            additionalData: '@use "styles/mixins" as *;',
            loadPaths: [process.cwd()],
          },
        },
      },
    }
  },
}

export default config

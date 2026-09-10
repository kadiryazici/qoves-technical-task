import type { StorybookConfig } from "@storybook/nextjs-vite"

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(ts|tsx)"],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  viteFinal(config) {
    return {
      ...config,
      base: "./",
      plugins: [
        ...(config.plugins ?? []),
        {
          name: "storybook-relative-public-assets",
          enforce: "pre",
          apply: "build",
          transform(code, id) {
            if (!id.startsWith(`${process.cwd()}/components/`) || !id.endsWith(".tsx")) {
              return null
            }

            // Vite does not rebase public asset paths inside JSX or inline styles.
            return {
              code: code.replace(/(["'])\/(images|videos)\//g, "$1./$2/"),
              map: null,
            }
          },
        },
      ],
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

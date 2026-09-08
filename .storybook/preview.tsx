import type { Preview } from "@storybook/nextjs-vite"

import { fontClassName } from "../app/fonts"
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={fontClassName}>
        <Story />
      </div>
    ),
  ],
}

export default preview

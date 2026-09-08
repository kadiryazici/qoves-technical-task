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
    (Story) => {
      document.documentElement.classList.add(...fontClassName.split(" "))

      return (
        <div className="">
          <Story />
        </div>
      )
    },
  ],
}

export default preview

import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { PageMain } from "./PageMain"

const meta = {
  title: "Layout/PageMain",
  component: PageMain,
} satisfies Meta<typeof PageMain>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Page content",
  },
}

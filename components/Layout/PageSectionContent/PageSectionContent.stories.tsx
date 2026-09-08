import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { PageSectionContent } from "./PageSectionContent"

const meta = {
  title: "Layout/PageSectionContent",
  component: PageSectionContent,
  args: { children: "Dummy page section content" },
} satisfies Meta<typeof PageSectionContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

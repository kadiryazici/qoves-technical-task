import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { BrowsFallGraphic } from "./BrowsFallGraphic"

const meta = {
  title: "Components/BrowsFallGraphic",
  component: BrowsFallGraphic,
  args: { children: "Dummy brows fall graphic" },
} satisfies Meta<typeof BrowsFallGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

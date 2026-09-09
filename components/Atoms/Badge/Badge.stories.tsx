import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Badge } from "./Badge"

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  args: {
    children: "Personalized Analysis",
    type: "secondary",
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

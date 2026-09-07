import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { GlowupCard } from "./GlowupCard"

const meta = {
  title: "Components/GlowupCard",
  component: GlowupCard,
  args: {
    number: 1,
    children: "Dummy glowup card",
  },
} satisfies Meta<typeof GlowupCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

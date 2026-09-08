import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { GlowupCard } from "./GlowupCard"

const meta = {
  title: "Atoms/GlowupCard",
  component: GlowupCard,
  args: {
    style: { maxWidth: "308px", height: "fit-content" },
    number: 1,
    children: <>
      Get your expert facial
      <br />
      analysis
    </>,
  },
} satisfies Meta<typeof GlowupCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

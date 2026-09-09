import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { NumberCard } from "./NumberCard"

const meta = {
  title: "Atoms/NumberCard",
  component: NumberCard,
  args: {
    style: { maxWidth: "308px", height: "fit-content" },
    number: 1,
    children: <>
      Get your expert facial
      <br />
      analysis
    </>,
  },
} satisfies Meta<typeof NumberCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

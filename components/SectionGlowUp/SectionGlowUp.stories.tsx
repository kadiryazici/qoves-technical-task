import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { SectionGlowUp } from "./SectionGlowUp"

const meta = {
  title: "Components/SectionGlowUp",
  component: SectionGlowUp,
  args: { children: "Dummy glow up section" },
} satisfies Meta<typeof SectionGlowUp>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

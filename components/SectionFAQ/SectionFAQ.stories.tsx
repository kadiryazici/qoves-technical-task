import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { SectionFAQ } from "./SectionFAQ"

const meta = {
  title: "Components/SectionFAQ",
  component: SectionFAQ,
  args: { children: "Dummy frequently asked questions" },
} satisfies Meta<typeof SectionFAQ>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

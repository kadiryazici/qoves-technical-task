import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { SectionBlurredQuestion } from "./SectionBlurredQuestion"

const meta = {
  title: "Sections/SectionBlurredQuestion",
  component: SectionBlurredQuestion,
  args: { children: "Dummy blurred question" },
} satisfies Meta<typeof SectionBlurredQuestion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { SectionYourQuestions } from "./SectionYourQuestions"

const meta = {
  title: "Components/SectionYourQuestions",
  component: SectionYourQuestions,
  args: { children: "Dummy your questions section" },
} satisfies Meta<typeof SectionYourQuestions>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

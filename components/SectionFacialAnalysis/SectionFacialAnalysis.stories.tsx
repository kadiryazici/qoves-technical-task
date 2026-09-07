import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { SectionFacialAnalysis } from "./SectionFacialAnalysis"

const meta = {
  title: "Components/SectionFacialAnalysis",
  component: SectionFacialAnalysis,
  args: { children: "Dummy facial analysis section" },
} satisfies Meta<typeof SectionFacialAnalysis>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

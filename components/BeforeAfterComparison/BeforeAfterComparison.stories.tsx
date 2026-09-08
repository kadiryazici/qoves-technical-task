import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { BeforeAfterComparison } from "./BeforeAfterComparison"

const meta = {
  title: "Components/BeforeAfterComparison",
  component: BeforeAfterComparison,
} satisfies Meta<typeof BeforeAfterComparison>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

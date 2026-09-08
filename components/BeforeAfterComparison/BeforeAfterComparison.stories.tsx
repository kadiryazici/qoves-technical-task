import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { BeforeAfterComparison } from "./BeforeAfterComparison"

const meta = {
  title: "Components/BeforeAfterComparison",
  component: BeforeAfterComparison,
  args: {
    className: "max-w-[1328px]"
  }
} satisfies Meta<typeof BeforeAfterComparison>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

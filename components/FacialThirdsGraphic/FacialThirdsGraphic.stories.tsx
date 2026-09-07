import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { FacialThirdsGraphic } from "./FacialThirdsGraphic"

const meta = {
  title: "Components/FacialThirdsGraphic",
  component: FacialThirdsGraphic,
  args: { children: "Dummy facial thirds graphic" },
} satisfies Meta<typeof FacialThirdsGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { SymmetryGraphic } from "./SymmetryGraphic"

const meta = {
  title: "Components/SymmetryGraphic",
  component: SymmetryGraphic,
  args: { children: "Dummy symmetry graphic" },
} satisfies Meta<typeof SymmetryGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

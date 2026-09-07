import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { LipSmoothnessGraphic } from "./LipSmoothnessGraphic"

const meta = {
  title: "Components/LipSmoothnessGraphic",
  component: LipSmoothnessGraphic,
  args: { children: "Dummy lip smoothness graphic" },
} satisfies Meta<typeof LipSmoothnessGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { EyebrowDensityChart } from "./EyebrowDensityChart"

const meta = {
  title: "Graphics/EyebrowDensityChart",
  component: EyebrowDensityChart,
  args: { children: "Dummy eyebrow density chart" },
} satisfies Meta<typeof EyebrowDensityChart>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

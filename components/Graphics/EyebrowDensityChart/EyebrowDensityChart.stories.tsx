import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { EyebrowDensityChart } from "./EyebrowDensityChart"

const meta = {
  title: "Graphics/EyebrowDensityChart",
  component: EyebrowDensityChart,
  args: {},
  render() {
    return (
      <div className="bg-primary-600/70 p-10">
        <EyebrowDensityChart />
      </div>
    )
  }
} satisfies Meta<typeof EyebrowDensityChart>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

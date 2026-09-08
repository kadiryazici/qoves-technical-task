import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { LipSmoothnessGraphic } from "./LipSmoothnessGraphic"

const meta = {
  title: "Graphics/LipSmoothnessGraphic",
  component: LipSmoothnessGraphic,
  args: {},
  render() {
    return (
      <div className="bg-primary-600/70 p-10">
        <LipSmoothnessGraphic />
      </div>
    )
  }
} satisfies Meta<typeof LipSmoothnessGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

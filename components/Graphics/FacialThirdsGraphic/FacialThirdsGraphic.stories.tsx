import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { FacialThirdsGraphic } from "./FacialThirdsGraphic"

const meta = {
  title: "Graphics/FacialThirdsGraphic",
  component: FacialThirdsGraphic,
  args: {},
  render() {
    return (
      <div className="bg-primary-600/70 p-10">
        <FacialThirdsGraphic />
      </div>
    )
  }
} satisfies Meta<typeof FacialThirdsGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

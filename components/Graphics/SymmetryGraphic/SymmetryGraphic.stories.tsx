import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { SymmetryGraphic } from "./SymmetryGraphic"

const meta = {
  title: "Graphics/SymmetryGraphic",
  component: SymmetryGraphic,
  args: {},
  render() {
    return (
      <div className="bg-primary-600/70 p-10">
        <SymmetryGraphic />
      </div>
    )
  }
} satisfies Meta<typeof SymmetryGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { BrowsFallGraphic } from "./BrowsFallGraphic"

const meta = {
  title: "Graphics/BrowsFallGraphic",
  component: BrowsFallGraphic,
  args: {},
  render() {
    return (
      <div className="bg-primary-600/70 p-10">
        <BrowsFallGraphic />
      </div>
    )
  }
} satisfies Meta<typeof BrowsFallGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

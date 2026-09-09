import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { MelaninConcentrationGraphic } from "./MelaninConcentrationGraphic"

const meta = {
  title: "Graphics/MelaninConcentrationGraphic",
  component: MelaninConcentrationGraphic,
  args: {},
  render() {
    return (
      <div className="bg-primary-600/70 p-10">
        <MelaninConcentrationGraphic />
      </div>
    )
  }
} satisfies Meta<typeof MelaninConcentrationGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

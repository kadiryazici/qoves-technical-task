import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { MelaninConcentrationGraphic } from "./MelaninConcentrationGraphic"

const meta = {
  title: "Components/MelaninConcentrationGraphic",
  component: MelaninConcentrationGraphic,
  args: { children: "Dummy melanin concentration graphic" },
} satisfies Meta<typeof MelaninConcentrationGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { SectionHero } from "./SectionHero"

const meta = {
  title: "Sections/SectionHero",
  component: SectionHero,
} satisfies Meta<typeof SectionHero>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

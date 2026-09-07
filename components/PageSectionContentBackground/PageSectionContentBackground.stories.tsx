import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { PageSectionContentBackground } from "./PageSectionContentBackground"

const meta = {
  title: "Components/PageSectionContentBackground",
  component: PageSectionContentBackground,
  args: { children: "Dummy page section content background" },
} satisfies Meta<typeof PageSectionContentBackground>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

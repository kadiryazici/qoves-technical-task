import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { PageSection } from "./PageSection"

const meta = {
  title: "Components/PageSection",
  component: PageSection,
  args: { children: "Dummy page section" },
} satisfies Meta<typeof PageSection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

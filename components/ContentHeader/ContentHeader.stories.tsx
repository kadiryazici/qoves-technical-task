import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ContentHeader } from "./ContentHeader"

const meta = {
  title: "Components/ContentHeader",
  component: ContentHeader,
  args: {
    style: { maxWidth: "700px" },
    className: "text-center",
    label: "Personalized Analysis",
    type: "secondary",
    heading: <>
      Get your personalised
      {" "}
      <span className="text-text-disabled">Qoves plan</span>
    </>,
    description: "Understand your facial features and start your glow-up today with a proven action plan, no plastic surgery needed.",
  },
} satisfies Meta<typeof ContentHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

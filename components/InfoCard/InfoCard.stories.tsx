import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { InfoCard } from "./InfoCard"

const meta = {
  title: "Components/InfoCard",
  component: InfoCard,
  args: {
    children: (
      <>
        <InfoCard.Heading>Başlık</InfoCard.Heading>
        <InfoCard.Item>Dummy içerik</InfoCard.Item>
      </>
    ),
  },
} satisfies Meta<typeof InfoCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

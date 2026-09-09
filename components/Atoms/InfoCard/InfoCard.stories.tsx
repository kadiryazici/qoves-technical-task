import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { InfoCard } from "./InfoCard"

const meta = {
  title: "Atoms/InfoCard",
  component: InfoCard,
  render() {
    return (
      <div
        style={{
          padding: "48px",
          backgroundColor: "var(--color-primary-600)",
        }}
      >
        <InfoCard heading="Consider this..." style={{ width: "443px", height: "360px" }}>
          <InfoCard.Item>First impressions matter</InfoCard.Item>
          <InfoCard.Item>It has a considerable impact on interpersonal interactions</InfoCard.Item>
          <InfoCard.Item>Small improvements can drastically impact quality of life</InfoCard.Item>
        </InfoCard>
      </div>
    )
  },
} satisfies Meta<typeof InfoCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

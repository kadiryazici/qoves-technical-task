import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { GlowUpCard } from "./GlowUpCard";

const meta = {
  title: "Atoms/GlowUpCard",
  component: GlowUpCard,
  args: {
    heading: "Lifestyle Factors",
    description: "Considers diet, climate, stress, sleep, and habits.",
    image: <img src="/images/glow-up/lifestyle-factors.webp" />,
  },
  render(args) {
    return (
      <div
        style={{
          width: "453px",
          height: "262px",
          padding: "16px",
          display: "flex",
          position: "relative",
          isolation: "isolate",
          // overflow: "clip"
        }}
      >
        <div
          style={{
            backgroundImage: "url('/images/glow-up/lifestyle-factors.webp')",
            position: "absolute",
            inset: 0,
            zIndex: -1,
            filter: "blur(24px)",
            scale: 2
          }}
        />

        <GlowUpCard {...args} style={{ width: "100%", height: "100%" }} />
      </div>
    );
  },
} satisfies Meta<typeof GlowUpCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

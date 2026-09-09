import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { BeforeAfterComparison } from "./BeforeAfterComparison"
import styles from "./BeforeAfterComparison.stories.module.scss"

const meta = {
  title: "Atoms/BeforeAfterComparison",
  component: BeforeAfterComparison,
  args: {
    className: styles.root,
  }
} satisfies Meta<typeof BeforeAfterComparison>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

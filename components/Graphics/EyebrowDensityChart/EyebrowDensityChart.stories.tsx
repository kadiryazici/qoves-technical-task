import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { EyebrowDensityChart } from "./EyebrowDensityChart"
import styles from "../Graphics.stories.module.scss"

const meta = {
  title: "Graphics/EyebrowDensityChart",
  component: EyebrowDensityChart,
  args: {},
  render() {
    return (
      <div className={styles.canvas}>
        <EyebrowDensityChart />
      </div>
    )
  }
} satisfies Meta<typeof EyebrowDensityChart>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

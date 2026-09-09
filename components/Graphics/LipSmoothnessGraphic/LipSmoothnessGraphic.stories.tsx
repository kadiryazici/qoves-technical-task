import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { LipSmoothnessGraphic } from "./LipSmoothnessGraphic"
import styles from "../Graphics.stories.module.scss"

const meta = {
  title: "Graphics/LipSmoothnessGraphic",
  component: LipSmoothnessGraphic,
  args: {},
  render() {
    return (
      <div className={styles.canvas}>
        <LipSmoothnessGraphic />
      </div>
    )
  }
} satisfies Meta<typeof LipSmoothnessGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { FacialThirdsGraphic } from "./FacialThirdsGraphic"
import styles from "../Graphics.stories.module.scss"

const meta = {
  title: "Graphics/FacialThirdsGraphic",
  component: FacialThirdsGraphic,
  args: {},
  render() {
    return (
      <div className={styles.canvas}>
        <FacialThirdsGraphic />
      </div>
    )
  }
} satisfies Meta<typeof FacialThirdsGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

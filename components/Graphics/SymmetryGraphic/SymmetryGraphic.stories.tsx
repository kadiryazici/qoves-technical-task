import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { SymmetryGraphic } from "./SymmetryGraphic"
import styles from "../Graphics.stories.module.scss"

const meta = {
  title: "Graphics/SymmetryGraphic",
  component: SymmetryGraphic,
  args: {},
  render() {
    return (
      <div className={styles.canvas}>
        <SymmetryGraphic />
      </div>
    )
  }
} satisfies Meta<typeof SymmetryGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

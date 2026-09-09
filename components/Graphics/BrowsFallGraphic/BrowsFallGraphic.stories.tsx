import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { BrowsFallGraphic } from "./BrowsFallGraphic"
import styles from "../Graphics.stories.module.scss"

const meta = {
  title: "Graphics/BrowsFallGraphic",
  component: BrowsFallGraphic,
  args: {},
  render() {
    return (
      <div className={styles.canvas}>
        <BrowsFallGraphic />
      </div>
    )
  }
} satisfies Meta<typeof BrowsFallGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

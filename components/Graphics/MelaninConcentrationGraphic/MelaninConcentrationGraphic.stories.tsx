import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { MelaninConcentrationGraphic } from "./MelaninConcentrationGraphic"
import styles from "../Graphics.stories.module.scss"

const meta = {
  title: "Graphics/MelaninConcentrationGraphic",
  component: MelaninConcentrationGraphic,
  args: {},
  render() {
    return (
      <div className={styles.canvas}>
        <MelaninConcentrationGraphic />
      </div>
    )
  }
} satisfies Meta<typeof MelaninConcentrationGraphic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

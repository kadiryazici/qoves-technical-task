import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ContentHeader } from "./ContentHeader"

const meta = {
  title: "Components/ContentHeader",
  component: ContentHeader,
  args: {
    align: "left",
    label: "Etiket",
    heading: "Başlık",
    description: "Dummy açıklama",
  },
} satisfies Meta<typeof ContentHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

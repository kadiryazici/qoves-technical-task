import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Accordion } from "./Accordion"

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  args: {
    children: (
      <>
        <Accordion.Header>Başlık</Accordion.Header>
        <Accordion.Body>Dummy içerik</Accordion.Body>
      </>
    ),
  },
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

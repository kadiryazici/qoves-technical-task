import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Accordion } from "./Accordion"
import styles from "./Accordion.stories.module.scss"

const meta = {
  title: "Atoms/Accordion",
  render() {
    return (
      <Accordion.Root>
        <Accordion.Item
          heading="General Questions"
          body={
            <Accordion.Root>
              <Accordion.Item
                heading="What is Qoves?"
                body={
                  <p>
                    Qoves is the world’s best platform to improve your looks and achieve a real facial transformation without surgery. We provide you, from the comfort of your home, with a personalized facial analysis and transformation plan based on over 2,000 academic studies.
                  </p>
                }
              />
              <Accordion.Item
                heading="Who is this for?"
                body={
                  <p>
                    Qoves is the world’s best platform to improve your looks and achieve a real facial transformation without surgery. We provide you, from the comfort of your home, with a personalized facial analysis and transformation plan based on over 2,000 academic studies.
                  </p>
                }
              />
            </Accordion.Root>
          }
        />
        <Accordion.Item
          heading="Who is this for?"
          body={
            <p className={styles.body}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat ante et magna finibus dapibus. Suspendisse posuere nisl ante, a sagittis nulla posuere vel. Donec a mattis ex. Sed finibus, turpis non condimentum placerat, velit turpis commodo justo, eu imperdiet ipsum arcu ut enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ut risus mattis, interdum ante eu, imperdiet lacus. Nullam eu est ligula. Duis ac interdum erat. Suspendisse eget tristique augue. Quisque vulputate justo nec eleifend egestas. Duis maximus risus enim, eget ornare nunc suscipit eget. Donec congue mi metus, at vulputate urna sagittis id."
            </p>
          }
        />
        <Accordion.Item
          heading="What exactly will I receive?"
          body={
            <p className={styles.body}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat ante et magna finibus dapibus. Suspendisse posuere nisl ante, a sagittis nulla posuere vel. Donec a mattis ex. Sed finibus, turpis non condimentum placerat, velit turpis commodo justo, eu imperdiet ipsum arcu ut enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ut risus mattis, interdum ante eu, imperdiet lacus. Nullam eu est ligula. Duis ac interdum erat. Suspendisse eget tristique augue. Quisque vulputate justo nec eleifend egestas. Duis maximus risus enim, eget ornare nunc suscipit eget. Donec congue mi metus, at vulputate urna sagittis id."
            </p>
          }
        />
      </Accordion.Root>
    )
  }
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

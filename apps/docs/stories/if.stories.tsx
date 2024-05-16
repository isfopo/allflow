import type { Meta, StoryObj } from "@storybook/react";
import { If, Not } from "@acme/ui/if";

const meta: Meta<typeof If> = {
  component: If,
  argTypes: {
    is: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof If>;

export const Basic: Story = {
  render: (props) => (
    <If {...props}>
      <p>True</p>
    </If>
  ),
  name: "If",
  args: {
    is: true,
  },
};

export const Else: Story = {
  render: (props) => (
    <If {...props}>
      <p>True</p>
      <Not>
        <p>False</p>
      </Not>
    </If>
  ),
  name: "If",
  args: {
    is: true,
  },
  argTypes: {
    is: {
      control: { type: "boolean" },
    },
  },
};

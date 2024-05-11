import type { Meta, StoryObj } from "@storybook/react";
import If from "@acme/ui/if";

const meta: Meta<typeof If> = {
  component: If,
  argTypes: {
    is: {
      control: { type: "boolean" },
    },
    el: {
      control: { disabled: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof If>;

export const Primary: Story = {
  render: (props) => (
    <If {...props}>
      <p>True</p>
    </If>
  ),
  name: "If",
  args: {
    is: true,
    el: <p>False</p>,
  },
  argTypes: { el: { control: { disable: true } } },
};

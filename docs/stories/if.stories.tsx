import type { Meta, StoryObj } from "@storybook/react";
import { If, Not } from "allflow/if";

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

export const WithNot: Story = {
  render: (props) => (
    <If {...props}>
      <p>True</p>
      <Not>
        <p>False</p>
      </Not>
    </If>
  ),
  args: {
    is: true,
  },
  argTypes: {
    is: {
      control: { type: "boolean" },
    },
  },
};

export const WithOverride: Story = {
  render: (props) => (
    <If {...props}>
      <p>True</p>
      <Not>
        <p>False</p>
      </Not>
    </If>
  ),
  args: {
    is: true,
    override: true,
    useOverride: true,
  },
  argTypes: {
    is: {
      control: { type: "boolean" },
    },
    override: {
      control: { type: "boolean" },
    },
    useOverride: {
      control: { type: "boolean" },
    },
  },
};

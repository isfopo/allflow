import type { Meta, StoryObj } from "@storybook/react";
import { Each } from "allflow/each";
import "../styles/global.css";

const meta: Meta<typeof Each> = {
  component: Each,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Each>;

export const Primary: Story = {
  render: () => (
    <Each<string> of={["one", "two", "three"]}>{(item) => <p>{item}</p>}</Each>
  ),
};

export const WithFilter: Story = {
  render: (props) => (
    <Each<string> {...props} of={["one", "two", "three"]}>
      {(item) => <p>{item}</p>}
    </Each>
  ),
  args: {
    filter: (item) => item !== "two",
  },
};

export const WithSeparator: Story = {
  render: (props) => (
    <Each<string> {...props} of={["one", "two", "three"]}>
      {(item) => <p>{item}</p>}
    </Each>
  ),
  args: {
    divider: <hr />,
  },
};

export const Breadcrumbs: Story = {
  render: (props) => (
    <div className="breadcrumbs">
      <Each<string> {...props} of={["Home", "Shop", "Checkout"]}>
        {(item) => <p>{item}</p>}
      </Each>
    </div>
  ),
  args: {
    divider: ">",
  },
};

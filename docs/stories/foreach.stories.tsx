import type { Meta, StoryObj } from "@storybook/react";
import { ForEach } from "@allflow/ui/foreach";
import "../styles/global.css";

const meta: Meta<typeof ForEach> = {
  component: ForEach,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ForEach>;

export const Primary: Story = {
  render: () => (
    <ForEach<string> of={["one", "two", "three"]}>
      {(item) => <p>{item}</p>}
    </ForEach>
  ),
};

export const WithFilter: Story = {
  render: (props) => (
    <ForEach<string> {...props} of={["one", "two", "three"]}>
      {(item) => <p>{item}</p>}
    </ForEach>
  ),
  args: {
    filter: (item) => item !== "two",
  },
};

export const WithSeparator: Story = {
  render: (props) => (
    <ForEach<string> {...props} of={["one", "two", "three"]}>
      {(item) => <p>{item}</p>}
    </ForEach>
  ),
  args: {
    divider: <hr />,
  },
};

export const Breadcrumbs: Story = {
  render: (props) => (
    <div className="breadcrumbs">
      <ForEach<string> {...props} of={["Home", "Shop", "Checkout"]}>
        {(item) => <p>{item}</p>}
      </ForEach>
    </div>
  ),
  args: {
    divider: ">",
  },
};

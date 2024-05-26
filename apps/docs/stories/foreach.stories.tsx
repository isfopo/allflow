import type { Meta, StoryObj } from "@storybook/react";
import { ForEach } from "@acme/ui/foreach";
import "../styles/global.css";

const meta: Meta<typeof ForEach> = {
  component: ForEach,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ForEach>;

export const Primary: Story = {
  render: () => (
    <ForEach<string>
      element={(item) => <p>{item}</p>}
      of={["one", "two", "three"]}
    />
  ),
};

export const WithFilter: Story = {
  render: (props) => (
    <ForEach<string>
      {...props}
      element={(item) => <p>{item}</p>}
      of={["one", "two", "three"]}
    />
  ),
  args: {
    filter: (item) => item !== "two",
  },
};

export const WithSeparator: Story = {
  render: (props) => (
    <ForEach<string>
      {...props}
      element={(item) => <p>{item}</p>}
      of={["one", "two", "three"]}
    />
  ),
  args: {
    separator: <hr />,
  },
};

export const Breadcrumbs: Story = {
  render: (props) => (
    <div className="breadcrumbs">
      <ForEach<string>
        {...props}
        element={(item) => <p>{item}</p>}
        of={["Home", "Shop", "Checkout"]}
      />
    </div>
  ),
  args: {
    separator: <p>{">"}</p>,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Map } from "@acme/ui/map";
import "../styles/global.css";

const meta: Meta<typeof Map> = {
  component: Map,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Map>;

export const Primary: Story = {
  render: () => (
    <Map<string>
      element={(item) => <p>{item}</p>}
      items={["one", "two", "three"]}
    />
  ),
};

export const WithFilter: Story = {
  render: (props) => (
    <Map<string>
      {...props}
      element={(item) => <p>{item}</p>}
      items={["one", "two", "three"]}
    />
  ),
  args: {
    filter: (item) => item !== "two",
  },
};

export const WithSeparator: Story = {
  render: (props) => (
    <Map<string>
      {...props}
      element={(item) => <p>{item}</p>}
      items={["one", "two", "three"]}
    />
  ),
  args: {
    separator: <hr />,
  },
};

export const Breadcrumbs: Story = {
  render: (props) => (
    <Map<string>
      {...props}
      className="map"
      element={(item) => <p>{item}</p>}
      items={["Home", "Shop", "Checkout"]}
    />
  ),
  args: {
    separator: ">",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Map } from "@acme/ui/map";

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
  name: "Map",
};

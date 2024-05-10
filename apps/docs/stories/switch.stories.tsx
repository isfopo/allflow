import type { Meta, StoryObj } from "@storybook/react";
import { Switch, Case } from "@acme/ui/switch";

const meta: Meta<typeof Switch<"one" | "two" | "three">> = {
  component: Switch,
  argTypes: {
    test: {
      control: "radio",
      options: ["one", "two", "three", null],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  render: (props) => (
    <Switch {...props} fallback={<p>Default</p>}>
      <Case value={"one"}>
        <p>One</p>
      </Case>
      <Case value={"two"}>
        <p>Two</p>
      </Case>
      <Case value={"three"}>
        <p>Three</p>
      </Case>
    </Switch>
  ),
  name: "Switch",
};

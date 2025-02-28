import type { Meta, StoryObj } from "@storybook/react";
import { Switch, Case } from "allflow/switch";

const meta: Meta<typeof Switch<"one" | "two" | "three">> = {
  component: Switch,
  argTypes: {
    test: {
      description: "The value to test against",
      control: "radio",
      options: ["one", "two", "three"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  render: (props) => (
    <Switch {...props} fallback={<p>Default</p>}>
      <Case value="one">
        <p>One</p>
      </Case>
      <Case value="two">
        <p>Two</p>
      </Case>
      <Case value="three">
        <p>Three</p>
      </Case>
    </Switch>
  ),
  name: "Switch",
};

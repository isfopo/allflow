import { resolve, dirname } from "path";

const config = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-vite",
  core: {},
  docs: {
    autodocs: true,
  },
};

export default config;

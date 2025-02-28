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

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: { "process.env": {} },
      // resolve: {
      //   alias: [
      //     {
      //       find: "ui",
      //       replacement: resolve(dirname(), "../../../packages/"),
      //     },
      //   ],
      // },
    };
  },

  docs: {
    autodocs: true,
  },
};

export default config;

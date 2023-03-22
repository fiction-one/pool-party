const path = require("path");
const { mergeConfig } = require("vite");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react-vite",
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "@f1/ui-core",
            replacement: path.resolve(__dirname, "../../../packages/ui-core/"),
          },
          {
            find: "@f1/ui-layers",
            replacement: path.resolve(
              __dirname,
              "../../../packages/ui-layers/"
            ),
          },
          {
            find: "@f1/ui-theme",
            replacement: path.resolve(__dirname, "../../../packages/ui-theme/"),
          },
        ],
      },
    });
  },
};

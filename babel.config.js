// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

module.exports = {
  presets: ["next/babel"],
  plugins: [["styled-components", { "ssr": true }]]
};

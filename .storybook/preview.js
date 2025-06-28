import 'glass-ui-vue/styles'; // or the path to your main CSS

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'glass',
      values: [
        { name: 'glass', value: '#f4f7fa' },
        { name: 'dark', value: '#222831' },
        { name: 'white', value: '#ffffff' }
      ],
    },
  },
};

export default preview;

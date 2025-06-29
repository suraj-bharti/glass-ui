import 'glass-ui-vue/styles';

export const decorators = [
  (story, context) => {
    // Get the selected background value
    const bg = '#f1ffcc4a';
    return {
      components: { story },
      template: `<div :style="{ background: '${bg}', width: '100%' }"><story /></div>`,
    };
  },
];

const preview = {
  parameters: {
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

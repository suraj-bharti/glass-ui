import 'glass-ui-vue/styles';
import Toaster from '../src/components/UI/Toaster.vue';

export const decorators = [
  (story, context) => ({
    components: { story, Toaster },
    setup(_, { attrs }) {
      // Register Toaster globally if needed here
      return { attrs };
    },
    template: '<story v-bind="attrs" /><Toaster />',
  }),
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

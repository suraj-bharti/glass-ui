import Panel from '../components/UI/Panel.vue';
import '../assets/scss/main.scss';

export default {
  title: 'Components/Panel',
  component: Panel,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A customizable panel component supporting variants, padding, and disabled state for accessibility.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'primary', 'danger', 'warning'],
      description: 'Background variant of the panel.',
    },
    padding: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2x', '3x', ''],
      description: 'Padding size for the panel.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the panel and applies a disabled style.',
    },
    default: {
      control: { type: 'text' },
      description: 'Panel content (slot).',
      table: { category: 'slots' },
    },
  },
};

const Template = (args) => ({
  components: { Panel },
  setup() {
    return { args };
  },
  template: `<Panel v-bind="args">{{ args.default }}</Panel>`,
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  padding: 'md',
  disabled: false,
  default: 'Panel Content',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  padding: 'lg',
  disabled: false,
  default: 'Success Panel',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'danger',
  padding: 'md',
  disabled: true,
  default: 'Disabled Panel',
};
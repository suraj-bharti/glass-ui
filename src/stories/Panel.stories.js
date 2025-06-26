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
  template: `<Panel v-bind="args"><span v-html="args.default" /></Panel>`,
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  padding: '4x',
  disabled: false,
  default: `
    <h3>Welcome to GlassUI Panel</h3>
    <p>
      This panel demonstrates the glassmorphism effect.<br>
      You can use it to group content, highlight information, or create beautiful layouts.
    </p>
    <ul>
      <li>Customizable background variants</li>
      <li>Adjustable padding</li>
      <li>Accessible and responsive</li>
    </ul>
  `,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  padding: '4x',
  disabled: false,
  default: 'Success Panel',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'danger',
  padding: '4x',
  disabled: true,
  default: 'Disabled Panel',
};
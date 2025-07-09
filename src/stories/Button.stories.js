import Button from '../components/UI/Button.vue';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A customizable glass-style button component supporting multiple variants, loading state, icon, block/full-width, autofocus, disabled state, and different button types.

**Preview:**  
Use the controls below to change the button's variant, type, loading, icon, block, autofocus, disabled state, and label. The preview updates in real time to show how the button will look and behave with your selected options.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'Visual style of the button.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the button.',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Shows a loading spinner and disables the button.',
    },
    icon: {
      control: { type: 'text' },
      description: 'Name of icon component (must be globally registered or imported in preview).',
      table: { category: 'props' },
    },
    block: {
      control: { type: 'boolean' },
      description: 'Makes the button take the full width of its container.',
    },
    autofocus: {
      control: { type: 'boolean' },
      description: 'Autofocus the button on mount.',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Button type attribute.',
    },
    // Slot content
    default: {
      control: { type: 'text' },
      description: 'Button label (slot content).',
      table: { category: 'slots' },
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    // If icon is an emoji, pass as string; if you want to support components, add logic here.
    return { args };
  },
  template: `<Button v-bind="args">{{ args.default }}</Button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
  loading: false,
  icon: '',
  block: false,
  autofocus: false,
  type: 'button',
  default: 'Primary',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'primary',
  icon: '✔️', // Emoji icon
  default: 'With Icon',
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  loading: true,
  default: 'Loading...',
};

export const Block = Template.bind({});
Block.args = {
  ...Primary.args,
  block: true,
  default: 'Block Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
  default: 'Disabled',
};

export const Success = Template.bind({});
Success.args = {
  ...Primary.args,
  variant: 'success',
  default: 'Success',
};
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
A customizable glass-style button component supporting multiple variants, disabled state, and different button types.

**Preview:**  
Use the controls below to change the button's variant, type, disabled state, and label. The preview updates in real time to show how the button will look and behave with your selected options.
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
    return { args };
  },
  template: `<Button v-bind="args">{{ args.default }}</Button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
  type: 'button',
  default: 'Primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  type: 'button',
  default: 'Disabled',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  disabled: false,
  type: 'button',
  default: 'Success',
};
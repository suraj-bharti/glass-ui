import Alert from '../components/UI/Alert.vue';

export default {
    title: 'Components/Alert',
    component: Alert,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
A glass-style alert component for displaying important messages, supporting info, success, warning, and danger variants.

**Preview:**  
Use the controls to change the alert variant, message, make it dismissible, and set an optional timeout for auto-dismiss.
                `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'],
            description: 'Alert style variant.',
        },
        title: {
            control: { type: 'text' },
            description: 'Alert title (bold headline).',
        },
        description: {
            control: { type: 'text' },
            description: 'Alert description (secondary text).',
        },
        icon: {
            control: { type: 'text' },
            description: 'Icon (emoji or component name).',
        },
        dismissible: {
            control: { type: 'boolean' },
            description: 'Show a dismiss (close) button.',
        },
        timeout: {
            control: { type: 'number' },
            description: 'Auto-dismiss after this many milliseconds (e.g., 3000 for 3s). Set to 0 or null to disable.',
        },
        default: {
            control: { type: 'text' },
            description: 'Slot content (used only if title and description are empty).',
            table: { category: 'slots' },
        },
    },
};

const Template = (args) => ({
    components: { Alert },
    setup() {
        return { args };
    },
    template: `<Alert v-bind="args">{{ args.default }}</Alert>`,
});

export const Default = Template.bind({});
Default.args = {
    variant: 'primary',
    title: 'Primary Alert',
    description: 'This is a primary alert.',
    dismissible: false,
    timeout: null,
    icon: '',
    default: '',
};

export const Info = Template.bind({});
Info.args = {
    variant: 'info',
    title: 'Info Alert',
    description: 'This is an info alert.',
    dismissible: false,
    timeout: null,
    icon: 'ℹ️',
    default: '',
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    title: 'Success!',
    description: 'Operation successful!',
    dismissible: true,
    timeout: null,
    icon: '✔️',
    default: '',
};

export const Warning = Template.bind({});
Warning.args = {
    variant: 'warning',
    title: 'Warning',
    description: 'Please check your input.',
    dismissible: true,
    timeout: 4000,
    icon: '⚠️',
    default: '',
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
    title: 'Error',
    description: 'Something went wrong.',
    dismissible: true,
    timeout: 3000,
    icon: '⛔',
    default: '',
};

export const Light = Template.bind({});
Light.args = {
    variant: 'light',
    title: 'Light Alert',
    description: 'This is a light alert.',
    dismissible: false,
    timeout: null,
    icon: '',
    default: '',
};

export const Dark = Template.bind({});
Dark.args = {
    variant: 'dark',
    title: 'Dark Alert',
    description: 'This is a dark alert.',
    dismissible: false,
    timeout: null,
    icon: '',
    default: '',
};
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
            options: ['info', 'success', 'warning', 'danger', 'light', 'dark'], // Remove duplicate 'info'
            description: 'Alert style variant.',
        },
        default: {
            control: { type: 'text' },
            description: 'Alert message (slot content).',
            table: { category: 'slots' },
        },
        dismissible: {
            control: { type: 'boolean' },
            description: 'Show a dismiss (close) button.',
        },
        timeout: {
            control: { type: 'number' },
            description: 'Auto-dismiss after this many milliseconds (e.g., 3000 for 3s). Set to 0 or null to disable.',
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
    default: 'This is an primary alert.',
    dismissible: false,
    timeout: null,
};

export const Info = Template.bind({});
Info.args = {
    variant: 'info',
    default: 'This is an info alert.',
    dismissible: false,
    timeout: null,
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    default: 'Operation successful!',
    dismissible: true,
    timeout: null,
};

export const Warning = Template.bind({});
Warning.args = {
    variant: 'warning',
    default: 'Warning: Please check your input.',
    dismissible: true,
    timeout: 4000,
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
    default: 'Error: Something went wrong.',
    dismissible: true,
    timeout: 3000,
};

// Add Light variant story if supported
export const Light = Template.bind({});
Light.args = {
    variant: 'light',
    default: 'This is a light alert.',
    dismissible: false,
    timeout: null,
};

// Add Dark variant story if supported
export const Dark = Template.bind({});
Dark.args = {
    variant: 'dark',
    default: 'This is a dark alert.',
    dismissible: false,
    timeout: null,
};
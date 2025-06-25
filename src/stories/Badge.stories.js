import Badge from '../components/UI/Badge.vue';

export default {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
A glass-style badge component for status or labeling, supporting multiple variants.

**Preview:**  
Use the controls to change the badge variant and label.
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            description: 'Visual style of the badge.',
        },
        default: {
            control: { type: 'text' },
            description: 'Badge label (slot content).',
            table: { category: 'slots' },
        },
    },
};

const Template = (args) => ({
    components: { Badge },
    setup() {
        return { args };
    },
    template: `<Badge v-bind="args">{{ args.default }}</Badge>`,
});

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    default: 'Primary',
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    default: 'Success',
};
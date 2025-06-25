import Textarea from '../components/UI/Textarea.vue';

export default {
    title: 'Components/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
A glass-style textarea component supporting placeholder, disabled state, row count, and dynamic border properties.

**Preview:**  
Use the controls to change the placeholder, disabled state, number of rows, border type, border color, border width, and border radius. Type in the textarea to see two-way binding in action.
        `,
            },
        },
    },
    argTypes: {
        modelValue: {
            control: { type: 'text' },
            description: 'Textarea value (v-model).',
        },
        placeholder: {
            control: { type: 'text' },
            description: 'Placeholder text.',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Disables the textarea.',
        },
        rows: {
            control: { type: 'number' },
            description: 'Number of visible text lines.',
        },
        borderType: {
            control: { type: 'select' },
            options: ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'],
            description: 'Border style type.',
        },
        borderColor: {
            control: { type: 'text' },
            description: 'CSS border-color property (e.g., "grey").',
        },
        borderWidth: {
            control: { type: 'text' },
            description: 'CSS border-width property (e.g., "2px").',
        },
        borderRadius: {
            control: { type: 'text' },
            description: 'CSS border-radius property (e.g., "8px").',
        },
    },
};

const Template = (args) => ({
    components: { Textarea },
    setup() {
        return { args };
    },
    template: `<Textarea v-bind="args" v-model="args.modelValue" />`,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: '',
    placeholder: 'Enter your message...',
    disabled: false,
    rows: 3,
    borderType: 'solid',
    borderColor: 'primary',
    borderWidth: '1px',
    borderRadius: '',
};

export const WithCustomBorder = Template.bind({});
WithCustomBorder.args = {
    modelValue: '',
    placeholder: 'With custom border',
    disabled: false,
    rows: 4,
    borderType: 'dashed',
    borderColor: 'grey',
    borderWidth: '2px',
    borderRadius: '12px',
};

export const Disabled = Template.bind({});
Disabled.args = {
    modelValue: '',
    placeholder: 'Disabled textarea',
    disabled: true,
    rows: 3,
    borderType: 'solid',
    borderColor: 'grey',
    borderWidth: '1px',
    borderRadius: '',
};
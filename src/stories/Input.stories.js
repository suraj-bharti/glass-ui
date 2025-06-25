import Input from '../components/UI/Input.vue';

export default {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
A glass-style input component supporting different types, placeholder, disabled state, and dynamic border properties.

**Preview:**  
Use the controls to change the input type, placeholder, disabled state, border type, border color, border width, and border radius. Type in the input to see two-way binding in action and adjust the border appearance dynamically.
                `,
            },
        },
    },
    argTypes: {
        modelValue: {
            control: { type: 'text' },
            description: 'Input value (v-model).',
        },
        type: {
            control: { type: 'select' },
            options: ['text', 'password', 'email', 'number'],
            description: 'Input type.',
        },
        placeholder: {
            control: { type: 'text' },
            description: 'Placeholder text.',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Disables the input.',
        },
        borderType: {
            control: { type: 'select' },
            options: ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'],
            description: 'Border style type.',
        },
        borderColor: {
            control: { type: 'text' },
            description: 'CSS border-color property (e.g., "blue").',
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
    components: { Input },
    setup() {
        return { args };
    },
    template: `<Input v-bind="args" v-model="args.modelValue" />`,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: '',
    type: 'text',
    placeholder: 'Enter text...',
    disabled: false,
    borderType: 'solid',
    borderColor: 'grey',
    borderWidth: '1px',
    borderRadius: '',
};

export const WithCustomBorder = Template.bind({});
WithCustomBorder.args = {
    modelValue: '',
    type: 'text',
    placeholder: 'With custom border',
    disabled: false,
    borderType: 'dashed',
    borderColor: 'grey',
    borderWidth: '1px',
    borderRadius: '12px',
};

export const Disabled = Template.bind({});
Disabled.args = {
    modelValue: '',
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
    borderType: 'solid',
    borderColor: 'blue',
    borderWidth: '1px',
    borderRadius: '',
};
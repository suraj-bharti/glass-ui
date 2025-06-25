import Avatar from '../components/UI/Avatar.vue';

export default {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
A glass-style avatar component for displaying user or entity images, supporting size and shape options.

**Preview:**  
Use the controls to change the image source, size, and shape.
        `,
            },
        },
    },
    argTypes: {
        src: {
            control: { type: 'text' },
            description: 'Image source URL.',
        },
        alt: {
            control: { type: 'text' },
            description: 'Alternative text for the image.',
        },
        size: {
            control: { type: 'number' },
            description: 'Avatar size in pixels.',
        },
        shape: {
            control: { type: 'select' },
            options: ['circle', 'rounded'],
            description: 'Avatar shape.',
        },
    },
};

const Template = (args) => ({
    components: { Avatar },
    setup() {
        return { args };
    },
    template: `<Avatar v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    alt: 'User avatar',
    size: 48,
    shape: 'circle',
};

export const Rounded = Template.bind({});
Rounded.args = {
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'User avatar',
    size: 64,
    shape: 'rounded',
};
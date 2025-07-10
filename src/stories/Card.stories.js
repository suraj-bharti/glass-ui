import Card from '../components/UI/Card.vue';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        title: {
            control: { type: 'text' },
            description: 'Card title text (optional, shown in header if provided).',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            description: 'Visual style of the card.',
        },
        width: {
            control: { type: 'text' },
            description: 'CSS width of the card (e.g. "350px", "100%").',
        },
        height: {
            control: { type: 'text' },
            description: 'CSS height of the card (e.g. "200px", "auto").',
        },
        hoverable: {
            control: { type: 'boolean' },
            description: 'Adds a hover effect to the card.',
        },
        shadow: {
            control: { type: 'boolean' },
            description: 'Show card shadow.',
        },
        // Slots
        default: {
            control: { type: 'text' },
            description: 'Card body content (slot).',
            table: { category: 'slots' },
        },
        header: {
            control: { type: 'text' },
            description: 'Custom header slot content.',
            table: { category: 'slots' },
        },
        footer: {
            control: { type: 'text' },
            description: 'Custom footer slot content.',
            table: { category: 'slots' },
        },
    },
};

const Template = (args) => ({
    components: { Card },
    setup() {
        return { args };
    },
    template: `
    <Card v-bind="args">
      <template v-if="args.header" #header>{{ args.header }}</template>
      <template v-if="args.default" #default>{{ args.default }}</template>
      <template v-if="args.footer" #footer>{{ args.footer }}</template>
    </Card>
  `,
});

export const Default = Template.bind({});
Default.args = {
    title: 'Glass Card',
    variant: 'default',
    width: '350px',
    height: 'auto',
    hoverable: true,
    shadow: true,
    default: 'This is a beautiful glassmorphic card. You can put any content here.',
    header: '',
    footer: '',
};

export const WithHeaderAndFooter = Template.bind({});
WithHeaderAndFooter.args = {
    ...Default.args,
    header: 'Custom Header',
    footer: 'Custom Footer',
    default: 'Card with custom header and footer slots.',
};

export const Primary = Template.bind({});
Primary.args = {
    ...Default.args,
    variant: 'primary',
    title: 'Primary Card',
};

export const NoShadow = Template.bind({});
NoShadow.args = {
    ...Default.args,
    shadow: false,
    title: 'No Shadow Card',
};
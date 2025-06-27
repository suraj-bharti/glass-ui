import Grid from '../components/UI/Grid.vue';

export default {
    title: 'Components/Grid',
    component: Grid,
    argTypes: {
        cols: {
            control: { type: 'number', min: 1, max: 12 },
            defaultValue: 3,
            description: 'Number of columns (1-12)',
        },
        gap: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            defaultValue: 'md',
            description: 'Gap between grid items',
        },
        align: {
            control: { type: 'select' },
            options: ['', 'start', 'center', 'end', 'stretch'],
            defaultValue: '',
            description: 'Vertical alignment',
        },
        justify: {
            control: { type: 'select' },
            options: ['', 'start', 'center', 'end', 'between', 'around', 'evenly'],
            defaultValue: '',
            description: 'Horizontal alignment',
        },
        wrap: {
            control: { type: 'boolean' },
            defaultValue: false,
            description: 'Enable wrapping',
        },
    },
};

const Template = (args) => ({
    components: { Grid },
    setup() {
        return { args };
    },
    template: `
    <Grid v-bind="args" style="background: var(--default-bg); padding: 1em;">
      <div style="background: var(--primary-bg); color: var(--primary-text); padding: 1em; border-radius: 8px;">Item 1</div>
      <div style="background: var(--success-bg); color: var(--success-text); padding: 1em; border-radius: 8px;">Item 2</div>
      <div style="background: var(--danger-bg); color: var(--danger-text); padding: 1em; border-radius: 8px;">Item 3</div>
      <div style="background: var(--info-bg); color: var(--info-text); padding: 1em; border-radius: 8px;">Item 4</div>
    </Grid>
  `,
});

export const Default = Template.bind({});
Default.args = {
    cols: 3,
    gap: 'md',
    align: '',
    justify: '',
    wrap: false,
};
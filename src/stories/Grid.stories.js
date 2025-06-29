import Grid from '../components/UI/Grid.vue';

export default {
    title: 'Components/Grid',
    component: Grid,
    tags: ['autodocs'],
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
            description: 'Vertical alignment (align-items)',
        },
        justify: {
            control: { type: 'select' },
            options: ['', 'start', 'center', 'end', 'between', 'around', 'evenly'],
            defaultValue: '',
            description: 'Horizontal alignment (justify-items/justify-content)',
        },
        wrap: {
            control: { type: 'boolean' },
            defaultValue: false,
            description: 'Enable wrapping (for flex layouts only, ignored for grid)',
        },
    },
    parameters: {
        docs: {
            description: {
                component: `
**Grid Component Preview**

- \`cols\`: Number of columns (1-12)
- \`gap\`: Gap between grid items (\`xs\`, \`sm\`, \`md\`, \`lg\`, \`xl\`)
- \`align\`: Vertical alignment (\`start\`, \`center\`, \`end\`, \`stretch\`)
- \`justify\`: Horizontal alignment (\`start\`, \`center\`, \`end\`, \`between\`, \`around\`, \`evenly\`)
- \`wrap\`: Enable wrapping (for flex layouts only, ignored for grid)

Try different options using the controls below to see how the grid responds.
        `
            }
        }
    }
};

const Template = (args) => ({
    components: { Grid },
    setup() {
        return { args };
    },
    template: `
    <Grid v-bind="args" style="background: var(--default-bg); padding: 1em; height: 200px">
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
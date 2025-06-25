import Stack from '../components/UI/Stack.vue';

export default {
  title: 'Components/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Stack** is a flexible layout component for arranging children in a row or column with optional spacing, alignment, and justification.

- \`direction\`: Controls the layout direction (\`column\` for vertical, \`row\` for horizontal).
- \`gap\`: Sets the space between child elements (accepts CSS values like \`8px\`, \`1rem\`, or a number for pixels).
- \`padding\`: Applies padding to the stack container using your design tokens.
- \`align\`: Aligns items vertically (for row) or horizontally (for column).
- \`justify\`: Justifies items along the main axis.

**Preview:**  
Use the controls to change direction, gap, padding, alignment, and justification to see how Stack arranges its children.
        `,
      },
    },
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['column', 'row'],
      description: 'Stack direction (vertical or horizontal).',
    },
    gap: {
      control: { type: 'text' },
      description: 'Gap between items (e.g., "8px", "1rem", or number for px).',
    },
    padding: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2x', '3x', ''],
      description: 'Padding size for the stack.',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'baseline', ''],
      description: 'Alignment of items in the stack.',
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly', ''],
      description: 'Justification of items in the stack.',
    },
  },
};

const Template = (args) => ({
  components: { Stack },
  setup() {
    return { args };
  },
  template: `
    <Stack v-bind="args">
      <div style="background:#eee;padding:8px;">Item 1</div>
      <div style="background:#ddd;padding:8px;">Item 2</div>
      <div style="background:#ccc;padding:8px;">Item 3</div>
    </Stack>
  `,
});

export const Default = Template.bind({});
Default.args = {
  align: '',
  justify: '',
  direction: 'column',
  gap: '',
  padding: '',
};

export const RowWithGap = Template.bind({});
RowWithGap.args = {
  align: 'center',
  justify: 'between',
  direction: 'row',
  gap: '16px',
  padding: 'md',
};

export const CenteredColumn = Template.bind({});
CenteredColumn.args = {
  align: 'center',
  justify: 'center',
  direction: 'column',
  gap: '12px',
  padding: 'lg',
};

import Modal from '../components/UI/Modal.vue';
import toast from '@/plugins/toaster';
import { ref } from 'vue';

export default {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        modelValue: {
            control: { type: 'boolean' },
            defaultValue: false,
            description: 'Show or hide the modal'
        },
        confirmText: {
            control: { type: 'text' },
            defaultValue: 'Confirm',
            description: 'Text for the confirm button'
        },
        cancelText: {
            control: { type: 'text' },
            defaultValue: 'Cancel',
            description: 'Text for the cancel button'
        }
    },
    parameters: {
        docs: {
            description: {
                component: `
**Modal Component**

A glassmorphic modal dialog. Use \`v-model\` or \`:modelValue\` to control visibility.
`
            }
        }
    }
};

const Template = (args) => ({
    components: { Modal },
    setup() {
        const show = ref(args.modelValue);
        function open() { show.value = true; }
        function close() { show.value = false; }
        function onConfirm() {
            toast.emit('show', { message: 'Confirmed!', variant: 'success', duration: 3000 });
            close();
        }
        function onCancel() {
            toast.emit('show', { message: 'Cancelled!', variant: 'danger', duration: 3000 });
            close();
        }
        return { args, show, open, close, onConfirm, onCancel };
    },
    template: `
    <div>
      <button @click="open" style="padding: 0.5em 1.5em; border-radius: 8px; background: #fff3; border: none; cursor: pointer;">
        Open Modal
      </button>
      <Modal
        v-model="show"
        :confirmText="args.confirmText"
        :cancelText="args.cancelText"
        @confirm="onConfirm"
        @cancel="onCancel"
      >
        <h2 style="margin-top:0;">Glass UI Modal</h2>
        <p>This is a beautiful glassmorphic modal dialog. You can put any content here.</p>
      </Modal>
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {
    modelValue: false,
    confirmText: 'Confirm',
    cancelText: 'Cancel'
};
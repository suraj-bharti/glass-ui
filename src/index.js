import './assets/scss/main.scss';
import Panel from "./components/UI/Panel.vue";
import Stack from "./components/UI/Stack.vue";
import Button from './components/UI/Button.vue';
import Alert from './components/UI/Alert.vue';
import Avatar from './components/UI/Avatar.vue';
import Badge from './components/UI/Badge.vue';
import Input from './components/UI/Input.vue';
import Textarea from './components/UI/Textarea.vue';
import Grid from './components/UI/Grid.vue';
import Toaster from './components/UI/Toaster.vue';

export {
  Panel,
  Stack,
  Button,
  Alert,
  Avatar,
  Badge,
  Input,
  Textarea,
  Grid,
  Toaster
};

const GlassUI = {
  install(app) {
    app.component('g-panel', Panel);
    app.component('g-stack', Stack);
    app.component('g-button', Button);
    app.component('g-alert', Alert);
    app.component('g-avatar', Avatar);
    app.component('g-badge', Badge);
    app.component('g-input', Input);
    app.component('g-textarea', Textarea);
    app.component('g-grid', Grid);
    app.component('g-toaster', Toaster);
  },
};
export default GlassUI;
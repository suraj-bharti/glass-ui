import './assets/scss/main.scss'
import Panel from "./components/UI/Panel.vue";
import Stack from "./components/UI/Stack.vue";
import Button from './components/UI/Button.vue';

export {
  Panel,
  Stack,
  Button
}

export default {
  install(app) {
    app.component('g-panel', Panel);
    app.component('g-stack', Stack);
    app.component('g-btn', Button);
  },
};
import './assets/scss/main.scss'
import Panel from "./components/UI/Panel.vue";
import Stack from "./components/UI/Stack.vue";

export {
    Panel,
    Stack
}

export default {
  install(app) {
    app.component('g-panel', Panel);
    app.component('g-stack', Stack);
  },
};
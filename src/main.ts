import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { DraggableComponent, LoadingTextComponent } from './shared/components';

const app = createApp(App);

app.component('draggable', DraggableComponent);
app.component('loading-text', LoadingTextComponent);

app.use(createPinia()).mount('#app');

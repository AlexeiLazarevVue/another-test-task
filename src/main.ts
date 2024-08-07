import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { ButtonComponent, DraggableComponent, InputComponent,LoadingTextComponent } from './shared/components'

const app = createApp(App)

app.component('draggable', DraggableComponent)
app.component('loading-text', LoadingTextComponent)
app.component('button-component', ButtonComponent)
app.component('input-component', InputComponent)

app.use(createPinia()).mount('#app')

import { createApp } from 'vue';

import App from './App.vue';

import BaseCard from './components/cards/BaseCard.vue';
import FormCard from './components/forms/FormCard.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('form-card', FormCard);

app.mount('#app');

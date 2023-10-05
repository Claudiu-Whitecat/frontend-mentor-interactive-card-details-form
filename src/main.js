import { createApp } from 'vue';

import App from './App.vue';

import BackCard from './components/cards/BackCard.vue';
import FrontCard from './components/cards/FrontCard.vue';
import FormPayment from './components/forms/FormPayment.vue';

const app = createApp(App);

app.component('back-card', BackCard);
app.component('front-card', FrontCard);
app.component('form-payment', FormPayment);

app.mount('#app');

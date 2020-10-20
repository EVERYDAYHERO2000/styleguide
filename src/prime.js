import Vue from 'vue'

import PrimeBtn from 'primevue/button';
import PrimeCard from 'primevue/card';

import '../node_modules/primevue/resources/primevue.css';
import '../node_modules/primevue/resources/themes/nova/theme.css';

Vue.prototype.$primevue = {ripple: true};

export const Btn = Vue.component('Btn', PrimeBtn);
export const Card = Vue.component('Card', PrimeCard);

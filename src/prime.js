import Vue from 'vue'

import Ripple from 'primevue/ripple';
import PButton from 'primevue/button';
import PCard from 'primevue/card';


import '../node_modules/primevue/resources/primevue.css';
import '../node_modules/primevue/resources/themes/nova/theme.css';

export const PrimeButton = Vue.component('PrimeButton', PButton);
export const PrimeCard = Vue.component('PrimeCard', PCard);


Vue.prototype.$primevue = {ripple: true};

Vue.directive('ripple', Ripple)


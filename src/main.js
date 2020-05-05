import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'normalize.css';
import VueTheMask from 'vue-the-mask';
import svg from 'vue-svg-directive';

Vue.use(svg, {
	filepath: '/public/defs.svg',
})

Vue.use(VueTheMask)

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');

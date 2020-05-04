import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Auth from '../views/AuthPage.vue';
import Register from '../views/RegistrationPage.vue';
import ChooseUser from "../views/ChooseUser.vue";
import AskFormPage from "../views/AskFormPage.vue";
import CommonPage from "../components/CommonPage.vue";
import Store from '../store/user.js';
import NotFoundPage from '../views/NotFoundPage.vue';
import MemoCard from '../components/MemoCard';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/auth',
		name: 'Auth',
		component: Auth,
	},
	{
		path: '/register/:role',
		name: 'Registration',
		component: Register,
	},
	{
		path: '/choose-user',
		name: 'Choose User',
		component: ChooseUser,
	},
  {
    path: '/404',
    name: 'Not Found',
    component: NotFoundPage,
  },
  {
    path: '*',
    redirect: '/404',
  },
	{
		path: '/test3',
		name: 'Choose User',
		component: MemoCard,
	},
	{
		path: '/test',
		name: 'TEST',
		component: CommonPage,
		beforeEnter: (to, from, next) => {
			if (to.name !== 'Auth' && !Store.state.isAuth) {
				next({name: 'Auth'});
			} else {
				next();
			}
		}
	},
	{
		path: '/ask-form',
		name: 'Ask Form',
		component: AskFormPage,
		beforeEnter: (to, from, next) => {
			if (to.name !== 'Auth' && !Store.state.isAuth) {
				next({name: 'Auth'});
			} else {
				next();
			}
		}
	},
];

const router = new VueRouter({
	routes,
});

export default router;

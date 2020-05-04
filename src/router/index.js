import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Auth from '../views/AuthPage.vue';
import Register from '../views/RegistrationPage.vue';
import ChooseUser from "../views/ChooseUser.vue";
import AskForm from "../components/AskForm";
import CommonPage from "../components/CommonPage";
import Store from '../store/user.js';

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
		path: '/test',
		name: 'TEST',
		component: CommonPage,
    beforeEnter: (to, from, next) => {
			if(!Store.state.isAuth) {
				next({name: 'Auth'})
			} else {
				next({name: 'TEST'});
			}
		}
	},
	{
		path: '/test1',
		name: 'TEST1',
		component: AskForm,
		beforeEnter: (to, from, next) => {
			if(!Store.state.isAuth) {
				next({name: 'Auth'})
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

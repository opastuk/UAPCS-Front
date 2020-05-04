import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Auth from '../views/AuthPage.vue';
import Register from '../views/RegistrationPage.vue';
import ChooseUser from "../views/ChooseUser.vue";
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
	}
];

const router = new VueRouter({
	routes,
});

router.beforeEach((to, from, next) => {
	if(to.name !== 'Auth' && !Store.state.isAuth) {
		next({ name: 'Auth'})
	} else {
		next()
	}
})

export default router;

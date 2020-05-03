import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Auth from '../views/AuthPage.vue';
import Register from '../views/RegistrationPage.vue';
import ChooseUser from "../views/ChooseUser.vue";
import CommonPage from "../views/CommonPage";
import AskForm from "../components/AskForm";
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
		path: '/register',
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
	},
	{
		path: '/test1',
		name: 'TEST',
		component: AskForm,
	},
];

const router = new VueRouter({
	routes,
});

export default router;

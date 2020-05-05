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
import MemoPage from '../views/MemoPage.vue';
import MyAppealPage from '../views/MyAppealPage.vue';
import ActiveAppealPage from '../views/ActiveAppealPage.vue';
import CurrentPatientsPage from '../views/CurrentPatientsPage.vue';

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
		path: '/my-appeal',
		name: 'Mу Appeal',
		component: MyAppealPage,
		beforeEnter: (to, from, next) => {
			if (to.name !== 'Auth' && !Store.state.isAuth) {
				next({name: 'Auth'});
			} else {
				next();
			}
		}
	},
  {
    path: '/my-patients',
    name: 'Mу Patients',
    component: CurrentPatientsPage,
		beforeEnter: (to, from, next) => {
			if (to.name !== 'Auth' && !Store.state.isAuth) {
				next({name: 'Auth'});
			} else {
				next();
			}
		}
  },
  {
    path: '/active-appeal',
    name: 'Active Appeal',
    component: ActiveAppealPage,
		beforeEnter: (to, from, next) => {
			if (to.name !== 'Auth' && !Store.state.isAuth) {
				next({name: 'Auth'});
			} else {
				next();
			}
		}
  },
  {
    path: '/memo',
    name: 'Memo',
    component: MemoPage,
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

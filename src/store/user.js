import getRequest from '../api/getMethods.js';

const state = {
	userInfo: {},
	isAuth: true,
};
const getters = {};
const mutations = {
	setUser(state, payload) {
		state.userInfo = JSON.parse(payload);

		state.userId = id;
		state.userRole = role;
		state.userName = name;
		state.isAuth = true;
	}
};

const actions = {
	auth(context, authInfo) {
		getRequest.authentication(authInfo).then((userInfo) => context.commit('setUser', userInfo)).catch((e) => console.log(e.message));
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};

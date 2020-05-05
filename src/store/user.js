import getRequest from '../api/getMethods.js';

const state = {
	userInfo: {},
	isAuth: true,
};
const getters = {};
const mutations = {
	setUser(state, payload) {
		state.userInfo = JSON.parse(payload);
		state.isAuth = true;
	}
};

const actions = {
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};

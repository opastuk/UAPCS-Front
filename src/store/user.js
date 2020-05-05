import getRequest from '../api/getMethods.js';

const state = {
	userInfo: {
	},
	isAuth: true,
};
const getters = {
	isDoctor(state) {
		return state.userInfo.role === 1;
	}
};
const mutations = {
	setUser(state, payload) {
		state.userInfo = payload;
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

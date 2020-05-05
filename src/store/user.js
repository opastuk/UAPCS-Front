import getRequest from '../api/getMethods.js';

const state = {
	userInfo: {
		id: 11111214,
		name: "Никита",
		birthDate: "11-11-2019",
		email: "kitnick98@gmail.com",
		mobilePhone: "+7 968 629 00 37",
		password: "111",
		role: 2,
		hospitalId: "1"
	},
	isAuth: true,
};
const getters = {
	isDoctor(state) {
		return state.userInfo.role === 2;
	}
};
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

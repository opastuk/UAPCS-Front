import Vue from 'vue';
import Vuex from 'vuex';
import user from './user.js';
import getRequest from '../api/getMethods.js'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		hospitals: [],
		currentHospital: 1,
		doctorsList: [],
	},
	mutations: {
		setHospitals(state, payload) {
			state.hospitals = payload;
		},
		setHospital(state, payload) {
			state.currentHospital = payload;
		},
		setDoctorsList(state, payload) {
			state.doctorsList = payload;
		}
	},
	actions: {

		receiveDoctorsList(context){
			getRequest.loadAvailableDoctors(context.state.currentHospital).then((doctors) => context.commit('setDoctorsList', doctors.data)).catch((e) => console.log('К сожалению ни одного врачча не найдено'));
		}
	},
	modules: {
		user
	},
});

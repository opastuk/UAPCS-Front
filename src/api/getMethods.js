import request from "./Request.js";
import Store from '../store/index.js';

global.loadHospitals = () => {
	return request.get('/hospitals/all');
};

global.loadAvailableDoctors = () => {
	let now = new Date();
	let currentDate = now.format('yyyy-mm-dd');

	return request.get(`schedule/by-hospital-and-date?hospital_id=${Store.state.currentHospital}&date=${currentDate}`);
};

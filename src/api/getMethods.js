import request from "./Request.js";

const getRequest = {
	loadHospitals: () => {
		return request.get('/hospitals/all')
	},

	loadAvailableDoctors: function (hospitalId) {
		let now = new Date();
		let currentDate = now.format('yyyy-mm-dd');

		return request.get(`schedule/by-hospital-and-date?hospital_id=${hospitalId}&date=${currentDate}`);
	}

}

export default getRequest

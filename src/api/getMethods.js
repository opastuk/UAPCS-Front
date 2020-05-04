import request from "./Request.js";

const getRequest = {
	loadHospitals: function () {
		return request.get('/hospitals/all');
	},

	loadAvailableDoctors: function (hospitalId) {
		let now = new Date();
		let currentDate = now.format('yyyy-mm-dd');

		return request.get(`schedule/by-hospital-and-date?hospital_id=${hospitalId}&date=${currentDate}`);
	},

	authentication: function (authInfo) {
		return new Promise((res) => {
			console.log(authInfo)
			res(
				{
					id: 1,
					role: 'doctor',
					name: 'Ivan',
				}
			);
		})
	}
}

export default getRequest

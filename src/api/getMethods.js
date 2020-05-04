import request from "./Request.js";

const getRequest = {
	loadHospitals: () => {
		return request.getRequest('/hospitals/all')
	},

	loadAvailableDoctors: function (hospitalId) {
		let now = new Date();
		let currentDate = now.format('yyyy-mm-dd');

		return request.getRequest(`schedule/by-hospital-and-date?hospital_id=${hospitalId}&date=${currentDate}`);
	},

	authentication: function (authInfo) {
		return new Promise((res) => {
			console.log(authInfo)
			res(
				{
					id: 1,
					role: 2,
					name: 'Ivan',
				}
			);
		})
	}
}

export default getRequest

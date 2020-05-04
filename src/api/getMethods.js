import request from "./Request.js";

global.loadHospitals = () => {
	return request.get('/hospitals/all');
};

global.loadAvailableDoctors = (hospitalId) => {
	let now = new Date();
	let currentDate = now.format('yyyy-mm-dd');

	return request.get(`schedule/by-hospital-and-date?hospital_id=${hospitalId}&date=${currentDate}`);
};

global.authentication = (authInfo) => {
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

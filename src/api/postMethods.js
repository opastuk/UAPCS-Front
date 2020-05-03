import request from './Request';

global.registerPatient = (registerData) => {
	return request.post('/patient/create', registerData);
};
global.registerDoctor = (registerData) => {
	return request.post('/doctor/create', registerData);
};

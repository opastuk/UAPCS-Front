import request from './Request';

global.registerUser = (registerData) => {
	return request.post(`/${registerData.role}/create`, registerData);
};

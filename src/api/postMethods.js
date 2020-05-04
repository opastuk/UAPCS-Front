import request from './Request';

const postRequest = {
	registerUser: function(registerData) {
		const role = registerData.role === 1 ? 'patient' : 'doctor';
		return request.post(`/${role}/create`, registerData);
	}
}

export default postRequest;

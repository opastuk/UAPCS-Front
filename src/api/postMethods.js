import request from './Request';

const postRequest = {
	registerUser: function(registerData) {
		return request.post(`/${registerData.role}/create`, registerData);
	}
}

export default postRequest;

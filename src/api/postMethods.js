import request from './Request';

const postRequest = {
	registerUser: function(registerData) {
		return request.post(`/register/user`, registerData);
	}
};

export default postRequest;

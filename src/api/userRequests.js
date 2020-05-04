import request from './Request';

const userRequests = {
	registerUser: async (registerData) => {
		const register = {}
		request.postRequest('/register/user', registerData).then((response) => response.status)
		return register
	}
};

export default userRequests;

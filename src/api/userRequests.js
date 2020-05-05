import request from './Request';

const userRequests = {
  registerUser: (registerData) => {
   return request.post('/register/user', JSON.stringify(registerData))
  },
  loginUser: (loginData) => {
    return request.post('/login', JSON.stringify(loginData))
  },
};

export default userRequests;

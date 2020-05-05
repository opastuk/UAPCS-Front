import request from './Request';

const userRequests = {
  registerUser: (registerData) => {
   return request.post('/register/user', JSON.stringify(registerData))
  },
  loginUser: (loginData) => {
    return request.post('/login', JSON.stringify(loginData))
  },
  createTask: (taskData) => {
    taskData.description = toString(taskData.description)
    return request.post('/tasks/create', JSON.stringify(taskData))
  }
};

export default userRequests;

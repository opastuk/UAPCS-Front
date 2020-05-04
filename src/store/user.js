import {register} from "register-service-worker";
import getRequest from '../api/getMethods.js'
import postRequest from '../api/postMethods.js'

const state = {
  userRole: 'patient',
  userId: '11111111111',
  userName: 'Ivan',
  isAuth: true,
};
const getters = {
  getUserInfo(state) {
    return {
      id: state.userId,
      role: state.userRole,
      name: state.userName,
      isAuth: state.isAuth,
    }
  },
};
const mutations = {
  setUser(state, payload) {
    const {id, role, name} = payload;
    state.userId = id;
    state.userRole = role;
    state.userName = name;
    state.isAuth = true;
  }
}

const actions = {
  auth(context, authInfo) {
    getRequest.authentication(authInfo).then((userInfo) => context.commit('setUser', userInfo)).catch((e) => console.log('Ошибка авторизации'))
  },
  registration(context, registerInfo) {
    postRequest.registerUser(registerInfo).then((response) => {
      new Promise((resolve, reject) => {
        if(response.status === 200){
          resolve()
        }
        reject()
      }
      )}).catch((e) => console.log('Ошибка регистрации'))
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

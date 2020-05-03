import axios from 'axios';
import api from '../../config/api.json'

const CONFIG = JSON.parse(api);


export default class Api {
  constructor() {
    this.host = `http://${CONFIG.host}:${CONFIG.port}`;
  }



  hospitals () {
    axios.get(`${this.host}/hospitals`).then((response) => {
      return response.data
    }). catch((e) => console.log(e.message))
  }
}


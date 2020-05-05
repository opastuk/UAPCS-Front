import axios from 'axios';
import api from '../../config/api.json';

const baseDomain = `http://${api.host}:${api.port}`;
axios.defaults.baseURL = `${baseDomain}/health-api`;

export default axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
});


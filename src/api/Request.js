import axios from 'axios';
import api from '../../config/api.json';

const Request = JSON.parse(api);
const baseDomain = `http://${Request.host}:${Request.port}`;
const baseUrl = `${baseDomain}/health-api`;

export default axios.create({baseUrl});


import axios from 'axios';
import api from '../../config/api.json';

const baseDomain = `http://${api.host}:${api.port}`;
const baseUrl = `${baseDomain}/health-api`;

export default axios.create({baseUrl});


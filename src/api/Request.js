import api from '../../config/api.json';

const baseDomain = `http://${api.host}:${api.port}`;
const baseUrl = `${baseDomain}/health-api`;

const xhr = new XMLHttpRequest()
const Request = {
  postRequest: function (url, body) {
    const postBody = JSON.stringify(body)
    xhr.open('POST', `${baseUrl}${url}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    console.log(postBody)
    xhr.send(postBody);
    console.log(xhr.statusText)
    return new Promise((resolve, reject) => xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve({
          data: (JSON.parse(xhr.response) ?  JSON.parse(xhr.response) : {}),
          status: xhr.status,
        });
      } else {
        reject(xhr.status)
      }
    });
  },

  getRequest: function (url) {
    xhr.open('GET', `${baseUrl}${url}`, true);
    xhr.send();
    return new Promise((resolve) => xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
           resolve({
             data: JSON.parse(xhr.response),
             status: xhr.status,
           });
          }
        });
  }
}

export default Request;



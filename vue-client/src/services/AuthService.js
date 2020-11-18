import axios from 'axios';
const url = 'http://localhost:44398/api/';
export default {
  login(credentials) {
    return axios
      .post(url + 'Login/', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return axios
      .post(url + 'Register/', credentials)
      .then(response => response.data);
  },
  getSecretContent() {
    return axios.get(url + 'secret-route/').then(response => response.data);
  }
};
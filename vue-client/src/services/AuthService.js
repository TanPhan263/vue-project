import axios from 'axios';
const url = 'https://localhost:44398/api/User/';
export default {
  login(credentials) {
    return axios
      .post(url + 'Login', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return axios
      .post(url + 'RegisterUser', credentials)
      .then(response => response.data);
  },
  getRole(credentials) {
    return axios
      .get(url + 'GetRole',{ headers: {'Authorization': credentials}})
      .then(response => response.data);
  },
  getSecretContent() {
    return axios.get(url + 'secret-route/').then(response => response.data);
  }
};
import axios from 'axios';
const url = 'https://localhost:44398/api/User/';
export default{
    getInfo(token){
        return axios.get(url+ 'GetByID?token=' + token).then(respone => respone.data);
    },
    updateInfo(credentials,token) {
        return axios
          .post(url + 'EditByID?token='+ token, credentials)
          .then(response => response.data);
      },
};
import axios from 'axios';
const url = 'https://localhost:44398/api/User/';
export default{
    getInfo(token){
        return axios.get(url+ 'GetByID',{ headers: {"Authorization" : `Bearer ${token}`}}).then(respone => respone.data);
    },
    updateInfo(credentials,token) {
        return axios
          .post(url + 'EditByID',{ headers: {"Authorization" : `Bearer ${token}`}}, credentials)
          .then(response => response.data);
    },
};
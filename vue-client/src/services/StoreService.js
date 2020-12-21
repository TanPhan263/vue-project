import axios from 'axios';
const url = 'https://localhost:44398/api/Store';
const url2 = 'https://localhost:44398/api/BusinessType';
const url3 = 'https://localhost:44398/api/Dish'
export default{
    getAllStore(id){
      
    },
    getByID(){

    },
    getByProvince(id){
       return axios.get( url+'/GetByIDProvince?id=' + id).then(response => response.data);
    },
    getByDish(){
        
    },
    getByBussinessType(id){
        axios.get(baseUrl + '/GetByIDBusinessType?id=' +id ).then(response =>response.data);
    },
    updateStore(){

    },
    deleteStore(){

    },
    addStore(){

    },
    searchStore(key){
        return axios.get(url3+'/Search?dishname=' +key).then(response => response.data);
    },
    getAllBussinessType(){
        return axios.get( url2+'/GetAll').then(response => response.data);
    }
}
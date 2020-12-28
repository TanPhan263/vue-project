import axios from 'axios';
import Vue from 'vue'
Vue.prototype.$http = axios

const url = 'https://localhost:44398/api/Store';
const url2 = 'https://localhost:44398/api/BusinessType';
const url3 = 'https://localhost:44398/api/Dish'
const url4= 'https://localhost:44398/api/DishType'
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
       return axios.get(url + '/GetByIDBusinessType?id=' +id ).then(response =>response.data);
    },
    updateStore(id,store, token){
        return axios.post(url+ "/EditByID?id=" + id,store,{ headers: {"Authorization" : `Bearer ${token}`}}).then(response => response.data);
    },
    deleteStore(){

    },
    addStore(store, token){
        return axios.post(url + '/CreateStore', store,{ headers: {"Authorization" : `Bearer ${token}`}}).then(response => response.data);
    },
    searchStore(key){
        return axios.get(url3+'/Search?dishname=' +key).then(response => response.data);
    },
    getAllBussinessType(){
        return axios.get( url2+'/GetAll').then(response => response.data);
    },
    getByUser(id,token){
        return axios.get(url+'/GetByIDOwner?id='+id,{ headers: {"Authorization" : `Bearer ${token}`}}).then(response => response.data);
    },
    getDishType(){
        return axios.get( url4+'/GetAll').then(response => response.data);
    },
    addDish(dish,token)
    {
        return axios.post(url3 + '/CreateDish',dish,{ headers: {"Authorization" : `Bearer ${token}`}}).then(response => response.data);
    },
    getDishByID(id){
        return axios.get(url3 + '/GetByID?id='+id).then(response => response.data);
    },
    updateDish(id,dish,token){
        return axios.post(url3 + '/EditByID?id='+id,dish,{ headers: {"Authorization" : `Bearer ${token}`}}).then(response => response.data); 
    },
    deleteDish(id,token){
        
    }
}
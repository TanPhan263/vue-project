<template>
<div @click="disableDropdown" class="wraper" style="background-color:#f6f6f6;">
  <Header/>
  <Navbar v-bind:user="user" @storeClicked="dishClicked"/>
  <div class="content-banner">
			<div class="banner">
				<img src="../../assets/imgs/newyearBanner.jpg" alt="banner" style="margin: auto; height: 300px;width: 100%; display: block; border:0;">
			</div>
			<div class="search">
				<form action="#" id="searchform" method="#" style="padding:10px;">
					<div class="search-1 clearfix">
            <div id="vitri" class="vitri">
                <p style="text-align: left; height: 10px; color:#9a9a9a;">Vị trí của bạn:</p>
               <p style="text-align: center; font-size: 20px;"> <i class="fa fa-map-marker"  style="color: red; font-size: 20px;"></i> Số 1, Võ Văn Ngân, TP.Thủ Đức, Việt Nam</p>
            </div>
            <input v-model="keyword" type="text" placeholder="Nhập món ăn, tên quán, khu vực,..."  v-on:keyup="onkeychange(keyword)">
						<a @click="onSearchClicked" class="icon-search" ></a>
            <div class="dropdown" v-if="isDropdown">
            <div  id="myDropdown" class="dropdown-content" style="width: 600px;
                height: 600px;
                overflow: auto;">
              <div  v-show="loading"  name="fade" mode="out-in" style="width:100%; background-color: #fff; border-radius: 5px 5px 0 0">
                <div class="lds-facebook"><div></div><div></div><div></div></div>
              </div>
              <div v-if="results">
                <div v-on:click="storeClicked(result.storeID)" href="" class="search_suggest" v-for="result in results" v-bind:key="result.storeID" style="
                text-align: left; border: 1px; display: flex; border-bottom: 1px solid darkgray;">
                
                  <img :src="result.storePicture" class="left-thing" style="border-radius:5px;">
                  <div class="middle-thing" style="margin-left: 3px; height: 100%">
                    <p style="margin-top: 0px; height: 20%; font-weight: bold;">{{result.storeName}}</p>
                    <p style="margin-top: 0px;">{{subString(result.storeAddress)}}...</p>
                  </div>
                  <div v-if="getActiveTime(result.openTime,result.cLoseTime)" class="right-thing">
                    <p style=" margin-top: 0px; height: 20%; color:green;">Đang hoạt động <span class="dot"></span></p>
                    <p >{{result.khoangcach}} km</p>
                  </div>
                  <div v-else class="right-thing">
                    <p style=" margin-top: 0px; height: 20%; color:red;">Đóng cửa <span class="dot" style="background-color:#FF0000
  ;"></span></p>
                    <p >{{result.khoangcach}} km</p>
                </div>
              </div>
              </div>
            </div>
            </div>
					</div>
				</form>
			</div>
	</div>
   
      <transition v-show="show" name="fade" mode="out-in">
          <router-view :key="$route.path"></router-view>
      </transition>
  </div>
</template>

<script>
import Header from './containers/Header'
import Navbar from './containers/Navbar'
import Homebody from './Homebody'
import SearchPage from './SearchPage'
import Search from './containers/Search'
import Footer from './containers/Footer'

import ProvinceService from '@/services/ProvinceService.js'
import StoreService from '@/services/StoreService.js'
const baseUrl='https://localhost:44398/api/'
export default {
  name:'Home',
  components:{
        Header,
        Navbar,
        Search,
        Footer
      },
  data() {
    return {
      show: true,
      loading: false,
      user: '',
      stores:null,
      keyword: '',
      provinces:[],
      results: null,
      isDropdown: false
    }
  },
   mounted(){
      this.onInit();
  },
  methods:{
      async onInit(){
      this.keyword = localStorage.getItem("keyword")
      this.provinces= await ProvinceService.getAll();
      var id= localStorage.getItem('provinceId');
      this.stores = await StoreService.getByProvince(id);
      this.user=localStorage.getItem('userInfor');
      this.user = JSON.parse(this.user);
    },
    xoadau(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");
      return str.toLowerCase();
    },
    storeClicked(item) {
      this.$router.push('/storeDetail/'+ item)
    },
    dishClicked(item) {
      this.$router.push('/search?key='+ item)
    },
    onkeychange(key){
      this.isDropdown=true;
      this.loading = true;
      localStorage.setItem("keyword", key);
      if(key == '' || key == null)
        return this.results=null;
      else {
        setTimeout(() =>{
          this.results = this.stores.filter(this.searchfilter);
          this.loading = false;
         }, 1500);
      }
    },
    searchfilter(store){
      var name = this.xoadau(store.storeName.toString().toLowerCase());
      var searchkey = this.xoadau(this.keyword.toString().toLowerCase());
      if (name.includes(searchkey))
        return true;
      return false;
    },
    subString(index){
      return index.toString().substring(0,20);
    },
    onSearchClicked(){
      localStorage.setItem("keyword", this.keyword);
      this.$router.push('/search?key=' + this.keyword);
      this.$router.go();
    },
     getActiveTime(open,close){
		  const today = new Date();
      const hour = today.getHours();
      const min = today.getMinutes();
      open = parseInt(open.toString().substring(0,2)) 
      close = parseInt(close.toString().substring(0,2))
      if( open <= hour < close)
          return true;
      return false
    },
    disableDropdown(){     
        this.isDropdown = false
        return this.isDropdown
    }
  }
}
</script>

<style>
@import url('../../assets/css/style.css');
@import url('../../assets/css/bootstrap.min.css');
.dot {
  height: 7px;
  width: 7px;
  background-color:#339933;
  border-radius: 50%;
  display: inline-block;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 10px;
  background: #ff0000;
  border-radius: 5px;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}
.vitri{
  padding: 7px;
  margin: 0 auto;
  width: 650px;
  height: 70px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 130px;
  
}
</style>
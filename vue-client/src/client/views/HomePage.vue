<template>
<div @click="disableDropdown" class="wraper"  style="background-color:#f6f6f6;">
  <Header/>
  <Navbar v-bind:avt ="avt" @storeClicked="dishClicked"/>
  <!--Search v-bind:stores="stores"/-->
  <div class="content-banner">
			<div class="banner">
				<img src="../../assets/imgs/newyearBanner.jpg" alt="banner" style="margin: auto; height: 300px;width: 100%; display: block; border:0;">
			</div>
			<div class="search">
				<h1></h1>
				<form action="#" id="searchform" method="#" style="padding:10px;">
					<div class="search-1 clearfix">
            <input v-model="keyword" type="text" placeholder="Nhập món ăn, tên quán, khu vực,..." @input="onkeychange">
						<a @click="onSearchClicked" class="icon-search" ></a>
            <div class="dropdown" v-if="isDropdown">
            <div  id="myDropdown" class="dropdown-content" style="width: 600px;
                height: 600px;
                overflow: auto;">
              <div v-if="results">
                <div v-on:click="storeClicked(result.storeID)" href="" class="search_suggest" v-for="result in results" v-bind:key="result.dish_ID" style="
                text-align: left; border: 1px; display: flex; border-bottom: 1px solid darkgray;">
                
                  <img :src="result.storePicture" class="left-thing" style="border-radius:5px;">
                  <div class="middle-thing" style="margin-left: 3px; height: 100%">
                    <p style="margin-top: 0px; height: 20%; font-weight: bold;">{{result.storeName}}</p>
                    <p style="margin-top: 0px;">{{result.storeAddress.substring(0,30)}}...</p>
                  </div>
                  <div v-if="getActiveTime(result.openTime,result.cLoseTime)" class="right-thing">
                    <p style=" margin-top: 0px; height: 20%; color:green;">Đang hoạt động <span class="dot"></span></p>
                    <p >10km</p>
                  </div>
                  <div v-else class="right-thing">
                    <p style=" margin-top: 0px; height: 20%; color:red;">Đóng cửa <span class="dot" style="background-color:#FF0000
  ;"></span></p>
                    <p >10km</p>
                </div>
              </div>
              </div>
              <div style="width:100%; background-color: #fff; border-radius:15px">
                <div class="lds-facebook"><div></div><div></div><div></div></div>
              </div>
            </div>
            </div>
					</div>
				</form>
			</div>
	</div>
   
      <transition name="fade" mode="out-in">
          <router-view :key="$route.path"></router-view>
      </transition>
  </div>
</template>

<script>
import Header from './containers/Header'
import Navbar from './containers/Navbar'
import Homebody from './Homebody'
import SearchPage from './SearchPage'

import ProvinceService from '@/services/ProvinceService.js'
import StoreService from '@/services/StoreService.js'
const baseUrl='https://localhost:44398/api/'
export default {
  name:'Home',
  components:{
        Header,
        Navbar
      },
  data() {
    return {
      store:[],
      keyword: '',
      provinces:[],
      results: [],
      avt: '',
      isDropdown: false
    }
  },
   mounted(){
      this.provinces= ProvinceService.getAll();
      var id= localStorage.getItem('provinceId');
      //get all store in the province
      // this.$http.get( baseUrl+'Store/GetByIDProvince?id=' + id).then(response => {
      //       this.stores=response.data;
      // })
      this.store=StoreService.getByProvince(id);
  },
  methods:{
    storeClicked(item) {
      this.$router.push('/storeDetail/'+ item)
    },
     dishClicked (item) {
       this.$router.push({path: `DishType`, query:{key: item}})
    },
    async onkeychange(){
      this.isDropdown=true;
      //  this.$http.get('https://localhost:44398/api/Dish/Search?dishname=' + this.keyword).then(response => {
      //    if(response.data !='Không có kết quả tìm kiếm')
      //       this.results = response.data
      //     else this.results = []
      // });
      this.results= await StoreService.searchStore(this.keyword);
      if(response.data !='Không có kết quả tìm kiếm')
            this.results = response.data
          else this.results = []
    },
     onSearchClicked(){
       this.$router.push({path: `search`, query:{key: this.keyword}})
    },
     getActiveTime(open,close){
		  const today = new Date();
      const hour = today.getHours();
      const min = today.getMinutes();
      open = parseInt(open.substring(0,2)) 
      close = parseInt(close.substring(0,2))
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
  width: 16px;
  background: #ff0000;
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
</style>
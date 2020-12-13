<template>
<div @click="disableDropdown" class="wraper"  style="background-color:#f6f6f6;">
  <Header/>
  <Navbar v-bind:avt ="avt"/>
  <!--Search v-bind:stores="stores"/-->
  <div class="content-banner">
			<div class="banner">
				<img src="../../assets/imgs/banner-dat-giao-hang.png" alt="banner" style="margin: auto; width: 100%; display: block; border:0;">
			</div>
			<div class="search">
				<h1></h1>
				<form action="#" id="searchform" method="#">
					<div class="search-1 clearfix">
            <input v-model="keyword" type="text" placeholder="Nhập món ăn, tên quán, khu vực,..." @input="onkeychange">
						<a @click="onSearchClicked" class="icon-search"></a>
            <div class="dropdown" v-if="isDropdown">
            <div id="myDropdown" class="dropdown-content" style="width: 600px;
                height: 600px;
                overflow: auto;">
              <div v-on:click="storeClicked(result.storeID)" href="" class="search_suggest" v-for="result in results" v-bind:key="result.dish_ID" style="
               text-align: left; border: 1px; display: flex; border-bottom: 1px solid darkgray;">
                <img :src="result.storePicture" class="left-thing">
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
            </div>
					</div>
				</form>
			</div>
	</div>
    <vueper-slides 
      style="width: 80% ;margin: 0 auto; margin-top:20px;background-color:#f6f6f6;"
       class="no-shadow"
      :visible-slides="3"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
      <vueper-slide style="border-radius:10px;" v-for="(slide, i) in banner" :key="i" :image="slide.src" />
    </vueper-slides>
      <transition name="fade" mode="out-in">
          <router-view :key="$route.path"></router-view>
      </transition>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Header from './containers/Header'
import Navbar from './containers/Navbar'
import Homebody from './Homebody'
import SearchPage from './SearchPage'

const baseUrl='https://localhost:44398/api/'
export default {
  name:'Home',
  components:{
        Header,
        Navbar,
        VueperSlides, VueperSlide
      },
  data() {
    return {
      keyword: '',
      provinces:[],
      results: [],
      avt: '',
      isDropdown: false,
      banner:[
        {
          id:1,
           src: require('../../assets/imgs/banner1.jpg')
        },
         {
          id:2,
          src: require('../../assets/imgs/banner2.jpg')
        },
         {
          id:3,
          src: require('../../assets/imgs/banner3.jpg')
        },
         {
          id:4,
            src: require('../../assets/imgs/banner4.jpg')
        },
         {
          id:5,
          src: require('../../assets/imgs/banner1.jpg')
        },
         {
          id:6,
         src: require('../../assets/imgs/banner2.jpg')
        },
         {
          id:7,
          src: require('../../assets/imgs/banner3.jpg')
        },
         {
          id:8,
           src: require('../../assets/imgs/banner4.jpg')
        }
      ]
    }
  },
   mounted(){
      this.$http.get(baseUrl + 'Province/GetAll').then(response => {
            this.provinces=response.data
      })
  },
  methods:{
    storeClicked (item) {
      this.$router.push('/storeDetail/'+ item)
    },
    setLabel (item) {
      return item.storeName;
    },
    onkeychange(){
      this.isDropdown=true;
       this.$http.get('https://localhost:44398/api/Dish/Search?dishname=' + this.keyword).then(response => {
         if(response.data !='Không có kết quả tìm kiếm')
            this.results = response.data
          else this.results = []
         console.log(this.results)
      });
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
</style>
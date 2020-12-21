<template>
<div class="main">
   <vueper-slides 
      style="width: 80% ;margin: 0 auto; margin-top:20px;background-color:#f6f6f6; height:80%"
      class="no-shadow"
      :visible-slides="3"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
      <vueper-slide   @click.native="active=true" style="border-radius:10px;" v-for="(slide, i) in banner" :key="i" :image="slide.src" />
    </vueper-slides>
    <transition v-if="active">
			<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">

				<div class="modal-header">
					<slot name="header">
					<h3>ĐÁNH GIÁ QUÁN ĂN</h3>
					</slot>
				</div>

				<div class="modal-body">
					<slot name="body">
					Helllo
					</slot>
				</div>

				<div class="modal-footer">
					<slot name="footer">
					<button class="btn btn-danger" @click="active=false">
						Close
					</button>
					</slot>
				</div>
				</div>
			</div>
			</div>
		</transition>


   <div class="ship">
	  <div style="width:100%">
        <div class="hero" style="width:30%;">
          <h2 style="font-size:20px">MÓN NGON MỖI NGÀY</h2>
        </div>
    </div>
      <div id="Giaotannoi" class="sub-menu-ship" >
        <ul>
          <li v-for="dish in dishes" v-bind:key="dish.businessTypeID" style="height:110px;"  @click="dishClicked(dish.dishName)">
             <a>
              <img :src="dish.dishPicture" style="border-radius:10px 10px 10px 10px; width:100px; height:100px"/>
              <div  @click="dishClicked(dish.dishName)" class="name-food" style=" text-align: center">{{dish.dishName}}</div>
          </a>
          </li>
        </ul>
      </div>
       <CCol class="center_div" style="">
            <CButton size="sm" shape="pill" style=" text-align: center;margin-top: 20px;">XEM THÊM</CButton>
        </CCol>
  </div>
    <div class="ship">
      <div class="menu-ship" style="width:100%">
        <div class="hero"  style="width:30%; text-align:left">
          <h3>ĐƯỢC ĐÁNH GIÁ CAO</h3>
        </div>
        <div class="grid">
          <ul>
            <li><a href="">Tất cả</a></li>
            <li><a href=""   >Đồ ăn</a></li>
            <li><a href=""   >Thức uống</a></li>
            <li><a href=""    >Nhà hàng</a></li>
            <li><a href=""   >Vỉa hè</a></li>
          </ul>
        </div>
      </div>
      <div id="Giaotannoi" class="sub-menu-ship" >
        <ul>
          <li v-for="store in stores" v-bind:key="store.storeID">
            <a v-on:click="storeClicked(store.storeID)">
              <img :src="store.storePicture"  style="border-radius:10px 10px 0px 0px; width:205px; height:150px"/>
              <div class="name-food">{{ store.storeName.substr(0,20)}}...</div>
              <div class="address-store"><i class="fa fa-map-marker"></i>{{ store.storeAddress.substr(0,30) }}...</div>
                <div class="address-store">{{ getType(store.businessTypeID) }}</div>
              <div class="intro"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
     <div class="ship">
      <div class="menu-ship" style="width:100%">
        <div class="hero"   style="width:30% ;text-align:left">
          <h3>CỬA HÀNG GẦN BẠN</h3>
        </div>
        <div class="grid">
          <ul>
            <li><a href="">Tất cả</a></li>
            <li><a href=""  >Đồ ăn</a></li>
            <li><a href=""  >Thức uống</a></li>
            <li><a href=""   >Nhà hàng</a></li>
            <li><a href=""   >Vỉa hè</a></li>
          </ul>
        </div>
      </div>
      <div id="Giaotannoi" class="sub-menu-ship" >
        <ul>
          <li v-for="store in stores" v-bind:key="store.storeID">
            <a v-on:click="storeClicked(store.storeID)">
              <img :src="store.storePicture"  style="border-radius:10px 10px 0px 0px; width:205px; height:150px"/>
              <div class="name-food">{{ store.storeName.substr(0,20)}}...</div>
              <div class="address-store"><i class="fa fa-map-marker"></i>{{ store.storeAddress.substr(0,30) }}...</div>
                <div class="address-store">{{ getType(store.businessTypeID) }}</div>
              <div class="intro"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
     <!--Loadmore-->
    <div v-if="toShow < totalShow || toShow > totalShow" style="margin-top: 20px">
      <div v-for="i in toShow" v-bind:key="i" class="ship">
        <div  class="menu-ship">
          <div class="hero" style="width:30%">
            <h3 style="text-align:left">{{type[i].businessTypeName.toUpperCase()}}</h3>
          </div>
        </div>
        <div v-if="loadMoreList[i].lenght > 0" class="sub-menu-ship">
          <ul>
            <li v-for="store in loadMoreList[i]" v-bind:key="store.storeID">
              <a v-on:click="storeClicked(store.storeID)">
                <img :src="store.storePicture"  style="border-radius:10px 10px 0px 0px; width:205px; height:150px"/>
                <div class="name-food">{{ store.storeName.substr(0,20)}}...</div>
                <div class="address-store">{{ store.storeAddress.substr(0,30) }}...</div>
                  <div class="address-store">{{ getType(store.businessTypeID) }}</div>
                <div class="intro"></div>
              </a>
            </li>
          </ul>
        </div> 
        <div v-else>
          <img src="../../assets/imgs/opps.png" alt=""></div> 
      </div>
    </div>
    <div style="margin-top:30px" class="center_div" v-if="toShow < totalShow || totalShow > toShow">
       <CCol>
            <CButton @click="toShow+=2" size="sm" shape="pill">show more</CButton>
          </CCol>
     </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import StoreService from '@/services/StoreService.js';
const baseUrl='https://localhost:44398/api/'

export default {
name: 'body',
components:{
    VueperSlides, VueperSlide
},
data() {
    return {
      stores: [],
      storesTemp: '',
      listStores:[],
      news: [],
      promotion: [],
      discover: [],
      //Search data
      item: {},
      items: [],
      type: [
        {
          
        }
      ],
      toShow: 2,
      totalShow:0,
      loadMoreList: [],
      dishes: [],
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
      ],
      active:false
    }
  },
    mounted(){
      //get province id from loacl storage
      // var id= localStorage.getItem('provinceId')
      // //get all store in the province
      // this.$http.get( baseUrl+'Store/GetByIDProvince?id=' + id).then(response => {
      //       this.stores=response.data;
      //       this.stores= this.stores.slice(0,15);
      //       this.stores.sort(function(a, b){ var x = a.ratePoint; var y = b.ratePoint;
      //       if(x<y) return -1;
      //       if(x>y) return 1;
      //       return 0  });
      // }),
      //getall business type
      this.getStoreByProvince()
      // this.$http.get(baseUrl + 'BusinessType/GetAll').then(response => {
      //       this.type = response.data;
      // }),
      this.getAllBussinessType()
      this.$http.get(baseUrl + 'Dish/GetAll').then(response => {
            this.dishes = response.data;
            this.dishes = this.dishes.slice(30,39)
      })
  },
  methods:{
    async getStoreByProvince(){
      try{
        var id= localStorage.getItem('provinceId')
        this.stores = await StoreService.getByProvince(id)
        // this.stores.sort(function(a, b){ var x = a.ratePoint; var y = b.ratePoint;
        //     if(x<y) return -1;
        //     if(x>y) return 1;
        //     return 0  });
      }catch{}
    },
    async getAllBussinessType(){
      try{
      this.type= await StoreService.getAllBussinessType();
      }catch{}
    },
     storeClicked (item) {
      this.$router.push('/storeDetail/' + item)
    },
     dishClicked (item) {
       this.$router.push({path: `DishType`, query:{key: item}})
    },
    changeProvince(index){
      this.$http.get(baseUrl+ 'GetByIDProvince?id=' + index).then(response => {
        this.stores= response.data
      });
    },
    onChildClick(value){
      this.provinceID= value
    },
    getType(index){
      var temp='Unknown'
      this.type.forEach(element => {
         	if(element.businessTypeID == index)
             temp = element.businessTypeName
      });
      return temp
    }
  },
  updated(){
      this.totalShow=this.type.length;
      var i=0;
      this.type.forEach(element => {
        //  this.$http.get(baseUrl + 'Store/GetByIDBusinessType?id=' +element.businessTypeID ).then(response => {
        //     this.loadMoreList[i]=(response.data)
        //     this.loadMoreList[i]=this.loadMoreList[i].slice(0,10)
        //     i++;
        //   });
        // try{
        //    this.loadMoreList[i]= StoreService.getByBussinessType(element.businessTypeID)
        //    this.loadMoreList[i]=this.loadMoreList[i].slice(0,10)
        //    i++;
        // }
        // catch{}
        this.loadMoreList[i]=this.stores.filter(function(store) {
        return store.businessTypeID == element.businessTypeID;});
        console.log(this.loadMoreList[i]);
        i++;
      }); 
  }
}
</script>

<style>
@import url('../../assets/css/comments.css');
  .center_div{
   text-align: center;
}
</style>
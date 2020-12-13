<template>
<div class="main">
   <div class="ship">
	<div style="width:100%">
        <div class="hero" style="width:30%;">
          <h2 style="font-size:20px">CHỌN THEO THỂ LOẠI</h2>
        </div>
    </div>
      <div id="Giaotannoi" class="sub-menu-ship" >
        <ul>
          <li v-for="dish in dishes" v-bind:key="dish.businessTypeID" style="height:110px;">
            <a>
              <img :src="dish.dishPicture" style="border-radius:10px 10px 10px 10px; width:100px; height:100px"/>
              <div class="name-food" style=" text-align: center">{{dish.dishName}}</div>
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
        <div class="hero"  style="width:30%">
          <h3>ĐƯỢC ĐÁNH GIÁ CAO</h3>
        </div>
        <div class="grid">
          <ul>
            <li><a href="">Tất cả</a></li>
            <li><a href=""  v-on:click="changeCategory('Tất cả')">Đồ ăn</a></li>
            <li><a href=""  v-on:click="changeCategory('Tất cả')">Thức uống</a></li>
            <li><a href=""  v-on:click="changeCategory('Tất cả')" >Nhà hàng</a></li>
            <li><a href="" v-on:click="changeCategory('Tất cả')" >Vỉa hè</a></li>
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
        <div class="hero"  style="width:30%">
          <h3>CỬA HÀNG GẦN BẠN</h3>
        </div>
        <div class="grid">
          <ul>
            <li><a href="">Tất cả</a></li>
            <li><a href=""  v-on:click="changeCategory('Tất cả')">Đồ ăn</a></li>
            <li><a href=""  v-on:click="changeCategory('Tất cả')">Thức uống</a></li>
            <li><a href=""  v-on:click="changeCategory('Tất cả')" >Nhà hàng</a></li>
            <li><a href="" v-on:click="changeCategory('Tất cả')" >Vỉa hè</a></li>
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
          <div class="hero">
            <h3>{{type[i].businessTypeName.toUpperCase()}}</h3>
          </div>
        </div>
        <div v-if="loadMoreList[i].lenght" class="sub-menu-ship">
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

const baseUrl='https://localhost:44398/api/'

export default {
name: 'body',

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
      type: [],
      toShow: 2,
      totalShow:0,
      loadMoreList: [],
      dishes: []
    }
  },
    mounted(){
      //get province id from loacl storage
      var id= localStorage.getItem('provinceId')
      //get all store in the province
      this.$http.get( baseUrl+'Store/GetByIDProvince?id=' + id).then(response => {
            this.stores=response.data;
            this.stores= this.stores.slice(0,15);
            this.stores.sort(function(a, b){ var x = a.ratePoint; var y = b.ratePoint;
            if(x<y) return -1;
            if(x>y) return 1;
            return 0  });
      }),
      //getall business type
      this.$http.get(baseUrl + 'BusinessType/GetAll').then(response => {
            this.type = response.data;
      }),
      this.$http.get(baseUrl + 'Dish/GetAll').then(response => {
            this.dishes = response.data;
            this.dishes = this.dishes.slice(30,39)
      })
  },
  methods:{
     storeClicked (item) {
      this.$router.push('/storeDetail/' + item)
    },
    changeCategory(index){
      switch(index){
        case 'Tất cả':  this.$http.get(baseUrl + 'Store/GetByIDProvince/58').then(response => {
            this.news=response.data
          });
          break;
        case 'Đồ ăn':  this.$http.get(baseUrl +'Store/GetByIDBusinessType/1').then(response => {
            this.news=response.data
          });
          break;
        case 'Thức uống':  this.$http.get(baseUrl +'Store/GetByIDBusinessType/2').then(response => {
            this.news=response.data
          });
          break;
        case 'Nhà hàng':  this.$http.get(baseUrl +'Store/GetByIDBusinessType/3').then(response => {
            this.news=response.data
          });
          break;
        case 'Vỉa hè':  this.$http.get(baseUrl +'Store/GetByIDBusinessType/4' ).then(response => {
            this.news=response.data
          });
          break;
      }
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
       this.loadMoreList[i]=this.stores.filter(function(store) {
        return store.businessTypeID == element.businessTypeID;});
        console.log(this.loadMoreList[i]);
        i++;
      }); 
  }
}
</script>

<style>
  .center_div{
   text-align: center;
}
</style>
<template>
<div class="main">
    <div class="ship">
      <div class="menu-ship">
        <div class="hero">
          <h2>Được đánh giá cao</h2>
        </div>
        <div class="grid">
          <ul>
            <li><a href="" v-on:click="changeCategory('Tất cả')" >Tất cả</a></li>
            <li><a href=""  v-on:click="changeCategory('Tất cả')">Đồ ăn</a></li>
            <li><a href=""  v-on:click="changeCategory('Tất cả')">Thức uống</a></li>
            <li><a href=""  v-on:click="changeCategory('Tất cả')" >Nhà hàng</a></li>
            <li><a href="" v-on:click="changeCategory('Tất cả')" >Vỉa hè</a></li>
          </ul>
        </div>
      </div>
      <div id="Giaotannoi" class="sub-menu-ship">
        <ul>
          <li v-for="store in stores" v-bind:key="store.storeID">
            <a v-on:click="storeClicked(store.storeID)">
              <img :src="store.storePicture" width="205" height="150" />
              <div class="name-food">{{ store.storeName.substr(0,20)}}</div>
              <div class="address-store">{{ store.storeAddress.substr(0,30) }}...</div>
              <div class="intro">{{type[store.businessTypeID].businessTypeName}}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div><h4  class="center_div">Xem tất cả >></h4></div>
    <div class="promotion">
      <div class="menu-promotion">
        <div class="block">
          <h2>Cửa hàng gần bạn</h2>
        </div>
        <div class="options">
          <div class="all">
            <select>
              Tất cả
              <option v-on:click="changeCategory('Tất cả')">Tất cả</option>
              <option v-on:click="changeCategory('Gần tôi')">Gần tôi</option>
              <option v-on:click="changeCategory('Xem nhiều nhất')"> Xem nhiều nhất</option>
              <option v-on:click="changeCategory('Đánh giá tốt nhất')">Đánh giá tốt nhất</option>
            </select>
          </div>
        </div>
      </div>
      <div id="Uudai" class="sub-menu-promotion">
        <ul>
          <li v-for="store in promotion" v-bind:key="store.storeID">
            <a>
              <img v-on:click="storeClicked(store.storeID)" :src="store.storePicture" width="205" height="150" />
              <div class="name-food">{{ store.storeName.substr(0,20) }}</div>
              <div class="address-store">{{ store.storeAddress.substr(0,30) }}...</div>
              <div class="intro">
                <img :src="store.storePicture" height="20" width="20"  style="margin-bottom: 5px;"/>
                <h5 value="Hello"></h5>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
     <div><h4  class="center_div">Xem tất cả >></h4></div>
    <div class="discover">
      <div class="section">
        <ul>
          <li>
            <img src="../../assets/imgs/F.png" width="25" height="25" style="margin-top: 10px; margin-left:5px;"/>
            <h1 style="font-size: 1.5em">Khám phá</h1>
          </li>
          <li>
            <a href=""
              >Ở đâu<span
                style="
                  float: right;
                  font-size: 20px;
                  line-height: 11px;
                  color: #000;
                "
                >&raquo;</span
              ></a
            >
          </li>
          <li>
            <a
              >Ăn gì<span
                style="
                  float: right;
                  font-size: 20px;
                  line-height: 11px;
                  color: #000;
                "
                >&raquo;</span
              ></a
            >
          </li>
          <li>
            <a 
              >Sưu tập<span
                style="
                  float: right;
                  font-size: 20px;
                  line-height: 11px;
                  color: #000;
                "
                >&raquo;</span
              ></a
            >
          </li>
          <li>
            <a 
              >Bình luận<span
                style="
                  float: right;
                  font-size: 20px;
                  line-height: 11px;
                  color: #000;
                "
                >&raquo;</span
              ></a
            >
          </li>
          <li>
            <a 
              >Giao hàng<span
                style="
                  float: right;
                  font-size: 20px;
                  line-height: 11px;
                  color: #000;
                "
                >&raquo;</span
              ></a
            >
          </li>
        </ul>
      </div>
      <div class="artical">
        <div class="menu-artical">
          <div class="menu-left">
            <a>Mới nhất</a>
            <a>Gần tôi</a>
          </div>
          <div class="menu-right">
            <select>
              -Danh mục-
              <option>-Danh mục-</option>
              <option>Sang trọng</option>
              <option>Buffet</option>
              <option>Nhà hàng</option>
              <option>Ăn vặt/vỉa hè</option>
              <option>Ăn chay</option>
              <option>Cafe/Dessert</option>
              <option>Quán ăn</option>
              <option>Bar/Pub</option>
              <option>Quán nhậu</option>
              <option>Beer Club</option>
              <option>Tiệm bánh</option>
              <option>Tiệc tận nơi</option>
              <option>Shop online</option>
              <option>Giao cơm văn phòng</option>
              <option>Khu ẩm thực</option>
            </select>
            <select>
              -Ẩm thực-
              <option>-Ẩm thực-</option>
              <option>Miền Bắc</option>
              <option>Trung Hoa</option>
              <option>Miền Trung</option>
              <option>Miền Nam</option>
              <option>Ấn Độ</option>
              <option>Thái Lan</option>
              <option>Ý</option>
              <option>Pháp</option>
              <option>Đức</option>
              <option>Nhật Bản</option>
              <option>Hàn Quốc</option>
              <option>Thụy Sĩ</option>
              <option>Tây Nguyên</option>
              <option>Singapore</option>
              <option>Malaysia</option>
              <option>Brazil</option>
              <option>Mỹ</option>
              <option>Tây Ban Nha</option>
              <option>Indonesia</option>
            </select>
          </div>
        </div>
        <div id="KhamPha" class="slider">
          <ul>
            <li v-for="store in discover" v-bind:key="store.storeID">
              <a href=""
                ><img :src="store.storePicture" width="205" height="150" />
                <div class="name-food">{{ store.storeName.substr(0,20) }}</div>
                <div class="address-store">{{ store.storeAddress.substr(0,30) }}...</div>
                <div class="comment"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
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
      listStores:[],
      news: [],
      promotion: [],
      discover: [],
      //Search data
      item: {},
      items: [],
      type: [],
      storeToShow: 3,
    }
  },
    mounted(){
      var id= localStorage.getItem('provinceId')
      this.$http.get( baseUrl+'Store/GetByIDProvince/' + id).then(response => {
            this.stores=response.data;
            this.stores= this.stores.slice(0,15);
            this.stores.sort(function(a, b){ var x = a.ratePoint; var y = b.ratePoint;
            if(x<y) return -1;
            if(x>y) return 1;
            return 0  });
      }),
      this.$http.get(baseUrl+'Store/GetByIDBusinessType/1').then(response => {
            this.news=response.data
            this.news.sort(function(a, b){ var x = a.ratePoint; var y = b.ratePoint;
            if(x<y) return -1;
            if(x>y) return 1;
            return 0  });
      })
      this.$http.get(baseUrl+ 'Store/GetByIDBusinessType/2').then(response => {
            this.promotion=response.data
      })
      this.$http.get(baseUrl+ 'Store/GetByIDBusinessType/3').then(response => {
            this.discover=response.data
      })
      this.$http.get(baseUrl + 'BusinessType/GetAll').then(response => {
            this.type = response.data;
      })
      return this.type[0].businessTypeName;
  },
  methods:{
     storeClicked (item) {
      this.$router.push('/storeDetail/' + item)
    },
    // storeClicked (item) {
    //   this.$store.commit("SET_INFORID", item)
    //   this.$router.push({path: `/storeDetail`})
    // },
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
      this.$http.get(baseUrl+ 'GetByIDProvince/' + index).then(response => {
        this.stores= response.data
      });
    },
    onChildClick(value){
      this.provinceID= value
    },//Search
   
  }
}
</script>

<style>
  .center_div{
   text-align: center;
}
</style>
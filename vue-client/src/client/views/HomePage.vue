<template>
<div class="wraper">
  <Header/>
  <Navbar v-bind:province="provinces" v-on:navbartoHome="onChildClick"/>
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
            <div class="dropdown" v-if="results.length">
            <div id="myDropdown" class="dropdown-content">
              <a v-on:click="storeClicked( result.storeID)" href="" class="search_suggest" v-for="result in results" v-bind:key="result.dish_ID" style=" text-align: left;">
                {{ result.storeName}}
              </a>
            </div>
            </div>
					</div>
				</form>
			</div>
		</div>
  <div class="main">
    <div class="ship">
      <div class="menu-ship">
        <div class="hero">
          <h2>Quán mới nổi</h2>
        </div>
        <div class="grid">
          <ul>
            <li><a href="" v-on:click="changeCategory('Đồ ăn')">Mới nhất</a></li>
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
          <li v-for="store in news" v-bind:key="store.storeID">
            <a v-on:click="storeClicked(store.storeID)">
              <img :src="store.storePicture" width="205" height="150" />
              <div class="name-food">{{ store.storeName  }}</div>
              <div class="address-store">{{ store.storeAddress.substr(0,30) }}...</div>
              <div class="intro">{{store.businessTypeID }}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="promotion">
      <div class="menu-promotion">
        <div class="block">
          <h2>Ưu đãi hôm nay </h2>
        </div>
        <div class="options">
          <div class="all">
            <select>
              Tất cả
              <option v-on:click="changeCategory('Tất cả')">Tất cả</option>
              <option v-on:click="changeCategory('Mới nhất')">Mới nhất</option>
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
              <div class="name-food">{{ store.storeName.substr(0,30) }}</div>
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
                <div class="name-food">{{ store.storeName }}</div>
                <div class="address-store">{{ store.storeAddress.substr(0,30) }}...</div>
                <div class="comment"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Header from './containers/Header'
import Navbar from './containers/Navbar'
import Search from './containers/Search'

const baseUrl='https://localhost:44398/api/'
export default {
  name:'Home',
  components:{
        Header,
        Search,
        Navbar
      },
  data() {
    return {
      keyword: '',
      searchs:{
        searchKey: '',
        searchItems: []
      },
      stores: [],
      provinces:[],
      provinceID: '',
      listStores:[],
      news: [],
      promotion: [],
      discover: [],
      //Search data
      item: {},
      items: [],
      results: []
    }
  },
  mounted(){
      const id = this.$route.params.id
      this.$http.get( baseUrl+'Store/GetAll/').then(response => {
            this.stores=response.data
      }),
     this.$http.get(baseUrl + 'Province/GetAll').then(response => {
            this.provinces=response.data
      })
      this.$http.get(baseUrl+'Store/GetByIDBusinessType/1').then(response => {
            this.news=response.data
      })
      this.$http.get( baseUrl+ 'Store/GetByIDBusinessType/2').then(response => {
            this.promotion=response.data
      })
      this.$http.get(baseUrl+ 'Store/GetByIDBusinessType/3').then(response => {
            this.discover=response.data
      })
  },
  methods:{
    // storeClicked (item) {
    //   this.$store.commit("SET_INFORID", item)
    //   this.$router.push({path: `/storeDetail`})
    // },
    getType (index) {
      const type =[]
      this.$http.get(baseUrl + 'BusinessType/GetById/' + index).then(response => {
            this.type = response.data;
      })
      return this.type[0].businessTypeName;
    },
    searchstore(){
      this.$refs.form.searchs();
    },
    changeCategory(index){
      switch(index){
        case 'Tất cả':  this.$http.get(baseUrl + 'Store/GetAll/').then(response => {
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
    storeClicked (item) {
      this.$router.push({path: `storeDetail/${item}`})
    },
    setLabel (item) {
      return item.storeName;
    },
    onkeychange(){
       this.$http.get('https://localhost:44398/api/Dish/Search?dishname=' + this.keyword).then(response => {
         if(response.data !='Không có kết quả tìm kiếm')
            this.results = response.data
          else this.results = []
         console.log(this.results)
      });
    },
    onSearchClicked(){
       this.$router.push({path: `search`, query:{key: this.keyword}})
    }
  }
}
</script>

<style>
@import url('../../assets/css/style.css');
@import url('../../assets/css/bootstrap.min.css');
</style>
<template>
<div class="wraper">
  <Header/>
  <Navbar v-bind:province="provinces"/>
  <Search v-bind:listStore="listStores" ref="form"/>
  <div class="main">
    <div class="ship">
      <div class="menu-ship">
        <div class="hero">
          <h2>Quán mới nổi</h2>
        </div>
        <div class="grid">
          <ul>
            <li class="active"><a href="">Mới nhất</a></li>
            <li><a href="">Tất cả</a></li>
            <li><a href="">Cơm trưa</a></li>
            <li><a href="">Đồ ăn</a></li>
            <li><a href="">Thức uống</a></li>
            <li><a href="">Tráng miệng</a></li>
            <li><a href="">Homemade</a></li>
            <li><a href="">{{provinces}}</a></li>
          </ul>
        </div>
      </div>
      <div id="Giaotannoi" class="sub-menu-ship">
        <ul>
          <li v-for="store in stores" v-bind:key="store.storeID">
            <a v-on:click="storeClicked(store.storeID)">
              <img :src="store.storePicture" width="205" height="150" />
              <div class="name-food">{{ store.storeName  }}</div>
              <div class="address-store">{{ store.storeAddress.substr(0,30) }}...</div>
              <div class="intro">{{ getType(store.businessTypeID) }}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="promotion">
      <div class="menu-promotion">
        <div class="block">
          <h2>Ưu đãi từ nhà hàng</h2>
        </div>
        <div class="options">
          <div class="all">
            <select>
              Tất cả
              <option>Tất cả</option>
              <option>Mới nhất</option>
              <option>Gần tôi</option>
              <option>Xem nhiều nhất</option>
              <option>Đánh giá tốt nhất</option>
            </select>
          </div>
        </div>
      </div>
      <div id="Uudai" class="sub-menu-promotion">
        <ul>
          <li v-for="store in stores" v-bind:key="store.storeID">
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
            <a href=""
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
            <a href=""
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
            <a href=""
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
            <a href=""
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
            <a href="" class="action">Mới nhất</a>
            <a href="">Gần tôi</a>
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
            <li v-for="store in stores" v-bind:key="store.storeID">
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
export default {
  name:'Home',
  components:{
        Header,
        Search,
        Navbar
      },
  data() {
    return {
      searchs:{
        searchKey: '',
        searchItems: []
      },
      stores: [],
      provinces:[],
      listStores:[]
    }
  },
  mounted(){
      const id = this.$route.params.id
      this.$http.get('https://localhost:44398/api/Store/GetAll/').then(response => {
            this.stores=response.data
      }),
     this.$http.get('https://localhost:44398/api/Province/GetAll').then(response => {
            this.provinces=response.data
      })
  },
  methods:{
    storeClicked (item) {
      this.$store.commit("SET_INFORID", item)
      this.$router.push({path: `/storeDetail`})
    },
    getType (index) {
      const type =[]
      this.$http.get('https://localhost:44398/api/BusinessType/GetById/' + index).then(response => {
            this.type = response.data;
      })
      return this.type[0].businessTypeName;
    },
    searchs(){
      this.$refs.form.searchs();
    }
  }
}
</script>

<style>
@import url('../../assets/css/style.css');
@import url('../../assets/css/bootstrap.min.css');
</style>
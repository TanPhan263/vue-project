<template>
  <div>
  <div class="slide">
    <div class="drop-slide">
      <div v-for="slide in listLiders" v-bind:key="slide.id" class="myslide">
        <a href="" class="picture"
          ><img src="image/foody-kens-restaurant.jpg"/></a>
      </div>
      <button id="next">&raquo;</button>
      <button id="prev">&laquo;</button>
    </div>
  </div>
  <div class="main">
    <div class="ship">
      <div class="menu-ship">
        <div class="hero">
          <img src="image/F.png" width="40" height="40" />
          <h2>Giao tận nơi</h2>
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
            <li><a href="">Vỉa hè</a></li>
          </ul>
        </div>
      </div>
      <div id="Giaotannoi" class="sub-menu-ship">
        <ul>
          <li v-for="store in stores" v-bind:key="store.storeID">
            <a href="">
              <img :src="stores.storePicture" width="205" height="150" />
              <div class="name-food">{{ store.storeName  }}</div>
              <div class="address-store">{{ store.storeAddress }}</div>
              <div class="intro">{{ store.businessTypeID }}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="promotion">
      <div class="menu-promotion">
        <div class="block">
          <img src="image/F.png" width="40" height="40" />
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
            <a href="">
              <img :src="store.storePicture" width="205" height="150" />
              <div class="name-food">{{ store.storeName }}</div>
              <div class="address-store">{{ store.storeAddress }}</div>
              <div class="intro">
                <img :src="store.storePicture" height="20" width="20" />
                <h5>{{ store.type }}</h5>
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
            <img src="image/F.png" width="25" height="25" />
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
                <div class="address-store">{{ store.storeAddress }}</div>
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
export default {
  name:'Home',
  data() {
    return {
      stores: [],
      listLiders: [
        {
          id: 1,
          src: 'image/foody-kens-restaurant.jpg'
        },
        {
          id: 2,
          src: 'image/foody-kens-restaurant.jpg'
        },
        {
          id: 3,
          src: 'image/foody-kens-restaurant.jpg'
        },
        {
          id: 4,
          src: 'image/foody-kens-restaurant.jpg'
        },
        {
          id: 5,
          src: 'image/foody-kens-restaurant.jpg'
        }
      ]
    }
  },
  mounted(){
      const id = this.$route.params.id
      this.$http.get('https://localhost:44398/api/Store/GetAll/').then(response => {
            this.stores =response.data
            this.userData = JSON.parse(this.userData)
    })
  }
}
</script>

<style>

</style>
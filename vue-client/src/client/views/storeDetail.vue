<template>
<div >
  <Header/>
  <Navbar/>
  <div class="pn-microsite">
    <div class="micro-content">
      <div class="micro-header clearfix">
        <div class="main-image fl_left">
          <div class="img" style="height: 275px">
            <a href="#">
              <img
                :src="storeOpen[0].storePicture"
                alt="foody-mobile.jpg"
                style="width: 488px; height: 275px; border: 0"
              />
            </a>
          </div>
        </div>
        <div class="main-information fl_left">
          <div class="res-common">
            <div class="breadcrum"></div>
            <div class="main-info-title">
              <span class="main-info-title-contracted fl_left">
                <span class="fas fa-check-circle"></span>
              </span>
              <h1 style="width: 600px" class="fl_left">{{storeOpen[0].storeName}}
              </h1>
              <div class="clearfix"></div>
              <div class="category">
                <div class="category-items fl_left" style="max-width: 200px">
                  <a href="#" title="category-items">{{storeOpen[0].businessTypeID}}</a>
                </div>
                <div class="category-cuisines fl_left">
                  <div class="cuisines-separator fl_left">-</div>
                  <div
                    class="cuisines-list fl_left"
                    style="
                      margin-right: 5px;
                      max-width: 150px;
                      padding-top: 2px;
                    "
                  >
                    <a href="#">{{storeOpen[0].businessTypeID}}</a>
                  </div>
                  <div
                    class="audiences fl_left"
                    style="max-width: 150px; margin-top: 3px"
                  >
                  </div>
                </div>
              </div>
            </div>
            <div class="res-summary-point"></div>
            <div class="disableSection">
              <div class="res-common-add">
                <span class="fas fa-location-arrow locationicon"></span>
                <span>
                  <a href="" target="_blank">
                    <span>{{storeOpen[0].storeAddress}}</span>
                  </a>
                </span>
              </div>
              <div
              ></div>
              <div class="res-common-price">
                <div class="micro-timesopen">
                  <span class="far fa-clock houricon"></span>
                  <span class="itsopen" title="Chưa mở cửa">Đang mở cửa</span>
                  <span> {{storeOpen[0].openTime}} | {{storeOpen[0].cLoseTime}}</span>
                  <span class="fas fa-exclamation-circle"></span>
                </div>
                <div class="res-common-minmaxprice">
                  <span class="fas fa-tag minmaxpriceicon"></span>
                  <span>300.000đ - 500.000đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="micro-main-menu fl_left">
      <div class="tool-bar">
        <ul class="list-tool">
          <li class="active">
            <a href=""
              >Thông tin quán
              <span
                class="fas fa-angle-right"
                style="float: right; font-size: 14px"
              ></span>
            </a>
          </li>
          <li>
            <a href=""
              >Thực đơn
              <span
                class="fas fa-angle-right"
                style="float: right; font-size: 14px"
              ></span>
            </a>
          </li>
          <li>
            <a href=""
              >Comment
              <span>555</span>
              <span
                class="fas fa-angle-right"
                style="float: right; font-size: 14px"
              ></span>
            </a>
          </li>
          <li>
            <a href=""
              >Xem trên Map
              <span>555</span>
              <span
                class="fas fa-angle-right"
                style="float: right; font-size: 14px"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="micro-right fl_right">
      <div class="right-tool-bar clearfix">
        <ul class="micro-act-btns">
          <li>
            <a href="">
              <i class="fas fa-phone"></i>
              Gọi điện thoại
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-bookmark"></i>
              Xem bản đồ
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-comment"></i>
              Xem ảnh
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-camera"></i>
              Xem đánh giá
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-share-alt"></i>
              Thêm vào yêu thích
            </a>
          </li>
        </ul>
      </div>

      <div
        class="micro-main-content"
        style="clear: both; position: static; min-height: 500px"
      >
        <div class="microsite-table-book">
          <div class="tb-title">
            <h2 style="font-size: 16px; padding: 5px 0; cursor: pointer">
              <a
                href=""
                title="Menu"
                target="_blank"
                style="color: #f37934"
                >Menu</a
              >
            </h2>
          </div>
          <div class="tb-offers-box">
            <div class="tb-content">
              <div v-for="dish in storeMenu" v-bind:key="dish.dish_ID" class="tb-offer-item">
                <div class="tb-item-left">
                  <img :src="dish.dishPicture" style="width: 50px; height: 50px; border: 0" />
                  <span
                    class="fas fa-angle-double-right"
                    style="color: #2aaf11"
                  ></span>
                </div>
                <div class="tb-item-mid" style="">
                  <a href="" style="color: #277bb9" class="tb-oi-time">
                    <span class="">{{dish.dishName}}</span>
                    <span class=""></span>
                  </a>
                  <a href="" class="tb-shorttitle">
                    <span>
                      20000 VND</span
                    >
                  </a>
                </div>
                <div class="tb-item-right">
                  <span class=""
                    >Ưu đãi không áp dụng ngày đang chọn.</span
                  >
                </div>
              </div>
              <!-- <div class="tb-offer-item">
                <div class="tb-item-left">
                   <img src="Image/foody-phuongnam.jpg" />
                  <span
                    class="fas fa-angle-double-right"
                    style="color: #2aaf11"
                  ></span>
                </div>
                <div class="tb-item-mid">
                  <a href="" style="color: #277bb9" class="tb-oi-time">
                    <span class="">Món ăn</span>
                    -
                    <span class=""></span>
                  </a>
                  <a href="" class="tb-shorttitle">
                    <span>
                      20000 VND</span
                    >
                  </a>
                </div>
                <div class="tb-item-right">
                  <span class=""
                    >Ưu đãi không áp dụng ngày đang chọn. Chọn ngày khác.</span
                  >
                </div>
              </div> -->
              <!-- <div class="tb-offer-item">
                <div class="tb-item-left">
                   <img src="Image/foody-phuongnam.jpg" />
                  <span
                    class="fas fa-angle-double-right"
                    style="color: #2aaf11"
                  ></span>
                </div>
                <div class="tb-item-mid">
                  <a href="" style="color: #277bb9" class="tb-oi-time">
                    <span class="">Món ăn</span>
                    -
                    <span class=""></span>
                  </a>
                  <a href="" class="tb-shorttitle">
                    <span>
                      20000 VND</span
                    >
                  </a>
                </div>
                <div class="tb-item-right">
                  <span class=""
                    >Ưu đãi không áp dụng ngày đang chọn. Chọn ngày khác.</span
                  >
                </div>
              </div>
              <div class="tb-offer-item">
                <div class="tb-item-left">
                   <img src="Image/foody-phuongnam.jpg" />
                  <span
                    class="fas fa-angle-double-right"
                    style="color: #2aaf11"
                  ></span>
                </div>
                <div class="tb-item-mid">
                  <a href="" style="color: #277bb9" class="tb-oi-time">
                    <span class="">Món ăn</span>
                    -
                    <span class=""></span>
                  </a>
                  <a href="" class="tb-shorttitle">
                    <span>
                      20000 VND</span
                    >
                  </a>
                </div>
                <div class="tb-item-right">
                  <span class=""
                    >Ưu đãi không áp dụng ngày đang chọn. Chọn ngày khác.</span
                  >
                </div>
              </div>
              <div class="tb-offer-item">
                <div class="tb-item-left">
                   <img src="Image/foody-phuongnam.jpg" />
                  <span
                    class="fas fa-angle-double-right"
                    style="color: #2aaf11"
                  ></span>
                </div>
                <div class="tb-item-mid">
                  <a href="" style="color: #277bb9" class="tb-oi-time">
                    <span class="">Món ăn</span>
                    -
                    <span class=""></span>
                  </a>
                  <a href="" class="tb-shorttitle">
                    <span>
                      20000 VND</span
                    >
                  </a>
                </div>
                <div class="tb-item-right">
                  <span class=""
                    >Ưu đãi không áp dụng ngày đang chọn. Chọn ngày khác.</span
                  >
                </div>
              </div> -->
            </div>
          </div>
        </div>

        <div class="microsite-gallery">
          <div class="microsite-professional-photo">
            <div class="microsite-box-heading">
              <a href="" style="color: #333">Hình ảnh từ khách hàng</a>
            </div>
            <div class="prof-photos-items">
              <div v-for="dish in storeMenu" v-bind:key="dish.dish_ID" class="microsite-professional-photo-item">
                <a href="">
                  <img
                    :src="dish.dishPicture"
                    alt="foody-albummax_.jpg"
                  />
                </a>
              </div>
              <!-- <div class="microsite-professional-photo-item">
                <a href="">
                  <img
                    src="Image/foody-albummax_.jpg"
                    alt="foody-albummax_.jpg"
                  />
                </a>
              </div>
              <div class="microsite-professional-photo-item">
                <a href="">
                  <img
                    src="Image/foody-albummax_.jpg"
                    alt="foody-albummax_.jpg"
                  />
                </a>
              </div>
              <div class="microsite-professional-photo-item">
                <a href="">
                  <img
                    src="Image/foody-albummax_.jpg"
                    alt="foody-albummax_.jpg"
                  />
                </a>
              </div>
              <div class="microsite-professional-photo-item">
                <a href="">
                  <img
                    src="Image/foody-albummax_.jpg"
                    alt="foody-albummax_.jpg"
                  />
                </a>
              </div>
              <div class="microsite-professional-photo-item">
                <a href="">
                  <img
                    src="Image/foody-albummax_.jpg"
                    alt="foody-albummax_.jpg"
                  />
                </a>
              </div>
              <div class="microsite-professional-photo-item">
                <a href="">
                  <img
                    src="Image/foody-albummax_.jpg"
                    alt="foody-albummax_.jpg"
                  />
                </a>
              </div>
              <div class="microsite-professional-photo-item">
                <a href="">
                  <img
                    src="Image/foody-albummax_.jpg"
                    alt="foody-albummax_.jpg"
                  />
                </a>
              </div>
              <div class="microsite-professional-photo-item">
                <a href="">
                  <img
                    src="Image/foody-albummax_.jpg"
                    alt="foody-albummax_.jpg"
                  />
                </a>
              </div>
              <div class="microsite-professional-photo-item">
                <a href="">
                  <img
                    src="Image/foody-albummax_.jpg"
                    alt="foody-albummax_.jpg"
                  />
                </a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Header from './containers/Header'
import Navbar from './containers/Navbar'
export default {
  name: 'storeDetail',
   beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.usersOpened = from.fullPath.includes('Homepage')
    })
  },
  data(){
    return{
      storeOpen: [],
      storeMenu:[],
      menuId: ''
    }
  },
  components:{
    Header,
    Navbar
  },
methods:{
    show(index){
      console.log(index)
    }
},
  mounted(){
    const id = this.$store.getters.inforID;
    this.$http.get('https://localhost:44398/api/Store/GetByID/' + id).then(response => {
            this.storeOpen =response.data
            this.$http.get('https://localhost:44398/api/Dish/GetByID/' +this.storeOpen[0].menuID).then(response => {
              this.storeMenu = response.data
    });
    });
  }
}
</script>

<style>
@import url('../../assets/css/style-0.css');
@import url('../../assets/css/style-1.css');
@import url('../../assets/css/reset.css');
</style>

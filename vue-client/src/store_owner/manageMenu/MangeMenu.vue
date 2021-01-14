<template>
  <CRow>
    <CCol >
      <CCard class="center_div" style="padding: 20px;">
        <CCardHeader>
           <div class="row" style="float:left;">
            <h2>Menus</h2>
          </div>
          <div class="row" style="float:right;">
            <CButton color="primary" @click="active=true">Thêm Món</CButton>
          </div>
            <transition v-if="active">
              <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">

                <div class="modal-header">
                  <slot name="header">
                  <h3>Thêm món ăn</h3>
                  </slot>
                </div>

                <div class="modal-body">
                  <slot name="body">
                    <CInput
                    label="Tên món ăn"
                      v-model ="dishName"
                    />
                     <CInput
                       label="Giá"
                      v-model="dishPrice"
                    />
                    <p>Loại món ăn</p>
                    <select
                        id="province"
                        style="width:509px;height:35px;border-radius:4px; border: 1px solid #D3D3D3; margin-bottom: 10px;"
                        class="country fl_left"
                        vertical
                        v-model="dishTypeSelected"
                        placeholder="Loại món ăn"
                        >
                        <option >Loại món ăn</option>
                        <option v-for="dish in dishTypes" v-bind:key="dish.dishType_ID" :value="dish.dishType_ID">
                            {{dish.dishyTypeName}}
                        </option>
                    </select>
                    <div class="row" style="margin-left: 0px;">
                    </div>
                        <p>Hình ảnh món ăn</p>
                        <div class="row">
                        <input type="file"  @change="previewImage">
                        </div>
                      </slot>
                    </div>

                <div class="modal-footer">
                  <slot name="footer">
                  <button class="btn btn-danger" @click="active=false">
                    Close
                  </button>
                   <button class="btn btn-primary" @click="onUpload">Add </button>
                  </slot>
                </div>
                </div>
              </div>
              </div>
            </transition>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            border
            striped
            small
            fixed
            :items="menus"
            :items-per-page="10"
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >
            <template #status="data">
              <td>
                <CBadge :color="getBadge(data.item.status)">
                  {{data.item.status}}
                </CBadge>
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import firebase from 'firebase'
import StoreService from '@/services/StoreService.js';
export default {
  props:{
    menuID: String,
  },
  data(){
    return{
      user:'',
      storeOpened:[],
      menus:[],
      //add dish
      dishName:'',
      dishPrice:'',
      dishPicture:null,
      imageData: null,
       fields: [
        { key: 'Mã món ăn', label: 'ID', _classes: 'font-weight-bold' },
        { key: 'storeAddress' },
        { key: 'storeName' },
        { key: 'openTime' },
        { key: 'cLoseTime' },
        { key: 'ratePoint' },
        { key: 'provinceID' }
      ],
      dishTypes:[],
      dishTypeSelected: '',
      activePage:1,
      active: false
    }
  },
    methods:{
        rowClicked (item) {
            this.$router.push({path: `manageMenu/${item.dish_ID}`})
        },
        async getMenus(id){
            this.storeOpened= await StoreService.getByUser(id,localStorage.getItem('isAuthen'))
            this.$http.get('https://localhost:44398/api/Dish/GetByIDMenu?id=' + this.menuID).then(response => {
              this.menus = response.data
          });
        },
        async getDishType(){
          this.dishTypes = await StoreService.getDishType();
        },
        previewImage(event){
          this.dishPicture=null;
          this.imageData= event.target.files[0];
        },
        onUpload(){
          this.dishPicture=null;
          const storageRef = firebase.storage().ref(`image/${this.imageData.name}`).put(this.imageData);
          storageRef.on(`state_change`, snapshot => {
          },error =>{console.log(error.message)},
          ()=> {
            storageRef.snapshot.ref.getDownloadURL().then((url) => {this.dishPicture=url;})
            }
          )
          this.addDish();
        },
        async addDish(){
          const dish = {
            dishName: this.dishName,
            dishPrice: this.dishPrice,
            dishPicture: this.dishPicture,
            dishType_ID: this.dishTypeSelected,
            menu_ID: this.storeOpened[0].menuID
          }
          const respone = await StoreService.addDish(dish,localStorage.getItem('isAuthen'));
          alert(respone)
        },
        pageChange (val) {
        this.$router.push({ query: { page: val }})
    }
    },
    mounted(){
      this.user=localStorage.getItem('userInfor');
      this.user= JSON.parse(this.user);
      this.getMenus(this.user.userID);
      this.getDishType();
      console.log(this.menus);
    }
}
</script>

<style>
@import url('../../assets/css/comments.css');
</style>
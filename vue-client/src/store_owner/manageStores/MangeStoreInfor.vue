<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          THÔNG TIN QUÁN
        </CCardHeader>
         <CCardBody>
            <CForm>
              <CInput
                label="Ngày đăng kí"
                horizontal
                value="1/1/2020"
              disabled
              />
              <CInput
                label="Tên quán"
                :value=" storeOpened[0].storeName"
                horizontal
                autocomplete="name"
               
              />
              <CInput
                label="Địa chỉ"
                :value=" storeOpened[0].storeAddress"
                horizontal
            
              ></CInput>
              <CInput
              :value="storeOpened[0].openTime"
                label="Giờ mở cửa"
                horizontal
                
              />
               <CInput
               :value="storeOpened[0].cLoseTime"
                label="Giờ đóng cửa"
                horizontal
           
              />
              <CInput
               :value=" storeOpened[0].businessTypeID"
                label="Loại hình quán"
                horizontal
              />
            
            </CForm>
          </CCardBody>
      </CCard>
    </CCol>
    <CCol md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Hình ảnh của cửa hàng</strong>
        </CCardHeader>
        <CCardBody>
          <CCarousel
            arrows
            indicators
            animate
            height="252px"
          >
            <CCarouselItem
            height="200px"
            :image="storeOpened[0].storePicture"
            />
          </CCarousel>
        </CCardBody>
        <CCardFooter>
          <CRow form class="form-group">
          <CButton class="btn_left" color="danger" @click="goBack">Back</CButton>
          <CButton class="btn_right" color="primary" @click="goBack">Update</CButton>
           </CRow>
        </CCardFooter>
      </CCard>
    </CCol>
     <MangeMenu v-bind:menuID="menuID"/>
  </CRow>
</template>

<script>
import MangeMenu from '../manageMenu/MangeMenu'
import StoreService from '@/services/StoreService.js';
export default {
  name: 'manageStore',
  components:{
    MangeMenu
  },
  data () {
    return {
      user: '',
      menuID: '',
      storeOpened:[],
    }
  },
  methods: {
    goBack() {
      this.usersOpened ? this.$router.go(-1) : this.$router.push({path: '/manageStores'})
    },
    async getStore(id){
      this.storeOpened = await StoreService.getByID(id);
      this.menuID = this.storeOpened[0].menuID;
      console.log(this.menuID)
    }
  },
   mounted(){
    const id = this.$route.params.id;
    this.getStore(id);
  }
}
</script>
<style>
.btn_left{
  margin-right: 260px;
  width:100px;
}
.btn_right{
  width: 100px;
}
</style>

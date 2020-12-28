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
                label="Store ID"
                horizontal
                :value ="storeID"
                disabled
              />
              <CInput
                label="Tên quán"
              
                horizontal
                autocomplete="name"
                v-model="storeName"
              />
              <CInput
                label="Chủ quán"
              disabled
                horizontal
                autocomplete="name"
                v-model="storeOwnerName"
              />
              <CInput
                label="Địa chỉ"
             
                horizontal
                v-model="storeAddress"
              ></CInput>
              <CInput
                label="Longtitude"
             
                horizontal
                v-model="storeLat"
              ></CInput>
              <CInput
                label="Latitude"
             
                horizontal
                v-model="storeLong"
              ></CInput>
              <CInput
              
                label="Giờ mở cửa"
                horizontal
                v-model="openTime"
              />
               <CInput
               
                label="Giờ đóng cửa"
                horizontal
                v-model="closeTime"
              />
              <CInput
             
                label="Loại hình quán"
                horizontal
               v-model="storeStype"
              />
               <CInput
             
                label="Rating"
                horizontal
               v-model="storeRate"
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
            indicators
            animate
            height="333px"
          >
            <CCarouselItem
              height="333px"
              :image="storePicture"
             
            />
          </CCarousel>
        </CCardBody>
        <CCardFooter>
          <CRow form class="form-group">
            <CCol tag="label" sm="10" class="col-form-label">
              Ban store: 
            </CCol>
           <CSwitch 
              class="mr-1"
              color="danger"
              :checked="true"
              shape="pill"
            />
            </CRow>
           <CSelect
            label="Ban time"
            horizontal
            :options="options"
            placeholder="Please select"
          />
          <CRow form class="form-group">
          <CButton class="btn_left" color="danger" @click="goBack">Back</CButton>
          <CButton class="btn_right" color="primary" @click="updateStore">Update</CButton>
           </CRow>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { loadOptions } from '@babel/core'
import StoreService from '../../services/StoreService'
import storeData from './StoreData'
export default {
  name: 'Store',
  data () {
    return {
      options: ['1 week', '1 month', 'forever'],
      storeID: '',
      storeName: '',
      storeAddress: '',
      storeOwner: '',
      storeOwnerName: '',
      openTime: '',
      closeTime: '',
      imageData: null,
      storePicture: null,
      storeLat:'',
      storeLong:'',
      storeProvince:'',
      storeStype: '',
      storeRate: ''
    }
  },
  computed: {
    
    visibleData () {
      return this.userData.filter(param => param.key !== 'username')
    },
    username () {
      return this.userData.filter(param => param.key === 'username').value
    }
  },
  methods: {
    goBack() {
      this.usersOpened ? this.$router.go(-1) : this.$router.push({path: '/store'})
    },
    deleteStore(){

    },
    banStore(){

    },
    async updateStore(){
      const id = this.$route.params.id
      const store ={
        storeAddress: this.storeAddress,
        storeName:this.storeName,
        storePicture: this.storePicture,
        openTime: this.openTime,
        cLoseTime: this.closeTime,
        userID: this.storeOwner,
        provinceID: this.storeProvince,
        businessTypeID: this.storeStype,
        ratePoint: this.storeRate
      }
      const response = await StoreService.updateStore(id, store, localStorage.getItem('isAuthen'));
      alert(response)
    },
    getStoreOwner() {
      this.$http.get('https://localhost:44398/api/User/GetByID?id='+this.storeOwner,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('isAuthen')}`}}).then(response => {
            this.storeOwnerName = response.data[0].userName;
            console.log( this.storeOwnerName)
      })
      
      return this.user
    },
  },
   mounted(){
      const id = this.$route.params.id
      this.$http.get('https://localhost:44398/api/Store/GetByID?id='+id,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('isAuthen')}`}}).then(response => {
            this.storeName = response.data[0].storeName;
            this.storeAddress = response.data[0].storeAddress;
            this.storePicture = response.data[0].storePicture;
            this.storeProvince = response.data[0].provinceID;
            this.storeRate = response.data[0].ratePoint;
            this.storeStype = response.data[0].businessTypeID;
            this.storeOwner = response.data[0].userID;
            this.openTime = response.data[0].openTime;
            this.closeTime = response.data[0].cLoseTime;
            this.storeID =  response.data[0].storeID;
            this.getStoreOwner();                  
    })
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

<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Store ID id:  {{ $route.params.id }}
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
                 disabled
                horizontal
                autocomplete="name"
                :value="storeOpened[0].storeName"
              />
              <CInput
                label="Địa chỉ"
                 disabled
                horizontal
                :value="storeOpened[0].storeAddress"
              ></CInput>
              <CInput
               disabled
                label="Giờ mở cửa"
                horizontal
                :value="storeOpened[0].openTime"
              />
               <CInput
                disabled
                label="Giờ đóng cửa"
                horizontal
                :value="storeOpened[0].cLoseTime"
              />
              <CInput
              disabled
                label="Loại hình quán"
                placeholder="Enter your email"
                type="email"
                horizontal
                autocomplete="email"
                required
                was-validated
               :value="storeOpened[0].provinceID"
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
              captionHeader="First Slide"
              :image="storeOpened[0].storePicture"
              captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
            />
            <CCarouselItem
              captionHeader="Blank page"
              :image="{ placeholderColor: 'grey' }"
              captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
            />
            <CCarouselItem
            image="https://picsum.photos/1024/480/?image=54"
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
          <CButton class="btn_right" color="primary" @click="goBack">Update</CButton>
           </CRow>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import storeData from './StoreData'
export default {
  name: 'Store',
  data () {
    return {
      storeOpened:[],
      options: ['1 week', '1 month', 'forever'],
    }
  },
  computed: {
    fields () {
      return [
        { key: 'storeID', label: this.username, _style: 'width:150px'},
        { key: 'storeAddress', label: '', _style: 'width:150px;' },
        { key: 'storeName', label: '', _style: 'width:150px;' },
        { key: 'openTime', label: '', _style: 'width:150px;' },
        { key: 'closeTime', label: '', _style: 'width:150px;' },
        { key: 'ratePoint', label: '', _style: 'width:150px;' },
      ]
    },
    userData () {
      const id = this.$route.params.id
      const user=null
      this.$http.get('https://localhost:44340/api/User/GetbyId/'+id).then(response => {
            user = response.data
      })
      return this.user
    },
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
    }
  },
   mounted(){
      const id = this.$route.params.id
      this.$http.get('https://localhost:44398/api/Store/GetByID/'+id).then(response => {
            this.storeOpened =response.data
            this.storeOpened = JSON.parse(this.userData)
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

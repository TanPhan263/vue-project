<template>
 <div class="d-flex align-items-center min-vh-100" style="background-image: url('https://wallpaperaccess.com/full/1631410.jpg');">
  <CContainer fluid v-if="next===false">
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <h1> Store Register</h1>
                <p class="text-muted">Create your account to manage your store</p>
                <CInput
                  placeholder="Username"
                  autocomplete="username"
                  v-model ="name"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Email"
                  autocomplete="email"
                  prepend="@"
                  v-model="mail"
                />
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="new-password"
                  v-model="pass"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  invalid-feedback="Your password is not correct"
                  autocomplete="new-password"
                  class="mb-4"
                  v-model="pass2"
                  :is-valid="checkPass"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CButton v-on:click="next=true" color="success" block>Tiếp theo</CButton>

              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  <CRow v-if="next===true" style="margin: 0 auto;">
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          THÔNG TIN QUÁN
        </CCardHeader>
         <CCardBody>
            <CForm>
              <CInput
                label="Tên quán"
                
                horizontal
                autocomplete="name"
               
              />
              <div class="row" style="margin-left: 0px;">
                <p>Tỉnh</p>
                <select
                    id="province"
                    style="width:225px;height:35px;border-radius:4px;margin-left: 49px; border: 1px solid #D3D3D3; margin-bottom: 10px;"
                    class="country fl_left"
                    vertical
                    v-model="provinceSelected"
                    placeholder="Địa điểm"
                    >
                    <option v-for="pro in provinces" v-bind:key="pro.provinceID" :value="pro.provinceID">
                        {{pro.provinceName}}
                    </option>
                </select>
                </div>
              <CInput
                label="Địa chỉ"
                horizontal
                
              ></CInput>
              <CInput
              
                label="Giờ mở"
                horizontal
               
              />
               <CInput
               
                label="Giờ đóng"
                horizontal
               
              />
             <div class="row" style="margin-left: 0px;">
                <p>Loại</p>
                <select
                    id="province"
                    style="width:225px;height:35px;border-radius:4px;margin-left: 49px; border: 1px solid #D3D3D3; margin-bottom: 10px;"
                    class="country fl_left"
                    vertical
                    v-model="bussinessTypeSelected"
                    placeholder="Địa điểm"
                    >
                    <option v-for="busi in bussinessType" v-bind:key="busi.businessTypeID" :value="busi.businessTypeID">
                        {{busi.businessTypeName}}
                    </option>
                </select>
                </div>
            
            </CForm>
          </CCardBody>
      </CCard>
    </CCol>
    <CCol lg="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong>CHỌN ẢNH ĐẠI DIỆN</strong>
        </CCardHeader>
        <CCardBody>
             <CInputFile
                label="Chọn ảnh"
                horizontal
                custom
                size="sm"
              />
        </CCardBody>
         <CCardFooter>
               <CButton v-on:click="next=false" color="danger" block>Trở lại</CButton>
                <CButton v-on:click="next=false" color="success" block>Đăng kí</CButton>
      </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
 
 
 </div>
</template>

<script>
import ProvinceService from '@/services/ProvinceService.js'
export default {
  name: 'Store',
  data () {
    return {
      
      next: true,
      provinces:'',
      bussinessType:'',
    
//Store
      storeName:'',
      provinceSelected:'',
      bussinessTypeSelected:'',
      Store_address:'',
      picture:'',
      openTime:'',
      closeTime:'',
      storeType:'',
      id: '',
//User
      name: '',
      address: '',
      phone: '',
      birth: '',
      mail: '',
      avt: '',
      pass: '', 
      pass2:'',
      sex: '',
      type: '-MO5VWchsca2XwktyNAw' ,
    }
  },
  methods: {
    signUpStore(){
      try {
        if(this.checkPass())
        {
          const credentials = {
            userName: this.name,
            phone: this.phone,
            address: this.address,
            password: this.pass,
            email: this.mail,
            picture: this.avt,
            sex: this.sex,
            birthday: this.birth,
            userTypeID: this.type
          };
          const credentialsStore = {
            storeAddress: this.Store_address,
            storeName: this.storeName,
            storePicture:this.picture,
            openTime: this.openTime,
            cLoseTime: this.closeTime,
            userID: "-MO5VBnzdGsuypsTzHaV",
            provinceID: this.provinceSelected,
            menuID: '',
            businessTypeID: this.bussinessTypeSelected,
            ratePoint: ''
          };
          axios.post("https://localhost:44398/api/User/RegisterUser", credentials).then(respone =>{ 
              alert(respone.data)})
        }else 
        alert("Vui long nhap dung password")
      }catch (error) {
        this.msg = error.response.data.msg;
        alert(msg)
      }
    },
    goBack() {
      this.usersOpened ? this.$router.go(-1) : this.$router.push({path: '/Homepage'})
    },
     checkPass(){
       if(this.pass == this.pass2){
        return true}
       else {
        return false
       }
    }
  },
   mounted(){
       this.next = false;
        this.$http.get('https://localhost:44398/api/Province/GetAll').then(response => {
            this.provinces = response.data
      })
      this.$http.get('https://localhost:44398/api/BusinessType/GetAll').then(response => {
            this.bussinessType = response.data
      })
  }
}
</script>
<style>
.btn_left{
  width:100px;
}
.btn_right{
  width: 100px;
}
</style>

<template>
    <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <strong>Thông tin Admin</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                label="Id user"
                placeholder="Disabled"
                horizontal
                value=''
                v-model="id"
                disabled
              />
              <CInput
                label="Họ tên"
                value=''
                horizontal
                autocomplete="name"
                 v-model="name"
              />
              <CInput
                label="Địa chỉ"
                value=''
                horizontal
                v-model="address"
              />
              <CInput
                label="Số điện thoại"
                horizontal
                value=''
                v-model="phone"
              />
              <CInput
                label="Ngày sinh"
                type="date"
                horizontal
                :value='birth'
                v-model="birth"
              />
              <CInput
                label="Email "
                description="Please enter your email"
                placeholder="Enter your email"
                type="email"
                horizontal
                autocomplete="email"
                required
                was-validated
                value=''
                v-model="mail"
              />
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton v-on:click="update"  class="btn_submit" type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton  class="btn_back" type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Back</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol md="6">
        <CCard>
          <CCardBody>
            <CForm>
                <div class="center_div">
                <img  v-on:click="changeAvt=!changeAvt"
                    :src="avt"
                    class="c-avatar-img "
                />
                 <CCardHeader>
                    <strong class="center_div" style="margin-left: 20px">Tên admin nè</strong>
                </CCardHeader>
                </div>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton v-on:click="changeAvt=!changeAvt" class="btn_right" type="submit" color="primary">Change avatar</CButton>
            <CInputFile
                v-if="changeAvt"
                label="Chọn ảnh"
                horizontal
                custom
                size="sm"
              />
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
</template>

<script>
import axios from 'axios';
import UserService from '@/services/UserService.js';
const baseUrl = ""
export default {
    name: 'update',
    data(){
        return{
            changeAvt: false,
            id: '',
            name: '',
            address: '',
            phone: '',
            birth: '',
            mail: '',
            avt: '',
            pass: '', 
            sex: '',
            type: '',
        };
    },
    methods: {
        uploadfile(){
            changeAvt = !changeAvt
        },
        update(){
          const credentials = {
          userID: this.id,
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
          axios.post("https://localhost:44398/api/User/EditByID?token=" + localStorage.getItem("isAuthen") , credentials).then(respone =>{ 
            alert(respone.data)})
        }
    },
    mounted() {
          this.$http.get("https://localhost:44398/api/User/GetByID?token=" + localStorage.getItem("isAuthen")).then(respone =>{
            this.id= respone.data[0].userID
            this.name=respone.data[0].userName
            this.phone=respone.data[0].phone
            this.address= respone.data[0].address
            this.mail=respone.data[0].email
            this.birth=respone.data[0].birthday
            this.avt= respone.data[0].picture
            this.pass= respone.data[0].password
            this.type= respone.data[0].userTypeID
            this.sex= respone.data[0].sex
          })
    }
}
</script>

<style>
.center_div{
    margin: 0 auto; 
    width: 30%;
}
.btn_left{
  margin-right: 257px;
  width:200px;
}
.btn_right{
    margin-left: 190px ;
    width: 200px;
    margin-bottom: 50px;
}
.btn_submit{
  margin-right: 255px;
  width:100px;
}
.btn_back{
  width: 100px;
}
</style>
<template>
    <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <strong>Thông tin tài khoản</strong>
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
                type="text"
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
            <CForm  style="width:100%">
                <div class="center_div">
                <img  v-on:click="changeAvt=!changeAvt"
                    :src="picture"
                    style="border-radius:50%; height:120px;width:150px;"
                />
                 <CCardHeader style="text-align:center;">
                    <strong >{{name}}</strong>
                </CCardHeader>
                </div>
            </CForm>
          </CCardBody>
          <CCardFooter class="center_div">
            <CButton v-on:click="changeAvt=!changeAvt" type="submit" color="primary" style="width:120px;">Change avatar</CButton>
            <div v-if="changeAvt" class="center_div" style="margin-top:20px;">
            <input
                type="file"
                @change="previewImage"
              />
              <CButton @click="onUpload" type="submit" color="primary">Upload</CButton>
              <div class="row">
                <p v-if="uploadValue>0">progress: {{uploadValue.toFixed()+ "%"}}</p>
              </div>
            </div>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios';
import UserService from '@/services/UserService.js';
const baseUrl = ""
export default {
    name: 'update',
    data(){
        return{
            imageData: null,
            picture: null,
            uploadValue: 0,
            changeAvt: false,
            id: '',
            name: '',
            address: '',
            phone: '',
            birth: '',
            mail: '',
            pass: '', 
            sex: '',
            type: '',
        };
    },
    methods: {
        uploadfile(){
            changeAvt = !changeAvt
        },
        previewImage(event){
          this.uploadValue=0;
          this.picture=null;
          this.imageData= event.target.files[0];
        },
        onUpload(){
          this.picture=null;
          const storageRef = firebase.storage().ref(`image/${this.imageData.name}`).put(this.imageData);
          storageRef.on(`state_change`, snapshot => {
            this.uploadValue=(snapshot.bytesTransfered/snapshot.totalBytes)*100;
          },error =>{console.log(error.message)},
          ()=> {
            this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {this.picture=url;})
            }
          )
          this.update();
        },
        update(){
          console.log(this.picture);
          const credentials = {
          userID: this.id,
          userName: this.name,
          phone: this.phone,
          address: this.address,
          password: this.pass,
          email: this.mail,
          picture: this.picture,
          sex: this.sex,
          birthday: this.birth,
          userTypeID: this.type
          };
          axios.post("https://localhost:44398/api/User/EditByID" , credentials ,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('isAuthen')}`}}).then(respone =>{ 
            alert(respone.data)})
        }
    },
    mounted() {
          this.$http.get("https://localhost:44398/api/User/GetByID" , { headers: {"Authorization" : `Bearer ${localStorage.getItem('isAuthen')}`}}).then(respone =>{
            this.id= respone.data[0].userID
            this.name=respone.data[0].userName
            this.phone=respone.data[0].phone
            this.address= respone.data[0].address
            this.mail=respone.data[0].email
            this.birth=respone.data[0].birthday
            this.picture= respone.data[0].picture
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
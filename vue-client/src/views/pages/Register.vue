<template>
  <div class="d-flex align-items-center min-vh-100" style="background-image: url('https://wallpaperaccess.com/full/1631410.jpg');">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
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
                >{{ pass }}
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
                <CButton v-on:click="signUp" color="success" block>Create Account</CButton>
              </CForm>
            </CCardBody>
            <CCardFooter class="p-4">
              <p class="text-muted">or login with</p>
              <CRow>
                <CCol col="6">
                  <CButton block color="facebook">
                    Facebook
                  </CButton>
                </CCol>
                <CCol col="6">
                  <CButton block color="twitter">
                    Twitter
                  </CButton>
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
// import AuthService from '@/services/AuthService.js';
import axios from 'axios';
export default {
  name: "Register",
  data() {
    return {
            id: '',
            name: '',
            address: '',
            phone: '',
            birth: '',
            mail: '',
            avt: '',
            pass: '', 
            pass2:'',
            sex: '',
            type: '-MO5VYNnWIjXtvJO4AXi' ,
    };
  },
  methods: {
    signUp() {
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
          axios.post("https://localhost:44398/api/User/RegisterUser", credentials).then(respone =>{ 
              alert(respone.data)})
        }else 
        alert("Vui long nhap dung password")
      }catch (error) {
        this.msg = error.response.data.msg;
        alert(msg)
      }
    },
    checkPass(){
       if(this.pass == this.pass2){
        return true}
       else {
        return false
       }
    }
  }
};
</script>

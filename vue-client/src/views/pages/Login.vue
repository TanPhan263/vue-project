<template>
  <div
    class="c-app flex-row align-items-center"
    style="
      background-image: url('https://wallpaperaccess.com/full/1631410.jpg');
    "
  >
    <CContainer>
  <div v-if="show" class="alert-red">
  <span class="closebtn" @click="show=false">&times;</span> {{ mgs_err }}
  </div>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <img
                    class="imglogo"
                    src="https://ngolongnd.net/wp-content/uploads/2020/03/ngolongnd_foodylogo1.png"
                    alt=""
                  />
                  <p class="text-muted">Sign In to your account</p>
                  <CInput
                    placeholder="Email"
                    autocomplete="email"
                    v-model="username"
                  >
                    <template #prepend-content
                      ><CIcon name="cil-user"
                    /></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                    v-model="password"
                  >
                    <template #prepend-content
                      ><CIcon name="cil-lock-locked"
                    /></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton
                        @click="login"
                        color="primary"
                        class="px-4"
                        >Login</CButton
                      >
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0" href="/forgetpass"
                      >Forgot password?</CButton
                      >
                      <CButton color="link" class="d-lg-none"
                        >Register now!</CButton
                      >
                    </CCol>
                  </CRow>
                  <br />
                  <p class="px-0">or login with:</p>
                  <CButton class="btnBrand" color="facebook"
                    ><CIcon name="cib-facebook" />
                    <span>facebook</span></CButton
                  >
                  <CButton class="btnBrand" color="twitter"
                    ><CIcon name="cib-twitter" /> <span>twitter</span></CButton
                  >
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              style="background: #321fdb"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Sign up</h2>
                <p>
                  Tạo tài khoản mới để cập nhật những quán ăn mới nhất cũng như
                  những trải nghiệm tốt nhất!!!
                </p>
                <CButton href="/register" color="light" variant="outline" size="lg">
                  Register Now!
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService.js';
import UserService from '@/services/UserService.js';

const baseUrl ='https://localhost:44398/api/User/';
export default {
  name: "Login",
  data() {
    return { 
      show: false,
        username: "",
        password: "",
        mgs_err:'',
        role: []
    }
  },
  methods: {
    async login() {
      if(this.check()){
        try {
          const credentials = {
            email: this.username,
            password: this.password
          };
          const response = await AuthService.login(credentials);
          const token=response;
          console.log(token.token)
          const response2 = await UserService.getInfo(token.token);
          localStorage.setItem('isAuthen',token.token);
          localStorage.setItem('userInfor',JSON.stringify(response2[0]));
          const role = await AuthService.getRole(token.token);
          if(role.userTyleID == '-MO5VBnzdGsuypsTzHaV' || role.userTyleID == '-MO5VWchsca2XwktyNAw'   )
          {
            this.$router.push('/');
          }else if(role.userTyleID == '-MO5VYNnWIjXtvJO4AXi' ){
            this.$router.push('/Homepage');
          }
          else this.$router.push('/login');
        } catch (error) {
          this.show=true;
          this.mgs_err = 'Sai tên đăng nhập hoặc password';
        }
      }
      else{
        this.show=true;
        this.mgs_err='Bạn chưa nhập password hoặc email';
        return;
      }
    },
    check(){
      if(this.username == '' || this.password == '')
        return false;
      return true;
    },
    reset(){
      this.username= "";
      this.password= "";
    }
  }
};
</script>
<style>
@import url('../../assets/css/alert.css');
</style>

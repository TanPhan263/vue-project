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
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Email"
                  autocomplete="email"
                  prepend="@"
                />
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="new-password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  autocomplete="new-password"
                  class="mb-4"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CButton color="success" block>Create Account</CButton>
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
export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: '',
      password_repeat: '',
      msg: ''
    };
  },
  // methods: {
  //   async signUp() {
  //     try {
  //       const credentials = {
  //         username: this.username,
  //         password: this.password,
  //         password_repeat: this.password_repeat
  //       };
  //       const response = await AuthService.signUp(credentials);
  //       this.msg = response.msg;
  //       this.$router.push('/');
  //     } catch (error) {
  //       this.msg = error.response.data.msg;
  //     }
  //   }
  // }
};
</script>

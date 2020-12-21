<template>
<CRow>
       <CCol md="6">
        <CCard>
          <CCardHeader>
            <strong>Thông tin người dùng</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                label="Id user"
                horizontal
                :value="userData[0].userID"
                disabled
              />
              <CInput
                label="Họ tên"
                 disabled
                horizontal
                autocomplete="name"
                :value="userData[0].userName"
              />
              <CInput
                label="Địa chỉ"
                 disabled
                horizontal
                :value="userData[0].address"
              ></CInput>
              <CInput
              disabled
                label="Số điện thoại"
                horizontal
                value="12313"
              />
              <CInput
              disabled
                label="Ngày sinh"
                
                horizontal
              :value="userData[0].birthday"
              />
               <CInput
                disabled
                label="Quyền"
                horizontal
                :value="userAuthor(userData[0].userTypeID)"
              />
              <CInput
              disabled
                label="Email "
                placeholder="Enter your email"
                type="email"
                horizontal
                autocomplete="email"
                required
                was-validated
               :value="userData[0].email"
              />
            
            </CForm>
          </CCardBody>
          <CCardFooter>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol md="6">
        <CCard>
          <CCardBody>
            <CForm>
                <div class="center_div">
                <img
                    :src="userData[0].picture"
                    class="c-avatar-img "
                />
                </div>
                <CRow form class="form-group">
            <CCol tag="label" sm="10" class="col-form-label">
              Ban acount: 
            </CCol>
           <CSwitch 
              class="mr-1"
              color="danger"
              :checked="false"
              shape="pill"
            /></CRow>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton  class="btn_left" type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton  class="btn_right" type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Back</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
</template>
            
<script>
const url = 'https://localhost:44340/api/User/GetbyId/'
import UserService from '@/services/UserService.js'
export default {
  name: 'User',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.usersOpened = from.fullPath.includes('users')
    })
  },
  data () {
    return {
      author: 'Admin',
      userData:[],
      options: [ 'User', 'Store Owner', 'Admin'],
    };
  },
  computed: {
  },
  methods: {
    goBack() {
      this.usersOpened ? this.$router.go(-1) : this.$router.push({path: '/users'})
      },
    userAuthor(index){
      switch(index)
      {
        case 1: this.author = 'User';
        break;
        case 2: this.author ='Store Owner'
        break;
        case 3: this.author ='Admin'
        break;
      }
      return this.author
    }
  },
   mounted(){
      const token = localStorage.getItem('isAuthen');
      const id = this.$route.params.id;
      this.userData = UserService.getInfo(token);
  }
  
}
</script>
<style>
.btn_left{
  margin-right: 250px;
  width:100px;
}
.btn_right{
  width: 100px;
}
.center_div{
    margin: 0 auto; 
    width: 30%;
}
</style>
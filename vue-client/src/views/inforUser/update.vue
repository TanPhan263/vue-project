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
              />{{ id }}
              <CInput
                label="Họ tên"
                value=''
                horizontal
                autocomplete="name"
              />
              <CInput
                label="Địa chỉ"
                value=''
                horizontal
              />
              <CInput
                label="Số điện thoại"
                horizontal
                value=''
              />
              <CInput
                label="Ngày sinh"
                type="date"
                horizontal
                value=''
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
              />
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton v-on:click="mounted()"  class="btn_submit" type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
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
                    src="img/avatars/6.jpg"
                    class="c-avatar-img "
                />
                 <CCardHeader>
                    <strong class="center_div">Tên admin nè</strong>
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
const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";
export default {
    name: 'update',
    data(){
        return{
            changeAvt: false,
            id: 'Hello',
            Userinfo: [{
                id : '',
                name: '',
                address: '',
                img: '',
                phone: '',
                birth:'',
                }
            ]
        };
    },
    methods: {
        uploadfile(){
            changeAvt = !changeAvt
        },
         mounted() {
          this.$http.get(url).then(response => {
            this.id = response.data
          })
        }
    },
   
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
    margin-left: 130px ;
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
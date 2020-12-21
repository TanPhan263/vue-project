<template>
<div
    class="c-app flex-row align-items-center"
    style="
      background-image: url('https://wallpaperaccess.com/full/1631410.jpg'); "
  >
  <CRow class="center_div col-md-4">
  <CCard>
    <CCardHeader> <strong>Quên mật khẩu</strong></CCardHeader>
    <CForm novalidate>
      <CCardBody>
        <CInput
          type="email"
          description="Please enter your email."
          autocomplete="email"
          label="Email"
          placeholder="Enter Email..."
          required
          v-model="email"
          was-validated
        />
      </CCardBody>
      <CCardFooter>
        <CButton @click="sendCode" class="center_div" size="sm" color="primary"
          ><CIcon name="cil-check-circle"/> Send code</CButton
        >
      </CCardFooter>
    </CForm>
    <CForm >
     <CCardBody>
        <CInput
            label="Enter the code that send to your email"
            valid-feedback="Input is valid."
            invalid-feedback="Please provide at least 4 characters."
            placeholder="Valid value"
            :is-valid="validator"
            v-model="code2"
            />
        <CInput
          type="password"
          description="Please enter your password."
          autocomplete="current-password"
          label="Password"
          placeholder="Enter Password..."
          :is-valid="validator_pass"
          v-model="pass"
        />
      </CCardBody>
      <CCardFooter>
        <CButton @click="isValid" type="submit" class="btn_left" size="sm" color="primary"
          ><CIcon name="cil-check-circle" /> Change</CButton
        >
        <CButton class="btn_right" type="reset" size="sm" color="danger"
          ><CIcon name="cil-ban" />Cancle</CButton
        >
      </CCardFooter>
    </CForm>
  </CCard>
</CRow>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            email:'',
            code: '',
            pass: '',
            code2: '',
        }
    },
 methods: {
    validator (val) {
      return val ? val.length >= 4 : false
    },
    validator_pass (val) {
      return val ? val.length >= 8 : false
    },
    sendCode(){
        axios.post("https://localhost:44398/api/User/ForgetPass?Email="+ this.email).then(respone =>{ 
            this.code=respone.data.code;
            console.log(this.code)});
    },
    isValid(){
        if(this.code== this.code2)
          { try{ axios.post("https://localhost:44398/api/User/ResetPass?Email=" + this.email +"&Password="+ this.pass)
        alert('Doi pass thanh cmn cong');}
        catch(e)
        {
          alert("loi roi");
        }}
          else 
            alert('Sai roi');
    }
  }
}
</script>

<style>
.center_div{
    margin: 0 auto;
    width:100%;
}
.btn_left{
  margin-right: 80px;
  width:100px;
}
.btn_right{
  width: 100px;
}
</style>
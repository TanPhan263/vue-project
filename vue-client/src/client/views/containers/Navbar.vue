<template>
  	<div class="navbar-fixed" style="position: absolute; top: 35px;">
		<div class="container-header clearfix">
			<div class="logo fl_left">
				<a href="" title="deliveryNow.vn">
					<img src="../../../assets/imgs/foody-vn.png" alt="now.vn" width="112" style="margin-top: 5px;">
				</a>
			</div>
            <CSelect
            class="country fl_left"
            vertical

            :options="getProvince()"
            placeholder="Địa điểm"
            />
			<div class="top-category">
				<ul class="top-category-1">
					<li><a href="#">Tất cả</a></li>
					<li><a href="#">Đồ ăn</a></li>
					<li><a href="#">Thức uống</a></li>
					<li><a href="#">Nhà hàng</a></li>
					<li><a href="#">Deal hot</a></li>
					<li><a href="#">{{isLoggedin}}</a></li>
				</ul>
			</div>
			<div v-if="isLoggedin !=='Đăng nhập thất bại' && isLoggedin !==null" class="fl_right">
			  <CHeaderNav class="mr-4">
				<CHeaderNavItem class="d-md-down-none mx-2">
					<CHeaderNavLink>
					<CIcon name="cil-bell"/>
					</CHeaderNavLink>
				</CHeaderNavItem>
				<TheHeaderDropdownAccnt v-bind:avt="avt"/>
			  </CHeaderNav>
			</div>
			<div v-if="isLoggedin==='Đăng nhập thất bại'"  id="login" class="fl_right">
				<router-link to="/login" class="btn-login">Đăng nhập</router-link>
				<router-link to="/register" class="btn-login">Đăng kí</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import TheHeaderDropdownAccnt from '../../../containers/TheHeaderDropdownAccnt'
export default {
name: 'navbars',
props:{
	province: Array
},
components:{
	TheHeaderDropdownAccnt
},
data(){
    return{
        
    }
},
computed:{
	isLoggedin: function() {
		return localStorage.isAuthen;
	},
	getUser: function() {
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
	},
  },
  methods:{
	  getProvince(){
		  const proName= [];
		  this.province.forEach(element => {
			  proName.push(element.provinceName)
		  });
		  return proName;
	  },
	  
  }
}
</script>

<style>
.options{
    width: 100px;
    height: 20px;
}
</style>
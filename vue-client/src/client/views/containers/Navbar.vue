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
					<li><a href="#">Vỉa hè</a></li>
				</ul>
			</div>
			<div v-if="isLoggedin===''"  id="login" class="fl_right">
				<router-link to="/login" class="btn-login">Đăng nhập</router-link>
				<router-link to="/register" class="btn-login">Đăng kí</router-link>
			</div>
			<div v-else class="fl_right">
			  <CHeaderNav class="mr-4">
				<CHeaderNavItem class="d-md-down-none mx-2">
					<CHeaderNavLink>
					<CIcon name="cil-bell"/>
					</CHeaderNavLink>
				</CHeaderNavItem>
				<TheHeaderDropdownAccnt/>
			  </CHeaderNav>
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
		return this.$store.getters.isLoggedin;
	},
	getUser: function() {
		return this.$store.getters.getUser;
	},
  },
  methods:{
	  getProvince(){
		  const proName= [];
		  this.province.forEach(element => {
			  proName.push(element.provinceName)
		  });
		  return proName;
	  }
  }
}
</script>

<style>
.options{
    width: 100px;
    height: 20px;
}
</style>
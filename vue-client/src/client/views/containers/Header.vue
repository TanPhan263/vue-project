<template>
 <div class="container-topbar">
		<ul class="topbar">
			<li><a href="#">Khám phá</a></li>
			<li><a href="#">Đặt Bàn</a></li>
			<li><a href="#" class="current">Đặt Giao Hàng</a></li>
			<li><a href="#" style="position: relative;">Đi Chợ
			</a></li>
			<li><a href="#">Làm Đẹp</a></li>
			<li><a href="#">Du Lịch</a></li>
			<li><a href="#">FoodyPOS</a></li>
			<div class="fl_right">
				<div class="language fl_right">
					<a href="" style="padding: 7px 0px 0px 15px;">
					</a>
				</div>
				<div class="time fl_right">
					<i class="far fa-clock"></i>
					<span style="font-weight: bold;">06:00 - 23:00</span>
				</div>
			</div>
		</ul>
	</div>
</template>
  
<script>
/* eslint-env jquery */
export default {
  name: "homeheader",
  data(){
    return{
      isDropdow: false
    }
  },
  components: {},
};
</script>

<style lang="css">
@import url('../../../assets/css/style-0.css');
@import url('../../../assets/css/reset.css');
</style>

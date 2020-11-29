<template>
		<div class="content-banner">
			<div class="banner">
				<img src="../../../assets/imgs/banner-dat-giao-hang.png" alt="banner" style="margin: auto; width: 100%; display: block; border:0;">
			</div>
			<div class="search">
				<h1></h1>
				<form action="#" id="searchform" method="#">
					<div class="search-1 clearfix">
						<input type="text" name="searchKey" placeholder="Tìm món trực tuyến tại 10973 địa điểm ở TP. HCM">
						<a class="icon-search"></a>
					</div>
					<!-- <div>
						<ul>
							<li> Hello babe</li>
						</ul>
						<ul v-for="store in listStore" :key="store.storeID">
							<li>{{ store.storeName }}</li>
						</ul>
					</div> -->
				</form>
			</div>
		</div>
</template>
<script>
export default {
	name: 'searchbar',
	data(){
		return{

		}
	},
	props:{
		listStore: Array
	},
	methods:{
		searchStore()
		{
			this.$http.get('https://localhost:44398/api/Store/GetAll/').then(response => {
            this.listStores = response.data
      })
    },
	}
}
</script>
<script>

</script>
<style>
@import url('../../../assets/css/style-0.css');
@import url('../../../assets/css/reset.css');
</style>
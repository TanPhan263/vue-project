<template>
		<div class="content-banner">
			<div class="banner">
				<img src="../../../assets/imgs/banner-dat-giao-hang.png" alt="banner" style="margin: auto; width: 100%; display: block; border:0;">
			</div>
			<div class="search">
				<h1></h1>
				<form action="#" id="searchform" method="#">
					<div class="search-1 clearfix">
						 <!-- <vue-suggestion :items="stores" 
							v-model="item" 
							:setLabel="setLabel"
							:itemTemplate="itemTemplate"
							@changed="inputChange" 
							@selected="itemSelected">
  						</vue-suggestion> -->
						  <input type="text" >
						<a class="icon-search"></a>
					</div>
				</form>
			</div>
		</div>
</template>
<script>
import itemTemplate from '../itemSearch';
export default {
	name: 'searchbar',
	data(){
		return{
			item: {},
			itemTemplate
		}
	},
	props:{
		stores: Array
	},
	methods: {
    itemSelected (item) {
      this.item = item;
    },
    setLabel (item) {
      return item.storeName;
    },
    inputChange (text) {
      // your search method
      this.items = this.stores.filter(item => item.storeName.contains(text));
      // now `items` will be showed in the suggestion list
    },
  },
}
</script>
<script>

</script>
<style>
@import url('../../../assets/css/style-0.css');
@import url('../../../assets/css/reset.css');
</style>
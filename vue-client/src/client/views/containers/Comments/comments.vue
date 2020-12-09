<template>
   <div class="container">	
	   	<Rating/>			
		<div class="row">
			<div>
				<hr/>
				<div class="review-block">
					<div class="row">
						<div class="col-sm-2">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
							<div class="review-block-name"><a href="#">nktailor</a></div>
							<div class="review-block-date">January 29, 2016</div>
						</div>
						<div class="col-sm-9">
							<div  class="review-block-rate col-sm-7">
								<b-form-rating readonly="true" v-model="value" variant="warning" no-border="true"  class="mb-2"></b-form-rating>
							</div>
							<div class="review-block-title">this was nice in buy</div>
							<div class="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
    </div> <!-- /container -->
</template>

<script>
import Rating from './rating'
export default {
data() {
	return{
		value: 2.57,
	}
},
components:{
	Rating
},
methods:{
	getCurDate(){

	},
	AddComment(){

	},
	getCommnents(){

	},
}
}
</script>

<style>
@import url('../../../../assets/css/comments.css');
.center{
	display: block;margin-left: auto;margin-right: auto;
}
</style>
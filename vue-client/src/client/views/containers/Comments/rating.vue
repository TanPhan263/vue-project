<template>
   	<div class="row">
			<div class="col-sm-8">
        <h1 style="font-weight: bold;text-align:center; font-size: 75px;">{{value}}</h1>
				<b-form-rating v-model="value" size="lg" variant="warning" readonly="true"  class="mb-2"></b-form-rating>
			</div>
			<div class="col-sm-3">
         <div class="pull-left">
					<div class="pull-left" style="width:35px; line-height:1;">
						<div style="height:9px; margin:5px 0;">5 <span class="glyphicon glyphicon-star"></span></div>
					</div>
					<div class="pull-left" style="width:180px;">
              <progress value="100" max="100"></progress>
					</div>
					<div class="pull-right" style="margin-left:10px;">1</div>
				</div>
           
            <progress value="100" max="100"></progress>
             <progress value="100" max="100"></progress>
              <progress value="100" max="100"></progress>
			</div>
		</div>	
</template>

<script>
export default {
data(){
	return{
    value: 2.57,
    rate5:10,
    rate4:2,
    rate3:3,
    rate2:4,
    rate1:5
	}
},
methods:{
  changeRate(){
  },
  getRate(){

  },
  getRatePercent(){

  }
}
}
</script>

<style>
@import url('../../../../assets/css/comments.css');
</style>
<template>
    <div class="discover" >
      <div class="artical">
        <div class="menu-artical">
          <div class="menu-left">
            <div class="filter">
			<p style="float: left; margin-top: 15px"><strong>Sắp xếp:</strong> đúng nhất </p>
			<div @click="active=true" style="float:right; border-radius: 5px;width: 20%; height: 90%; margin-top: 3px; background-color: #f6f6f6" ><i style="margin-top: 10px; font-size: 20px" class="fa fa-sliders"></i></div>
			</div>
          </div>
        </div>
		<transition v-if="active">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<i v-on:click="active=false" class="fa fa-window-close" style="float: right; font-size: 20px;"></i>
					<h4 style="text-align: center;">Sắp xếp kết quả</h4>
					<i class="fa fa-map-marker" style="float: right; font-size: 20px; margin-right: 3px;"></i> 
					
					<slot name="body">
					  	<label class="container">Gần tôi
						<input @click="mode=1" type="radio" :checked="checked1" name="radio">
						<span class="checkmark"></span>
						</label>
						<i class="fa fa-star" aria-hidden="true" style="float: right;font-size: 20px;"></i>
						<label class="container">Nhiều đánh giá 
						<input @click="mode=2" :checked="checked2" type="radio" name="radio">
						<span class="checkmark"></span>
						</label>
					</slot>
					<div style=" width: 90%; color: white; margin: 0 auto">
					<button v-on:click="sort(mode)" style=" height:40px; border-radius: 5px;margin-top: 30px;width: 100%; background-color: red; color: white; border: none; font-size: 20px" @click="active=false">
						Hoàn tất
					</button>
					</div>
				</div>
			</div>
			</div>
		</transition>
        <div v-if="!show" id="KhamPha" class="slider">
          <ul v-if="stores && stores.length> 0">
			<li v-for="(store, index ) in stores" v-bind:key="index">
				<a v-on:click="storeClicked(store.storeID)">
				<img :src="store.storePicture"  style="border-radius:10px 10px 0px 0px; width:205px; height:150px"/>
				<div class="name-food"> {{ subString(store.storeName)}}...</div>
				<div class="address-store"><i class="fa fa-map-marker"></i>  {{ subString(store.storeAddress) }}...</div>
				<div style="color: black; float:right;">{{store.khoangcach}} km</div>
				<div class="address-store"> <span class="fa fa-cutlery"></span>  {{ getType(store.businessTypeID) }}</div>
				<div class="intro"></div>
				</a>
			</li>
          </ul>
		  <ul v-else><img src="../../assets/imgs/opps.png" alt=""></ul>
        </div>
		 <div  v-show="show" style="margin: 0 auto;" class="loader"></div>
      </div>
    </div>
</template>

<script>
import StoreService from '@/services/StoreService.js';
export default {
	data(){
		return{
		active: false,
		stores:[],
		type: [],
		sortmode: 0,
		checked1: 'checked',
		checked2: '',
		show:true
		}
	},
	created(){
		this.show = true;
	},
	mounted(){
		this.onInit();
	},
	methods:{
		sort(index){
			this.show = true;
			console.log(this.stores)
			switch(index){
				case 1:
					this.checked1 = 'checked';
					this.checked2 = '';
					setTimeout(() =>{
						this.stores.sort(this.sortDistance);
						this.show = false;
					}, 1000);
					console.log(this.stores)
					break;
				case 2: 
					this.checked1 = '';
					this.checked2 = 'checked';
					setTimeout(() =>{
					this.stores.sort(this.sortRate);
						this.show = false;
					}, 1000);
					console.log(this.stores)
					break;
			}
		},
		async onInit(){
			this.type = await StoreService.getAllBussinessType();
			const key = this.$route.query.key
			this.$http.get('https://localhost:44398/api/Dish/Search?dishname=' + key).then(response => {
			if(response.data !='Không có kết quả tìm kiếm')
			{
				this.stores = response.data;
				this.stores = this.stores.filter(this.sortProvince)
				this.show = false;
				console.log(this.show);
				console.log(this.stores);
				
			}});
		},
		storeClicked (item) {
			this.$router.push('/storeDetail/' + item)
		},
		subString(index){
		return index.toString().substring(0,20);
		},
		getType(index){
		var temp='Unknown'
		this.type.forEach(element => {
				if(element.businessTypeID == index)
				temp = element.businessTypeName;
		});
		return temp;
		},
		sortDistance(a,b){
			return parseInt(a.khoangcach) - parseInt(b.khoangcach);
		},
		sortRate(a, b){
			return parseInt(b.ratePoint) - parseInt(a.ratePoint);
		},
		sortProvince(store){
			return store.provinceID == localStorage.getItem('provinceId');
		}
	}
}
</script>

<style>
@import url('../../assets/css/style.css');
.filter{
	padding: 10px;
	width: 250px;
	height: 50px;
	background-color:#ffffff;
	border-radius: 10px;
	box-shadow: 1px 2px 2px #AAA;
	margin-bottom: 20px;
}
/* The container */
.container {
  width: 600px;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 17px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #ec1c24;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
 	top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #ec1c24;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
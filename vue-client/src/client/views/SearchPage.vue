<template>
  <div class="wraper">
    <div class="discover">
      <div class="artical">
        <div class="menu-artical">
          <div class="menu-left">
            <a href="" class="action">Đúng nhất</a>
            <a href="">Mới nhất</a>
            <a href="">Gần tôi</a>
            <a href="">Đánh giá cao</a>
          </div>
        </div>
        <div id="KhamPha" class="slider">
          <ul>
            <li v-for="store in stores" v-bind:key="store.storeID">
              <a href=""
                ><img :src="store.storePicture" width="205" height="150" />
                <div class="name-food">{{ store.storeName.substr(0,20) }}</div>
                <div class="address-store">{{ store.storeAddress.substr(0,30) }}...</div>
                <div class="comment"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './containers/Header'
import Navbar from './containers/Navbar'
import Search from './containers/Search'
export default {
	data(){
		return{
		stores:[]
		}
	},
    components:{
        Header,
        Navbar,
        Search
	},
	mounted(){
		debugger;
		const key = this.$route.query.key
		this.$http.get('https://localhost:44398/api/Dish/Search?dishname=' + key).then(response => {
         if(response.data !='Không có kết quả tìm kiếm')
            this.stores = response.data
          else this.stores = []
         	console.log(this.stores)
      });
	}
}
</script>

<style scope>

.artical{
	width:80%;
	margin: 0 auto;
}
.artical .menu-artical{
    background-color:#c1c1c1;
    text-align:center;
    overflow:hidden; 
}
.artical .menu-artical .menu-left{
	float:left;
	margin:0;
	width:50%;
}
.artical .menu-artical .menu-left .action{
	border-bottom:2px solid #960014;
	color:#960014;
}
.artical .menu-artical .menu-left a{
	text-decoration:none;
	display:block;
	color:#000;
	float:left;
	padding:16px;
	white-space:nowrap;   
}
.artical .menu-artical .menu-right{
	width:60%;
	text-align:right;
	float:right;   
}
.artical .menu-artical .menu-right select{
	padding:5px;
	font-size:13px;
	border-radius:4px; 
	margin:10px 6px 0 0;
}
.discover .artical .slider{
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;    
}
.discover .artical .slider ul{
	margin:0;
	padding:0;
	list-style-type:none; 
}
.discover .artical .slider ul li{
	float:left;
	margin-top:10px;
	margin-left:17px;
	border:1px solid #ccc;
	background-color:#fff; 
}
.discover .artical .slider ul li a{
	text-decoration:none;
	color:#000;
	display:block;    
}
.discover .artical .slider ul li a div.name-food{
	font-weight:bold;
	font-size:15px;
	overflow:hidden;
	padding:3px; 
}
.discover .artical .slider ul li a div.address-store{
	font-size:13px;
	color:#9a9a9a;
	display:block;  
	border-bottom:1px solid #e6e6e6;
	padding:3px; 
}
</style>
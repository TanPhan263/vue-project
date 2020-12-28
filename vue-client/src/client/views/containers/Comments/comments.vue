<template>
	<div class="row" style="margin: 0 auto;">
		<div class="col-sm-7">
        	<h1 style="font-weight: bold;text-align:center; font-size: 55px;">{{ Math.ceil(averageRate*100)/100}}</h1>
				<b-form-rating v-model="averageRate" size="lg" variant="warning" class="mb-2" readonly="false"></b-form-rating>
		</div>
			<div class="col-sm-5">
				<div class="row">
					<label for="5">5:</label>
					<progress class="progress-bar progress-bar-striped" style="width:300px; margin-bottom:7px; background: crimson;"  id="5" :value="rate5" :max="value.length"> 32% </progress>
				</div>
				<div class="row">
					<label for="4">4: </label>
					<progress  class="progress-bar progress-bar-striped" style="width:300px; margin-bottom:7px; background: crimson;" id="4" :value="rate4" :max="value.length"> 32% </progress>
				</div>
				<div class="row">
					<label for="3">3: </label>
					<progress class="progress-bar progress-bar-striped"  style="width:300px; margin-bottom:7px;" id="3" :value="rate3" :max="value.length"> 32% </progress>
				</div>
				<div class="row">
					<label for="2">2: </label>
					<progress class="progress-bar progress-bar-striped"  style="width:300px; margin-bottom:7px;" id="2" :value="rate2" :max="value.length"> 32% </progress>
				</div>
				<div class="row">
					<label for="1">1: </label>
					<progress class="progress-bar progress-bar-striped" style="width:300px; margin-bottom:7px;" id="1" :value="rate1" :max="value.length"> 32% </progress>
				</div>
			</div>	
		<transition v-if="active">
			<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">

				<div class="modal-header">
					<slot name="header">
					<h3>ĐÁNH GIÁ QUÁN ĂN</h3>
					</slot>
				</div>

				<div class="modal-body">
					<slot name="body">
					<b-form-rating v-model="rateSubmit" size="lg" variant="warning" class="mb-2"></b-form-rating>
					<textarea v-model="commentContent" style="border-radius:10px; padding:5px;border:1px solid  #ddd;" rows="8" cols="66">
						</textarea>
					</slot>
				</div>

				<div class="modal-footer">
					<slot name="footer">
					<button class="btn btn-primary" @click="responseComment()">
						Submit
					</button>
					<button class="btn btn-warning" @click="active=false">
						Cancel
					</button>
					</slot>
				</div>
				</div>
			</div>
			</div>
		</transition>
		<div class="col-sm-12">
			<div class="review-block">
				<div v-for="comment in commentList" :key="comment.commentID" class="row" style="margin-top:15px;">
					<div class="row" v-if="comment.parentComment_ID===null">
						<div class="col-sm-1">
							<img v-if="userCommentPic===''" style="border-radius:50%;" src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
							<img v-else style="width:55px ; height: 55px;border-radius:50%;" :src="getPicture(comment.commentID)" class="img-rounded">
						</div>
						<div class="col-sm-9"  style="background-color:#FAFAFA;">
							<div  class="review-block-rate">
								<div class="review-block-name"><a href="#">{{getName(comment.userID)}}</a></div>
								<div class="review-block-date">{{comment.date}}</div>
							</div>
						<div class="review-block-description">{{comment.content}}</div>
						<div  class="review-block-rate">
								<div class="review-block-name"><a @click="getParentID(comment.commentID)">Trả lời</a></div>
						</div>						
						</div>
						<div v-for="comment2 in commentList" :key="comment2.commentID" class="row">
							<div v-if="comment2.parentComment_ID===comment.commentID" class="row" style="margin-top:15px;">
								<div class="col-sm-2"></div>
								<div class="col-sm-1">
									<img v-if="userCommentPic===''" style="border-radius:50%;" src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
							<img v-else style="width:55px ; height: 55px;border-radius:50%;" :src="getPicture(comment2.commentID)" class="img-rounded">
								</div>
								<div class="col-sm-8" style="background-color:#FAFAFA; boder-radius:10px;">
									<div  class="review-block-rate">
										<div class="review-block-name"><a href="#">{{getName(comment2.userID)}}</a></div>
										<div class="review-block-date">{{comment2.date}}</div>
									</div>
									<div class="review-block-description">{{comment2.content}}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<button @click="active=true" type="button" class="btn btn-primary col-sm-12" data-toggle="modal" data-target="#exampleModal">
			Thêm nhận xét
		</button>
	</div>
</template>

<script>
const baseUrl='https://localhost:44398/api';
import CommentService from '@/services/CommentService.js';
import UserService from '@/services/UserService.js';
export default {
data() {
	return{
		userCommentName: '',
		userCommentPic: '',
		commentList:[{
			commentID: String,
			content: String,
			date: String,
			image: String,
			userID: String,
			storeID: String,
			parentComment_ID: String
		}],
		parentCommentID:'',
		userList:[],
		value:'',
		rate:0,
		averageRate:0,
		rateSubmit:0,
		rate5:0,
		rate4:0,
		rate3:0,
		rate2:0,
		rate1:0,
		totalRate:0,
		user:'',
		token:'',
		commentContent:'',
		active:false
	}
},
props:{
 	storeID: String,
},
mounted(){
	this.getCommnents();
	this.getRate();
	this.user=localStorage.getItem('userInfor');
	this.user=JSON.parse(this.user);
	this.token=localStorage.getItem('isAuthen');
},
methods:{
	async getCommnents(){
	// 	this.$http.get(baseUrl +'/Comment/GetByID?id='+this.storeID,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('isAuthen')}`}}).then(response => {
	// 	   this.commentList = response.data;
	// 	   console.log(this.commentList)
	//   })
		try{
			this.commentList=await CommentService.getCommentByStore(this.storeID);
			console.log(this.commentList)
			this.commentList.forEach(element => {
				this.getUsers(element.userID);
			});
			console.log(this.userList);
		}
		catch{}
	},
	responseComment(){
		this.active=true;
		if(this.parentCommentID=='') this.parentCommentID=null;
		this.submitRateComment();
	},
    async submitRateComment(){
		this.active=false;
		var date = new Date();
		const rate=  {
			ratePoint: this.rateSubmit.toString(),
			storeID: this.storeID,
			userID: this.user.userID
		};
		const comment =  {
			content: this.commentContent,
			date: date.toString().slice(4,15),
			image: null,
			userID: this.user.userID,
			storeID:  this.storeID,
			parentComment_ID: this.parentCommentID
		};
		//   this.$http.post(baseUrl +'/ListOfReview/CreateListOfReviews',rate,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('isAuthen')}`}}).then(response => {
		//         alert(response.data)
		//   })
		//   this.$http.post(baseUrl +'/Comment/CreateComment',comment,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('isAuthen')}`}}).then(response => {
		// 		alert(response.data)
		//   })
		const respone = await CommentService.submitRate(this.token,rate);
		alert(respone);
		const respone2 = await CommentService.submitComment(this.token,comment);
		alert(respone2);
		this.updateRate();
		this.getCommnents();
	},
	async getRate(){
		try{
		this.value= await CommentService.getRateByStore(this.storeID)
		this.value.forEach(element => {
				this.rate+=parseInt(element.ratePoint)
				switch(parseInt(element.ratePoint)){
					case 1: this.rate1+=1; break;
					case 2: this.rate2+=1; break;
					case 3: this.rate3+=1; break;
					case 4: this.rate4+=1; break;
					case 5: this.rate5+=1; break;
				}
				});
		this.averageRate=this.rate/this.value.length;
		}
		catch{
		}
	},
	updateRate() {
		this.rate+=this.rateSubmit;
		this.averageRate=this.rate/(this.value.length+1);
	},
	getParentID(index){
		this.active=true;
		this.parentCommentID=index;
	},
	getName(id){
		this.getUsers(id);
		const a = this.userCommentName;
		return a;
	},
	getPicture(id){
		this.getUsers(id);
		const a = this.userCommentPic;
		return a;
	},
	async getUsers(id){
		var response = await UserService.getUserbyIDnoToken(id);
		this.userCommentName = response.userName;
		this.userCommentPic = response.picture;
	},
	async getUserPicture(id){
		var name = '';
		const response = await UserService. getUserbyIDnoToken(id);
		name= String.parse(response.userName);
		console.log(name)
		return name;
	}
  }
}
</script>

<style>
@import url('../../../../assets/css/comments.css');
.center{
	display: block;margin-left: auto;margin-right: auto;
}
</style>
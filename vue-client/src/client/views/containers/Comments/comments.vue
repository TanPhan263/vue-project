<template>
	<div class="row" style="margin: 0 auto;">
		<div class="col-sm-5">
        	<h1 style="font-weight: bold;text-align:center; font-size:55px; margin-bottom:55px;">{{ Math.ceil(averageRate*100)/100}}</h1>
				<b-form-rating v-model="averageRate" size="lg" variant="warning" class="mb-2" :readonly="readonly"></b-form-rating>
		</div>
			<div class="col-sm-7">
				<div class="row">
					<p  style="margin-right:5px;font-size: 15px;">5 <CIcon height="20" name="cil-star"/></p>
					<CProgress
						style="width: 500px;"
						:value="rate5" :max="value.length"
						color="success"
						:striped="striped"
						class="mb-2"
					/>
				</div>
				<div class="row">
					<p  style="margin-right:5px; font-size: 15px;">4 <CIcon height="20" name="cil-star"/></p>
				<CProgress
				style="width: 500px;"
					:value="rate4" :max="value.length"
					color="info"
					:striped="striped"
					class="mb-2"
				/>
				</div>
				<div class="row">
					<p  style="margin-right:5px; font-size: 15px;">3 <CIcon height="20" name="cil-star"/></p>
				<CProgress
				style="width: 500px;"
					:value="rate3" :max="value.length"
					color="warning"
					:striped="striped"
					class="mb-2"
				/>
				</div>
				<div class="row">
					<p style="margin-right:5px; font-size: 15px;">2 <CIcon height="20" name="cil-star"/></p>
				<CProgress
				style="width: 500px;"
					:value="rate2" :max="value.length"
					color="danger"
					:striped="striped"
					class="mb-2"
				/>
				</div>
				<div class="row">
					<p  style="margin-right:5px; font-size: 15px;">1 <CIcon height="20" name="cil-star"/></p>
				<CProgress
				style="width: 500px;"
					:value="rate1" :max="value.length"
					color="danger"
					:striped="striped"
					class="mb-2"
				/>
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
					<textarea v-model="commentContent" style="border-radius:10px; padding:5px;border:1px solid  #ddd;" rows="8" cols="67">
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
		<div class="col-sm-12" style="margin-left: 40px;">
			<div class="review-block">
				<div v-for="(comment, index) in commentList" :key="index" class="row" style="margin-top:15px;">
					<div class="row" v-if="comment.parentComment_ID===null">
						<div class="col-sm-2">
							<img v-if="userCommentParent[index]" style="width:55px ; height: 55px;border-radius:50%;" :src="userCommentParent[index].picture">
							<img v-else style="border-radius:50%;" src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
						</div>
						<div class="col-sm-9"  style="">
							<div  class="review-block-rate">
								<div class="review-block-name"><a v-if="userCommentParent[index]">{{userCommentParent[index].userName}}</a> <b-form-rating style="width: 150px; float:right;" inline id="rating-disabled" :value="getCommentRate(comment.commentID)" size="sm" variant="warning" class="mb-2" :readonly="readonly" no-border></b-form-rating></div>
								<div class="review-block-date">{{comment.date}}</div>
							</div>
						<div class="review-block-description">{{comment.content}}</div>
						<div  class="review-block-rate">
								<div class="review-block-name"><a @click="getParentID(comment.commentID)">Trả lời</a></div>
						</div>						
						</div>

						<div v-for="(comment2,index2) in commentList" :key="index2" class="row">
							<div v-if="comment2.parentComment_ID===comment.commentID" class="row" style="margin-top:15px;">
								<div class="col-sm-2"></div>
								<div class="col-sm-2">
									<img  v-if="userCommentChild[index]" style="width:55px ; height: 55px;border-radius:50%;" :src="userCommentChild[index].picture" class="img-rounded">
									<img v-else style="border-radius:50%;" src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
								</div>
								<div class="col-sm-8" style=" boder-radius:10px;">
									<div  class="review-block-rate">
										<div  class="review-block-name"><a v-if="userCommentChild[index]">{{userCommentChild[index].userName}}</a><b-form-rating style="width: 150px; float:right;" inline id="rating-disabled" :value="getCommentRate(comment2.commentID)" size="sm" variant="warning" class="mb-2" :readonly="readonly" no-border></b-form-rating></div>
										<div class="review-block-date">{{comment2.date}}</div>
									</div>
									<div class="review-block-description">{{comment2.content}}</div>
									<div  class="review-block-rate">
										<div class="review-block-name"><a @click="getParentID(comment.commentID)">Trả lời</a></div>
									</div>	
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button style="width: 90%;" @click="active=true" type="button" class="btn btn-primary col-sm-12" data-toggle="modal" data-target="#exampleModal">
					Thêm nhận xét
				</button>
		</div>
		
	</div>
</template>

<script>
import { freeSet } from '@coreui/icons'
const baseUrl='https://localhost:44398/api';
import CommentService from '@/services/CommentService.js';
import UserService from '@/services/UserService.js';
import { loadOptions } from '@babel/core';
export default {
data() {
	return{
		striped: true,
		userCommentParent: [],
		userCommentChild: [],
		// userCommentName: '',
		// userCommentPic: '',
		commentRate:'',
		commentList:[
			// { 
			// commentID: String,
			// content: String,
			// date: String,
			// image: String,
			// userID: String,
			// storeID: String,
			// parentComment_ID: String
			// }
		],
		parentCommentID:'', 
		value:[],
		rate:0,
		averageRate:0,
		rateSubmit:0,
		rate5:0,
		rate4:0,
		rate3:0,
		rate2:0,
		rate1:0,
		user:'',
		token:'',
		commentContent:'',
		active:false,
		readonly: false
	}
},
props:{
 	storeID: String,
},
created(){
	this.getCommnents();
	this.getRate();
	this.user=localStorage.getItem('userInfor');
	this.user=JSON.parse(this.user);
	this.token=localStorage.getItem('isAuthen');
},
mounted(){
},
methods:{
	async getCommnents(){
		try{
			this.commentList = await CommentService.getCommentByStore(this.storeID);
			this.commentList.forEach( element =>{
				UserService.getUserbyIDnoToken_pic(element.userID).then(x =>
				{
						const temp={
							userName: x.userName,
							picture: x.picture
					}
					if(element.parentComment_ID == null){
						this.userCommentParent.push(temp);
					}
					else{
						this.userCommentChild.push(temp);
					}
					
				});
				
			});
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
		const comment =  {
			content: this.commentContent,
			date: date.toString().slice(4,15),
			image: null,
			userID: this.user.userID,
			storeID:  this.storeID,
			parentComment_ID: this.parentCommentID
		};
		const response = await CommentService.submitComment(this.token,comment);
		alert(response);
		const rate=  {
			ratePoint: this.rateSubmit.toString(),
			storeID: this.storeID,
			userID: this.user.userID,
			CommentID: response.toString()
		};
		const respone2 = await CommentService.submitRate(this.token,rate);	
		alert(respone2);
		this.getRate();
		this.getCommnents();
	},
	async getRate(){
		try{
		let rate = 0;
		this.value= await CommentService.getRateByStore(this.storeID)
		this.value.forEach(element => {
				rate+=parseInt(element.ratePoint)
				switch(parseInt(element.ratePoint)){
					case 1: this.rate1+=1; break;
					case 2: this.rate2+=1; break;
					case 3: this.rate3+=1; break;
					case 4: this.rate4+=1; break;
					case 5: this.rate5+=1; break;
				}
				});
		this.averageRate=rate/this.value.length;
		}
		catch{
		}
	},
	getParentID(index){
		this.active=true;
		this.parentCommentID=index;
	},
	// getName(id){
	// 	// this.getUsersName(id);
	// 	// const a = this.userCommentName;
	// 	console.log(this.userCommentParent[0])
	// 	console.log(this.userCommentChild[0])
	// },
	// getPicture(id){
	// 	this.getUsersComment(id).then(this.onSuccess,this.onError);
	// 	// const b = this.userCommentPic;
	// 	const a = this.userComment.picture;
	// 	return b;
	// },
	// async getUsersComment(){
	// },
	getCommentRate(index){
		var temp = 0 ;
		this.value.forEach(element => {
			if(element.commentID==index)
				temp = parseInt(element.ratePoint) ;
		});
		return temp;
	}
  }
}
</script>

<style>
@import url('../../../../assets/css/comments.css');
@import url('../../../../assets/css/bootstrap.min.css');
.center{
	display: block;margin-left: auto;margin-right: auto;
}
</style>
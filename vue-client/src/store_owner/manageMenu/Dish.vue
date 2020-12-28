<template>
  <CRow>
       <CCol md="6">
        <CCard>
          <CCardHeader>
            <strong>Thông tin món ăn</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                label="ID"
                horizontal
                v-model="dishID"
              />
              <CInput
                label="Tên món"
                horizontal
                autocomplete="name"
             v-model="dishName"
              />
              <CInput
             v-model="dishPrice"
                label="Giá"
                horizontal
              />
               <CInput
                v-model="dishType_Name"
                label="Loại món"
                horizontal
              />
            
            </CForm>
          </CCardBody>
          <CCardFooter>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol md="6">
        <CCard>
          <CCardBody>
            <CForm>
                <div class="center_div">
                <img
                   :src="dishPicture" height="200px" width="470px"
                />
                </div>
            </CForm>
          </CCardBody>
          <CCardFooter>
             <input type="file"  @change="previewImage">
            <CButton @click="deleteDish"  class="btn_left" type="submit" size="sm" color="danger"><CIcon name="cil-check-circle"/> Delete</CButton>
            <CButton  @click="onUpload"   class="btn_right" type="reset" size="sm" color="warning"><CIcon name="cil-ban"/> Change Image</CButton>
            <CButton  @click="updateDish"  class="btn_right" type="reset" size="sm" color="warning"><CIcon name="cil-ban"/> Update</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
</template>

<script>
import firebase from 'firebase'
import StoreService from '@/services/StoreService.js';
export default {
  data(){
    return{
      dishTypes:[],
      imageData: null,
      dishName:'',
      dishID: '',
      dishPrice:'',
      dishPicture:null,
      dishType_ID:'',
      dishType_Name:'',
      menu_ID: '',
    }
  },
  mounted(){
     const id = this.$route.params.id;
     this.getDishInfor(id) 
  },
  methods:{
    async getDishInfor(id){
      const dishOpened = await StoreService.getDishByID(id);
      this.dishName = dishOpened[0].dishName;
      this.dishID = dishOpened[0].dish_ID;
      this.dishPrice = dishOpened[0].dishPrice;
      this.dishPicture = dishOpened[0].dishPicture;
      this.dishType_ID = dishOpened[0].dishType_ID;
      this.menu_ID = dishOpened[0].menu_ID;
      this.getType(this.dishType_ID)
    },
    async updateDish()
    {
        const dish = {
          dishID : this.dish_ID,
          dishName : this.dishName,
          dishPrice : this.dishPrice,
          dishPicture : this.dishPicture,
          dishType_ID : this.dishType,
          menu_ID: this.menu_ID
        }
        const response = await StoreService.updateDish(this.$route.params.id, dish, localStorage.getItem('isAuthen'))
        alert(response)
    },
    async deleteDish(){
       if(confirm("Do you really want to delete?")){
         const response  = await StoreService. deleteDish(this.$route.params.id, localStorage.getItem('isAuthen'))

      }
    },
     previewImage(event){
       this.dishPicture=null;
          this.imageData= event.target.files[0];
        },
        onUpload(){
          this.dishPicture= null;
          const storageRef = firebase.storage().ref(`image/${this.imageData.name}`).put(this.imageData);
          storageRef.on(`state_change`, snapshot => {
          },error =>{console.log(error.message)},
          ()=> {
            storageRef.snapshot.ref.getDownloadURL().then((url) => {this.dishPicture=url;})
            }
          )
          this.updateDish();
        },
      getType(index){
          this.$http.get('https://localhost:44398/api/DishType/GetAll').then(response => {this.dishTypes=response.data});
          this.dishTypes.forEach(element => {
            if(element.dishType_ID==index)
            {
              this.dishType_Name = element.dishyTypeName;
            }
          });
      },

  }
}
</script>

<style>

</style>
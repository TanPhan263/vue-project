<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Store ID id:  {{ $route.params.id }}
        </CCardHeader>
        <CCardBody>
          <CDataTable
             hover
            border
            striped
            small
            fixed
            :items="visibleData"
            :fields="fields"
          />
        </CCardBody>
      </CCard>
    </CCol>
    <CCol md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Hình ảnh của cửa hàng</strong>
        </CCardHeader>
        <CCardBody>
          <CCarousel
            arrows
            indicators
            animate
            height="252px"
          >
            <CCarouselItem
              captionHeader="First Slide"
              image="https://picsum.photos/1024/480/?image=52"
              captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
            />
            <CCarouselItem
              captionHeader="Blank page"
              :image="{ placeholderColor: 'grey' }"
              captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
            />
            <CCarouselItem
            image="https://picsum.photos/1024/480/?image=54"
            />
          </CCarousel>
          <CRow form class="form-group">
            <CCol tag="label" sm="10" class="col-form-label">
              Ban store: 
            </CCol>
           <CSwitch 
              class="mr-1"
              color="danger"
              :checked="true"
              shape="pill"
            />
            </CRow>
           <CSelect
            label="Ban time"
            horizontal
            :options="options"
            placeholder="Please select"
          />
        </CCardBody>
        <CCardFooter>
          <CRow form class="form-group">
          <CButton class="btn_left" color="danger" @click="goBack">Back</CButton>
          <CButton class="btn_right" color="primary" @click="goBack">Update</CButton>
           </CRow>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import storeData from './StoreData'
export default {
  name: 'Store',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.storeOpened = from.fullPath.includes('store')
    })
  },
  data () {
    return {
      storeOpened: null,
      options: ['1 week', '1 month', 'forever'],
    }
  },
  computed: {
    fields () {
      return [
        { key: 'key', label: this.storename, _style: 'width:150px'},
        { key: 'value', label: '', _style: 'width:150px;' }
      ]
    },
    userData () {
      const id = this.$route.params.id
      const user = storeData.find((user, index) => index + 1 == id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => { return { key, value } })
    },
    visibleData () {
      return this.userData.filter(param => param.key !== 'storename')
    },
    username () {
      return this.userData.filter(param => param.key === 'storename')[0].value
    }
  },
  methods: {
    goBack() {
      this.usersOpened ? this.$router.go(-1) : this.$router.push({path: '/store'})
    }
  }
}
</script>
<style>
.btn_left{
  margin-right: 260px;
  width:100px;
}
.btn_right{
  width: 100px;
}
</style>

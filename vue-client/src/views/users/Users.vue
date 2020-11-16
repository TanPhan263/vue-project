<template>
  <CRow>
    <CCol>
      <CCard class="center_div">
        {{items}}
        <CCardHeader>
          Users
        </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            border
            striped
            small
            fixed
            :items="items"
            :fields="fields"
            :items-per-page="5"
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >
            <template #status="data">
              <td>
                <CBadge :color="getBadge(data.item.status)">
                  {{data.item.status}}
                </CBadge>
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import usersData from './UsersData'
const url = 'https://localhost:44340/api/User/GetAll'
export default {
  name: 'Users',
  data () {
    return {
      items: null ,
      fields: [
        { key: 'userID', label: 'Name', _classes: 'font-weight-bold' },
        { key: 'userName' },
        { key: 'phone' },
        { key: 'address' },
        { key: 'email' },
      ],
      activePage: 1
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    rowClicked (item, index) {
      this.$router.push({path: `users/${index + 1}`})
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    }

  },
  mounted() {
    this.$http.get(url).then(response => {
            this.items = response.data
          })
  },
}
</script>
<style>
.center_div{
  margin: 0 auto;
  width: 100% /* value of your choice which suits your alignment */
}
</style>

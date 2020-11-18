<template>
<div class="wraper">
    <div class="menu-top">
      <div id="menu">
      </div>
    </div>
    <div class="item">
      <div class="logo"><img src="image/foody-vn.png" alt="logo" /></div>
      <div class="spacing">
      </div>
      <div class="card">
         <vsm-menu
            :menu="menu"
            :base-width="380"
            :base-height="400"
            :screen-offset="10"
            element="header"
            handler="hover"
            @open-dropdown="onOpenDropdown"
            @close-dropdown="onCloseDropdown"
          >
            <template #default="{ item }">
              <!--Dropdown Content-->
              <!--You can replace it with a separate component if each menu item has its own style-->
              <!--Dynamic Component Example: https://codepen.io/Alexeykhr/pen/YzPKxpX-->
              <div class="wrap-content">
                <div class="wrap-content__block">
                  Header: {{ item.title }}
                </div>
                <div class="wrap-content__item">
                  {{ item }}
                </div>
              </div>
            </template>
            <template #before-nav>
              <!--Image or svg of website logo-->
              <li class="vsm-section logo-section">
                <img
                  src="https://vuejs.org/images/logo.png"
                  alt="My Logo"
                >
              </li>
            </template>
            <template #title="data">
              <!--Display menu items through slots-->
              {{ data.item.title }}
            </template>
            <template #after-nav>
              <!--Mobile Burger, buttons, etc-->
              <!--For the same styles - add the vsm-section-->
              <li class="vsm-section vsm-mob-hide">
                <button>My Button</button>
              </li>
              <!--Display when user media screen below from $vsm-media (scss)-->
              <vsm-mob>Mobile Content</vsm-mob>
            </template>
          </vsm-menu>
        <div class="search-filter">
          <form action="" method="">
            <input
              type="text"
              name="search-box"
              placeholder="Địa điểm, món ăn, loại hình"
            />
          </form>
          <div class="filter">
            <a href=""
              ><img
                src="image/icon_filter.png"
                alt=""
                width="17"
                height="17"
              />Bộ lọc</a
            >
          </div>
        </div>
        <div class="search">
          <img src="image/search-icon.png" alt="" width="16" height="16" />
        </div>
        <div class="icon-more">
          <img src="image/icon_more.png" width="16" height="16" />
          <div class="menu-more">
            <a href="">Ở đâu</a>
            <a href="">Ăn gì</a>
            <a href="">Sưu tập</a>
            <a href="">TV</a>
            <a href="">Bình luận</a>
            <a href="">Blogs</a>
            <a href="">Coupons</a>
            <a href="">Đặt bàn</a>
          </div>
        </div>
      </div>

      
    </div>
</div>

</template>

<script>
/* eslint-env jquery */
export default {
  name: 'header-comp',
  data () {
    return {
      showDropdown: '',
      title1: 'Tỉnh thành',
      provinces: [
        {
          title: 'TP.HCM1',
          postcode: 1111
        },
        {
          title: 'TP.HCM2',
          postcode: 1111
        },
        {
          title: 'TP.HCM3',
          postcode: 1111
        },
        {
          title: 'TP.HCM4',
          postcode: 1111
        },
        {
          title: 'TP.HCM5',
          postcode: 1111
        },
        {
          title: 'TP.HCM6',
          postcode: 1111
        },
        {
          title: 'TP.HCM7',
          postcode: 1111
        }
      ],
      menu: [
        {
          // display menu item (or override title slot)
          title: 'News',
          // now this is not a link, but a menu item where there is a dropdown
          dropdown: 'news',
          // don't want a button element?
          element: 'span',
          // menu item can accept all attributes
          attributes: {
            // I want more classes! No problem
            // string, array, object, not matter
            class: ['my-class1', { 'my-class2': true }],
            // Custom attributes
            'data-big': 'yes'
          },
          // add some events?
          listeners: {
            // all possible native events
            mouseover: (evt) => {
              console.log('news hover', evt)
            }
          },
          // just extra properties in the object
          new_section: false,
        },
        {
          title: 'External Link',
          attributes: {
            href: 'https://github.com/Alexeykhr/vue-stripe-menu',
            target: '_blank'
          }
        }
        // ...
      ]
    }
  },
  methods: {
    setSelectedItem (item) {
      this.showDropdown = item
    },
    onOpenDropdown() {
      console.log('onOpenDropdown')
    },
    onCloseDropdown() {
      console.log('onCloseDropdown')
    }
  },
  ready: function () {
    $('.dropdown-sudmenu a.test').on('click', function (e) {
      $(this).next('ul').toggle()
      e.stopPropagation()
      e.preventDefault()
    })
  },
}
</script>

<style lang="scss">
.vsm-menu {
	 margin: 10px;
}
 .vsm-menu ul {
	 max-width: 1024px;
	 margin: 0 auto;
}
 .vsm-root {
	 display: flex;
	 align-items: center;
	 justify-content: center;
}
 .logo-section {
	 flex: 1 1 auto;
}
 .logo-section img {
	 user-select: none;
	 max-width: 40px;
}
 .vsm-section_menu > * {
	 padding: 0 25px;
	 font-weight: 500;
	 font-family: inherit;
}
 .wrap-content {
	 padding: 30px;
	 width: 400px;
}
 .wrap-content__block {
	 font-weight: bold;
}
 .wrap-content__item {
	 font-style: italic;
	 font-size: 0.8rem;
}
</style>
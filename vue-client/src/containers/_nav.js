export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Cài đặt tài khoản']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Cập nhật thông tin',
        to: '/update',
        icon: 'cil-puzzle'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Đổi mật khẩu',
        to: '/ForgetPass',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Quản lý']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Quản lý',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'Quản lý người dùng',
            to: '/users'
          },
          {
            name: 'Quản lý quán',
            to: '/store'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Đăng bài',
        icon: 'cil-cursor',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Xuất file',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Quán chờ xác nhận',
        icon: 'cil-star',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Địa điểm các quán',
        route: '/notifications',
        icon: 'cil-bell',
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Pages',
        route: '/pages',
        icon: 'cil-star',
        items: [
          {
            name: 'Login',
            to: '/pages/login'
          },
          {
            name: 'Register',
            to: '/pages/register'
          },
          {
            name: 'Error 404',
            to: '/pages/404'
          },
          {
            name: 'Error 500',
            to: '/pages/500'
          }
        ]
      }
    ]
  }
]
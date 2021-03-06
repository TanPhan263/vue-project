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
        }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Cài đặt tài khoản']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Cập nhật thông tin',
        to: '/manage/update',
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
        _children: ['QUÁN']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Quản lý quán',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'Quản lý menu',
            to: '/manage/manageMenu'
          },
          {
            name: 'Quán của bạn',
            to: '/manage/manageStores'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Đăng bài',
        icon: 'cil-cursor',
      }
    ]
  }
]
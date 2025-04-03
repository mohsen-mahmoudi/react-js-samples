import {
  AntMenu,
  AntSlider,
  DashboardOutlined,
  EditOutlined,
  UserOutlined
} from '@/ui';
import { Link } from "react-router-dom";

const items = [
  { key: 'dashboard', icon: <DashboardOutlined />, label: 'داشبورد' },
  {
    key: 'users',
    label: <Link to='/'>کاربران</Link>,
    icon: <UserOutlined />,
    children: [
      { key: 'userslist', label: <Link to='/users'>لیست کاربران</Link> },
      { key: 'usersadd', label: 'افزودن کاربر' },
    ],
  },
  {
    key: 'papers',
    label: 'مقالات',
    icon: <EditOutlined />,
    children: [
      { key: 'paperslist', label: 'لیست مقالات' },
      { key: 'paperssadd', label: 'افزودن مقاله' },
    ],
  },
];

export default function Sidebar() {

  return (
    <AntSlider width="18%" collapsible theme="light">
      <AntMenu
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['users', 'papers']}
        mode="inline"
        // theme="dark"
        items={items}
      />
    </AntSlider>
  );
}

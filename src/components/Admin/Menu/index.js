import {
  DashboardOutlined,
  AppstoreAddOutlined,
  UserAddOutlined,
  TableOutlined,
  UserOutlined,
  RadarChartOutlined,
  ShoppingCartOutlined,
  ProductOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function MenuSider() {
  const items = [
    {
      key: "DashBoard",
      label: <Link to="/admin/">DashBoard</Link>,
      icons: <DashboardOutlined />,
    },
    {
      key: "Store",
      label: "Store",
      icon: <AppstoreAddOutlined />,
      children: [
        {
          key: "store/listStore",
          label: <Link to="store/">List Store</Link>,
        },
        {
          key: "store/listStore",
          label: <Link to="store/create">Create Store</Link>,
        },
      ],
    },
    {
      key: "manager store",
      label: "Store's Manager",
      icon: <UserAddOutlined />,
      children: [
        {
          key: "manager/listStore",
          label: <Link to="manager-store/">List Store's Manager</Link>,
        },
        {
          key: "manager/create",
          label: <Link to="manager-store/create">Create Store's Manager</Link>,
        },
      ],
    },
    {
      key: "manager table",
      label: "Table",
      icon: <TableOutlined />,
      children: [
        {
          key: "table/listStore",
          label: <Link to="table/">List Table</Link>,
        },
        {
          key: "table/create",
          label: <Link to="table/create">Create Table</Link>,
        },
      ],
    },
    {
      key: "manager employee",
      label: "Employee",
      icon: <UserOutlined />,
      children: [
        {
          key: "employee/employees",
          label: <Link to="employee/">List Employee</Link>,
        },
        {
          key: "employee/create",
          label: <Link to="pmployee/create">Create Employee</Link>,
        },
      ],
    },
    {
      key: "manager category",
      label: "Category",
      icon: <RadarChartOutlined />,
      children: [
        {
          key: "category/categories",
          label: <Link to="category/">List Category</Link>,
        },
        {
          key: "category/categories",
          label: <Link to="category/create">Create Category</Link>,
        },
      ],
    },
    {
      key: "manager product",
      label: "Product",
      icon: <ProductOutlined />,
      children: [
        {
          key: "product/products",
          label: <Link to="product/">List Category</Link>,
        },
        {
          key: "product/create",
          label: <Link to="product/create">Create Category</Link>,
        },
      ],
    },
    {
      key: "manager toping",
      label: "Toping",
      icon: <HeatMapOutlined />,
      children: [
        {
          key: "toping/",
          label: <Link to="toping/">List Toping</Link>,
        },
        {
          key: "toping/create",
          label: <Link to="toping/create">Create Toping</Link>,
        },
      ],
    },
    {
      key: "manager orders",
      label: "Orders",
      icon: <ShoppingCartOutlined />,
      children: [
        {
          key: "orders/",
          label: <Link to="orders/">List orders</Link>,
        },
      ],
    },
  ];
  return (
    <>
      <Menu
        mode="inline"
        items={items}
        defaultOpenKeys={["Menu 1"]}
        defaultSelectedKeys={["/"]}
      />
    </>
  );
}
export default MenuSider;

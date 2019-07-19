/**
 * 路由组件出口文件
 */
import Loadable from 'react-loadable'  // react 组件按需引入
import Loading from "./Loading"
import Home from "./home/index";
import UserManage from "./userManage/index";
import Role from "./auth/role/index";
import MenuManage from './auth/menu/index';
import RoleDetail from './auth/role/roleDetail'
// import CSSAnimate from './animate'
const CSSAnimate = Loadable({
  // 按需加载cssanimate
  loader: () => import('./animate'),
  loading: Loading,
  delay:1000
})
export default {

  Home,
  UserManage,
  Role,
  MenuManage,
  RoleDetail,
  CSSAnimate
}

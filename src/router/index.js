import Vue from 'vue'
import Router from 'vue-router'

// vue-router 3.1以上版本，需要重写push和 replace方法，处理相同路径
// const [routerPush, routerReplace] = [Router.prototype.push, Router.prototype.replace];
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error => error);
// };
// Router.prototype.replace = function replace(location) {
//   return routerReplace.call(this, location).catch(error => error);
// };

const Home = () => import('views/home/index');
const Category = () => import('views/category/index');
const Cart = () => import('views/cart/index');
const Profile = () => import('views/profile/index');
const Detail = ()=> import('views/detail/detail')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})

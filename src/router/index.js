import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Lgin from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'
import Checkout from '@/components/User/Checkout'
import Product from '@/components/Products/Product'
import NewProduct from '@/components/Products/NewProduct'
import ProductList from '@/components/Products/ProductList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      'path': '',
      'name': 'home',
      'component': Home
    },
    {
      'path': '/product/:id/',
      'name': 'product',
      'component': Product
    },
    {
      'path': '/list/',
      'name': 'list',
      'component': ProductList
    },
    {
      'path': '/new/',
      'name': 'new',
      'component': NewProduct
    },
    {
      'path': '/checkout/',
      'name': 'checkout',
      'component': Checkout
    },
    {
      'path': '/login/',
      'name': 'login',
      'component': Lgin
    },
    {
      'path': '/register/',
      'name': 'register',
      'component': Register
    },
  ],
  mode: 'history' // для избавления от хештега в начале адреса
})

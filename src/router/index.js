import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


export default new Router({
    mode:'history',
    routes:[
        {
            path : '/home',
            name : '首页',
            component : () => import('../views/home/Home')
        },
        {
            path : '/category',
            name : '分类',
            component : () => import('../views/category/Category')
        },
        {
            path : '/cart',
            name : '购物车',
            component : () => import('../views/cart/Cart')
        },
        {
            path : '/profile',
            name : '我的',
            component : () => import('../views/profile/Profile')
        }
    ]
})
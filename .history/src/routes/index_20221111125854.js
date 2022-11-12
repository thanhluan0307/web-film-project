import Home from '~/page/Home/home';
import Category from '~/page/Category/category';
import Login from '~/page/Login/login';
import DetailProduct from '~/page/DetailProduct/detailProduct';
import { Cart } from '~/page/Cart/cart';


const publicRoutes = [
    {path:'/',component: Home,layout:true},
    {path:'/category',component: Category},
    {path:'/login',component: Login},
    {path:'/allpro',component: DetailProduct},
    {path: '/cart', component: Cart}
]

const privateRoutes = [

]

export { privateRoutes,publicRoutes}
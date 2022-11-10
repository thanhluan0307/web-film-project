import Home from '~/page/Home/home';
import Category from '~/page/Category/category';
import Login from '~/page/Login/login';
import StoreInfor from "~/page/StoreInfor/StoreInfor"
import DetailProduct from '~/page/DetailProduct/detailProduct';


const publicRoutes = [
    {path:'/',component: Home,layout:true},
    {path:'/category',component: Category},
    {path:'/login',component: Login},
    {path:'/allpro',component: DetailProduct},
    {path: "/storeInfor",component: StoreInfor}
]

const privateRoutes = [

]

export { privateRoutes,publicRoutes}
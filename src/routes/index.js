import Home from '~/page/Home/home';
import Category from '~/page/Category/category';
import Login from '~/page/Login/login';
import StoreInfor from "~/page/StoreInfor/StoreInfor"
import DetailProduct from '~/page/DetailProduct/detailProduct';
import Error404 from '~/page/Error404/Error404';
import Search from '~/page/Search/serch';
import MyStore from '~/page/MyStore/myStore'


const pageRoutes = [
    {path:'/',component: Home,layout:true},
    {path:'/category/:categoryID',component: Category},
    {path:'/login',component: Login},
    {path:'/product/:productID',component: DetailProduct},
    {path: "/storeInfor",component: StoreInfor},
    {path: "/search",component: Search},
    {path: "*",component: Error404},
    {path: "/myStore",component: MyStore}
]


export {pageRoutes}
import Home from '~/page/Home/home';
import Category from '~/page/Category/category';
import Login from '~/page/Login/login';
import StoreInfor from "~/page/StoreInfor/StoreInfor"
import DetailProduct from '~/page/DetailProduct/detailProduct';
import MyStore from '~/page/MyStore/myStore'


const pageRoutes = [
    {path:'/',component: Home,layout:true},
    {path:'/category',component: Category},
    {path:'/login',component: Login},
    {path:'/product/:productID',component: DetailProduct},
    {path: "/storeInfor",component: StoreInfor},
    {path: "/myStore",component: MyStore}
]


export {pageRoutes}
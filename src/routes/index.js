import Home from '~/page/Home/home';
import Tv from '~/page/Tv/tv';
import Movie from '~/page/Movie/movie';
import Person from '~/page/Person/person';


const publicRoutes = [
    {path:'/',component: Home,layout:true},
    {path:'/tv',component: Tv},
    {path:'/movie',component: Movie},
    {path:'/person',component: Person},
]

const privateRoutes = [

]

export { privateRoutes,publicRoutes}
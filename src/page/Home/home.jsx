import {useState,useEffect} from "react"
import axios from "~/axios";
import ContaierProduct from "~/components/ContaierProduct/ContaierProduct";
import classNames from "classnames/bind";
import styles from "./home.module.scss"
import IconCategory from "./IconCategory";
import HomeStore from "~/components/HomeStore/homeStore";

const cx= classNames.bind(styles)
function Home() {
  const [catgory,setCategory] = useState([])
  const [catgoryObj,setCategoryObj] = useState([])

 
  useEffect(() => {
    axios.get('/category/get-all-categories')
    .then (res => {
        const data = res.data.categories
        console.log(data)
        const categories = data.map(item =>{
        return item.categoryName 
      })
      setCategory(categories)
      setCategoryObj(data)
    }) 
  },[])
    return  ( 
        <>
          <div>
            <div className={cx("slider")}></div>
            <ul className={cx('icons')}>
              {catgoryObj?.map(item => {
                console.log(item)
                return (
                  <IconCategory key={item._id} data={item}/>
                )
              })}
            </ul>
          </div>
          {catgory.map(categorie => {
            return (
              <ContaierProduct key={categorie} filter={categorie}/>
            )
          })}
          <HomeStore/>
        </>
     );
}

export default Home;
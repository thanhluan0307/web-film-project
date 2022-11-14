import { useParams } from "react-router-dom";
import ContaierProduct from "~/components/ContaierProduct/ContaierProduct";
import HomeStore from "~/components/HomeStore/homeStore";

function Category() {
    const {categoryID} = useParams()
    console.log(categoryID)
    return ( 
       <>
            <ContaierProduct filter={categoryID}/>
            <HomeStore/>
       </>
     );
}

export default Category;
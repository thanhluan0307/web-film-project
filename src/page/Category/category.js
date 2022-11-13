import { useParams } from "react-router-dom";
import ContaierProduct from "~/components/ContaierProduct/ContaierProduct";
import HomeStore from "~/components/HomeStore/homeStore";

function Category() {
    const {categoryID} = useParams()
    return ( 
       <>
            <ContaierProduct filter={categoryID}/>
            <HomeStore/>
       </>
     );
}

export default Category;
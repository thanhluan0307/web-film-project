import HomeStore from "~/components/HomeStore/homeStore";



function Error404() {
    return ( 
        <>
            <h1 style={{margin:"50px",fontSize:"90px"}}>Không Tìm Thấy Sản phẩm</h1>
            <HomeStore/>
        </>
     );
}

export default Error404;
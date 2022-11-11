import Header from "./Header/Header";
import Footer from "./Footer/footer";
import classNames from "classnames/bind";
import style from './DefaultLayout.scss'
import { useEffect, useState } from "react";
const cx = classNames.bind(style)
function DefaultLayout({children}) {
    const [load,setLoad] = useState(true)

    useEffect(()=> {
        setTimeout(()=> {
            setLoad(false)
        },1000)
    },[])
    return ( 
        <>
            <Header/>
                <div className={cx('contaier')}>
                    {children}
                </div>
            {load || <Footer/>}
        </>
     );
}

export default DefaultLayout;
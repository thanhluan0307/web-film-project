import Header from "./Header/Header";
import Footer from "./Footer/footer";
import classNames from "classnames/bind";
import style from './DefaultLayout.scss'
const cx = classNames.bind(style)
function DefaultLayout({children}) {
    return ( 
        <>
            <Header/>
                <div className={cx('contaier')}>
                    {children}
                </div>
            <Footer/>
        </>
     );
}

export default DefaultLayout;
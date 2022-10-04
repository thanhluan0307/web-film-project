import Header from "./Header/Header";
import Footer from "./Footer";
import classNames from "classnames/bind";
import style from './DefaultLayout.scss'
const cx = classNames.bind(style)
function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <div className={cx('contaier')}>
                {children}
            </div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;
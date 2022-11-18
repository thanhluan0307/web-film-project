
import classNames from "classnames/bind"

import styles from "./modal.module.scss"
import Nav from "~/Layout/DefaultLayout/Nav/nav"

const cx = classNames.bind(styles)

function Modal({open,onClose}) {
   if(!open) return null
   
    return ( 
        <div className={cx('overlay')} onClick={onClose}>
           <div className={cx('modal-contaier')} onClick={e => e.stopPropagation()}>
               <p>MENU</p>
               <Nav onClose={onClose}/>
           </div>
        </div>
     );
}

export default Modal;
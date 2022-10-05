import classNames from "classnames/bind";
import style from './TippyWrapper.scss'
import {Link} from 'react-router-dom'

const cx = classNames.bind(style)
function TippyWrapper() {

    return (  
        <ul className={cx('wrapper')}>
           <li><Link to=""></Link></li>
           <li><Link to=""></Link></li>
           <li><Link to=""></Link></li>
           <li><Link to=""></Link></li>
        </ul>
    );
}

export default TippyWrapper;
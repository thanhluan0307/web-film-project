import classNames from "classnames/bind";
import style from './TippyWrapper.scss'

const cx = classNames.bind(style)
function TippyWrapper({value1,value2 =null,value3 =null,value4=null}) {

    return (  
        <ul className={cx('wrapper')}>
            <li><a href="/movie">{value1}</a></li>
            {value2 && <li><a href="/movie">{value2}</a></li>}
            {value3 && <li><a href="/movie">{value3}</a></li>}
            {value4 && <li><a href="/movie">{value4}</a></li>}
        </ul>
    );
}

export default TippyWrapper;
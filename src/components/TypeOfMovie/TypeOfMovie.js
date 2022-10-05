import style from "./TypeOfMovie.module.scss"
import classNames from "classnames/bind"
import {Link} from "react-router-dom"

const cx = classNames.bind(style)
function TypeOfMovie () {
    return (
        <div className={cx('wrapper')}>
            <Link to="/">
                <img src="https://s199.imacdn.com/vg/2022/10/03/c7706430d0a195cf_75bf068e65587988_28059166478870463.jpg" alt=""/>
            </Link>
        </div>
    )
}

export default TypeOfMovie
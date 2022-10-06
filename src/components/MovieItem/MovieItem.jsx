import style from "./MovieItem.module.scss"
import classNames from "classnames/bind"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(style)
function MovieItem ({
    thumbUrl
}) {
    return (
    
            <div className={cx('item')}>
                <Link className={cx('link')} to="/">
                    <img className={cx('image')} src={thumbUrl} alt=""/>
                </Link>
                <div className={cx('play-btn')}>
                   <FontAwesomeIcon icon={faPlay}/>
                </div>
            </div>
     
    )
}

export default MovieItem
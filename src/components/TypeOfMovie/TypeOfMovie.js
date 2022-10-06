import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import MovieItem from "~/components/MovieItem/MovieItem"
import axios from "axios"
import style from './TypeOfMovie.module.scss'
import { useEffect, useState } from "react"

const cx = classNames.bind(style)
function TypeOfMovie ({title}) {
    const [lists, setLists] = useState({})
    useEffect(() => {
        axios.get('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1')
            .then(res => {
                setLists(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>
                {title} 
                <FontAwesomeIcon className={cx('icon')} icon={faChevronRight}/>
            </h2>
            <div className={cx('movie-list')}>
                {lists.items && lists.items.map(item => {
                    return (
                        <MovieItem key={item._id} thumbUrl={lists.pathImage && lists.pathImage+ item.thumb_url} />
                    )
                })}
            </div>
        </div>
    )
}

export default TypeOfMovie
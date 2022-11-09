import styles from '~/Layout/DefaultLayout/DefaultLayout.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function BackToTopButton() {
    return ( 
        <div className={cx('up-top')}>
            <span>Về đầu trang</span>
            <FontAwesomeIcon className={cx('icon-up')} icon={faArrowRight}/>
        </div>
     );
}

export default BackToTopButton;
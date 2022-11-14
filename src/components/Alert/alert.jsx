import React from 'react'
import classNames from "classnames/bind";
import styles from './alert.module.scss'
import { Alert,AlertTitle} from '@mui/material';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles) 

function alert() {
  return (
    <div className={cx('alert-container')}>
        <Alert 
            className={cx('alert')} 
            severity="success"
            onClose={() => {}}
        >
            <AlertTitle className={cx('alert-title')} >Success</AlertTitle>
            <div>Bạn đã thêm vào giỏ hàng — <Link to='/myStore'><strong>Xem cửa hàng</strong></Link></div>
        </Alert>
    </div>
  )
}

export default alert
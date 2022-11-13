import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './slideauto.module.scss'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(className);
  return (
    <div
      className={`${className} ${styles.nextPrevButton}`}
      style={{ right:'3%'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={`${className} ${styles.nextPrevButton}`}
      style={{ left:'1.5%',zIndex:'1' }}
      onClick={onClick}
    />
  );
}

export default class AutoPlay extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    
    return (
      <div className={styles.container}>
      <div className={styles.slideContainer}>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className={styles.slideImg}>
            <img width='100%' height='400px' src="https://cf.shopee.vn/file/377b0ea3b885d1a0f2883076f4d5ad87" alt="" />
          </div>
          <div className={styles.slideImg}>
            <img width='100%' height='400px' src="https://cf.shopee.vn/file/3a2583d2c1230d52e4acd80af1dda759" alt="" />
          </div>
          <div className={styles.slideImg}>
            <img width='100%' height='400px' src="https://cf.shopee.vn/file/4facbfd5be1d742b2bb0fcc51de7eade" alt="" />
          </div>
          <div className={styles.slideImg}>
            <img width='100%' height='400px' src="https://cf.shopee.vn/file/10ebae2cc8efd8e152b7947682723682" alt="" />
          </div>
          <div className={styles.slideImg}>
            <img width='100%' height='400px' src="https://cf.shopee.vn/file/1ea5fb6998b2c4cc65a5e511cc004b4b" alt="" />
          </div>
        </Slider>
        </div>
        <div className={styles.rightSlide}>
          <div className={styles.hardImg}>
              <img width='100%' height='190px' src="https://cf.shopee.vn/file/1ea5fb6998b2c4cc65a5e511cc004b4b" alt="" />
            </div>
          <div className={styles.hardImg}>
            <img width='100%' height='190px' src="https://cf.shopee.vn/file/3affa436117eb68fdd5fd25cc5ac87f3" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
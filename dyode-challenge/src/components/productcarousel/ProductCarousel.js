import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/scss";
import 'swiper/scss/navigation';
import productimage from "../../assets/product.png";

const ProductCarousel = () => {

    return (
        <div className="product-carousel">
            <h1 className="h1 product-carousel--heading">Shop New Arrivals</h1>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.swiper-button-prev-product',
                    nextEl: '.swiper-button-next-product'
                  }}
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                    800: {
                        slidesPerView: 3
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                }}
            >
                <div>
                {[...Array(5)].map((e, idx) =>
                    <SwiperSlide key={idx}>
                        <div className="product-carousel--slide">
                            <img className="product-carousel--slide__image" src={productimage} alt="Product" /> 
                            <h4 className="h4 product-carousel--slide__title">Product Title</h4>
                            <h5 className="h5 product-carousel--slide__type">Women's T-Shirt</h5>
                            <p className="product-carousel--slide__price">$19.99</p>
                        </div>
                    </SwiperSlide>
                )}
                </div>
            </Swiper>
            <div className="swiper-button-prev swiper-button-prev-product"/>
            <div className="swiper-button-next swiper-button-next-product"/>
        </div>
    )
}

export default ProductCarousel;
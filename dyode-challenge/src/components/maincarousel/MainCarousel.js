import React, { useState } from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Desktop, TabletAndBelow } from "../../utility/MediaQueries";
import Button from "../buttons/Button";
import 'swiper/scss';
import 'swiper/scss/pagination';
import heroOne from "../../assets/hero1.png";
import heroTwo from "../../assets/hero2.png";
import heroThree from "../../assets/hero3.png";

const slides = [
    {
        image: heroOne,
        heading: "Shop New Arrivals",
        subheading: "Our coolest new items are waiting for you!",
        color: "green"
    },
    {
        image: heroTwo,
        heading: "Our Fave Tees",
        subheading: "Shop all our favorites.",
        color: "white"
    },
    {
        image: heroThree,
        heading: "Men's Tees",
        subheading: "Find the perfect shirt.",
        color: "white"
    }
]

const MainCarousel = () => {

    const [swiperIndex, setSwiperIndex] = useState(0);

    return (
        <>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                onActiveIndexChange={(swiper => setSwiperIndex(swiper.activeIndex)) }
            >
                {slides.map((slide, idx) => 
                    <SwiperSlide key={slide.image} virtualIndex={idx}>
                        <img src={slide.image} alt={slide.heading} />
                        <Desktop>
                            <div className={`maincarousel-text maincarousel-text--${slide.color}`}>
                                <div>
                                    <h1 className="h1 maincarousel-text__heading">{slide.heading}</h1>
                                    <h2 className="h2 maincarousel-text__subheading">{slide.subheading}</h2>
                                    <Button type="primary" text="Shop Now" />
                                </div>
                            </div>
                        </Desktop>
                    </SwiperSlide>    
                )}
            </Swiper>
            <TabletAndBelow>
                {slides.map((slide, idx) => 
                    (swiperIndex === idx) &&
                    <div key={slide.image} className="maincarousel-text--bottom">
                        <h1 className="h1 maincarousel-text__heading">{slide.heading}</h1>
                        <h2 className="h2 maincarousel-text__subheading">{slide.subheading}</h2>
                        <Button type="primary" text="Shop Now" />
                    </div>
                )}
            </TabletAndBelow>
        </>
    )
}

export default MainCarousel;
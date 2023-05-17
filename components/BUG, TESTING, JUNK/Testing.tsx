"use client"
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { mentors } from "../../constant";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";



export default function Testing() {

    const slider = useRef(null);

        // const prevSlide = () => {
        //     setCurrentSlide((prev) => (prev === 0 ? mentors.length - 1 : prev - 1))
        // }
        // const nextSlide = () => {
        //     setCurrentSlide((prev) => (prev === mentors.length - 1 ? 0 : prev + 1))
        // }
        
        const settings = {
            dots: false,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        }

    return (
        <div className="w-full hidden">
            <Slider {...settings} ref={slider}>
                {mentors.map((slide) => (
                    <div key={slide.id} className="relative flex justify-center items-center">
                        <Image src={slide.image} alt={slide.id} />
                        <div className="flex-col w-full bg-black bg-opacity-50 text-white flex items-center justify-center">
                            <h2 className="text-2xl text-center">{slide.title}</h2>
                            <p className="text-lg text-center">{slide.content}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* <div className="flex flex-row justify-end w-full p-5">
                <button onClick={() => setCurrentSlide((prev) => prev - 1)} className="flex justify-center items-center py-4 px-6 border rounded-full hover:bg-[#FFA500] hover:text-black duration-300">
                    <RxArrowLeft className="w-5 h-5"/>
                </button>
                <button onClick={() => setCurrentSlide((prev) => prev + 1)} className="flex justify-center items-center py-4 px-6 border rounded-full hover:bg-[#FFA500] hover:text-black duration-300">
                    <RxArrowRight className="w-5 h-5"/>
                </button>
            </div> */}
        </div>
    )
}
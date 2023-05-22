"use client"
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper";
import { materials } from "../constant"
import "swiper/css";
import "swiper/css/navigation"

export default function Swiper_material() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                }}
                className="mySwiper w-full flex justify-center items-center text-center mb-12 ">
                {materials.map((material) =>(
                    <SwiperSlide key={material.number} className="">
                        <div className="flex lg:hidden flex-row items-center justify-center border rounded-xl border-[#1C2024] m-5 cursor-pointer">
                            <div className="flex flex-col items-center w-[400px] h-[250px] py-7 px-8">
                                <div className="flex flex-row justify-center items-start">
                                    <h1 className="flex justify-center items-center border border-[#FFA500] text-black rounded-lg w-8 h-8 bg-[#FFA500] mr-3">
                                        {material.number}
                                    </h1>
                                    <h1 className=" flex items-start justify-start font-bold text-[20px] h-[70px]">
                                        {material.title}
                                    </h1>
                                </div>
                                <p className="py-3 font-normal text-[16px] text-left text-[#878787]">
                                    {material.content}
                                </p>
                            </div>
                        </div>
                        </SwiperSlide>    
                ))}
            </Swiper>
        </>
    )
}
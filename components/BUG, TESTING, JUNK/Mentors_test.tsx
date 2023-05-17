"use client"
import { useState } from "react"
import Slider from "react-slick"
import { mentors } from "../../constant"
import Image from "next/image"


export default function Mentors_test() {
        // const prevSlide = () => {
        //     setCurrentSlide((prev) => (prev === 0 ? mentors.length - 1 : prev - 1))
        // }
        // const nextSlide = () => {
        //     setCurrentSlide((prev) => (prev === mentors.length - 1 ? 0 : prev + 1))
        // }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // prevArrow:
        // nextArrow:
    }
    return (
        <section className="flex flex-col items-center w-full py-12">
            <div className="flex flex-col items-center gap-5">
                <h1 className="font-semibold text-[36px] text-center">
                    Learn from the <span className="underline underline-offset-1 decoration-8 decoration-[#FFA500]">Expert</span>
                </h1>
                <p className="font-normal text-[16px] text-center text-[#878787]">
                    Discover what you&apos;ll learn in DesignCamp&apos;s graphic design course, from fundamentals to advanced techniques.
                </p>
            </div>
            <div className="w-full p-12">
                <Slider {...settings}>
                    {mentors.map((mentor) => (
                        <div key={mentor.id} className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center w-[300px]">
                                <Image src={mentor.image} alt={mentor.id} />
                            </div>
                            <div className="flex flex-col justify-center items-start py-5 pl-5 w-[300px]">
                                <h1 className="font-bold text-[20px]">
                                    {mentor.name}
                                </h1>
                                <p className="font-medium text-[16px] pb-2">
                                    {mentor.title}
                                </p>
                                <p className="font-normal text-[16px]">
                                    {mentor.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
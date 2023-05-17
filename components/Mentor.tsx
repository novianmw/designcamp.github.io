"use client"
import Image from "next/image"
import { mentors } from "../constant"
import { RxArrowLeft, RxArrowRight } from "react-icons/rx"
import { Montagu_Slab } from "next/font/google"
import Slider from "react-slick"
import { useRef } from "react"

const slab = Montagu_Slab({ subsets: ["latin"], display: "swap" })

export default function Mentor() {
    const slider = useRef<any>(null)
        // const prevSlide = () => {
        //     setCurrentSlide((prev) => (prev === 0 ? mentors.length - 1 : prev - 1))
        // }
        // const nextSlide = () => {
        //     setCurrentSlide((prev) => (prev === mentors.length - 1 ? 0 : prev + 1))
        // }

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }

    return (
        <section className="flex flex-col items-center w-full py-12 gap-4">
            <div className="flex flex-col items-center pb-6">
                <h1 className={`font-semibold text-[36px] text-center ${slab.className}`}>
                    Learn from the <span className="underline underline-offset-1 decoration-8 decoration-[#FFA500]">Expert</span>
                </h1>
                <p className="font-normal text-[16px] text-center text-[#878787]">
                    Discover what you&apos;ll learn in DesignCamp&apos;s graphic design course, from fundamentals to advanced techniques.
                </p>
            </div>
            <div className="w-full py-12">
                <Slider ref={slider} {...settings}>
                    {mentors.map((mentor) => (
                        <div key={mentor.id} className="relative flex flex-row justify-center items-center px-12">
                            <div className="flex flex-col justify-center items-center ">
                                <Image src={mentor.image} alt={mentor.id} />
                            </div>
                            <div className="flex flex-col justify-center items-start">
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
            <div className="flex flex-row w-full justify-end gap-3 p-3">
                <button onClick={() => slider.current?.slickPrev() } className="flex justify-center items-center py-4 px-6 border rounded-full hover:bg-[#FFA500] hover:text-black duration-300">
                    <RxArrowLeft className="w-5 h-5"/>
                </button>
                <button onClick={() => slider.current?.slickNext() } className="flex justify-center items-center py-4 px-6 border rounded-full hover:bg-[#FFA500] hover:text-black duration-300">
                    <RxArrowRight className="w-5 h-5"/>
                </button>
            </div>
        </section>
    )
}
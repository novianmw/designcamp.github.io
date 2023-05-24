"use client"
import { Poppins } from "next/font/google"
import { RxCross1 } from "react-icons/rx"
import { logo } from "../public/Assets/list"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const poppins = Poppins ({weight: "600", subsets: ["latin"]})

export default function Navbar() {
    const [toggle, setToggle] = useState(true)
    const handleClick = () => {
        setToggle((prev) => !prev)
    }
    
    return (
        <section className="flex flex-col items-start w-full">
            <div className={`${toggle ? "flex" : "hidden"} flex-row justify-center items-center py-4 bg-[#FFA500] w-full`}>
                <h3 className="font-normal text-center text-[12px] md:text-[16px]">
                    Sign now and get discounts up to 90% off
                </h3>
                <button className="absolute right-10 text-slate-500 text-[16px] md:text-2xl hover:text-black" 
                    onClick={handleClick} >
                    <RxCross1 />
                </button>
            </div>
            <div className="w-full flex flex-row justify-between items-center shadow-md p-4 md:p-6 ">
                <div className="flex flex-row justify-start items-center">
                    <Link href="/" className="flex w-32 md:w-full md:h-full">
                        <Image src={logo} alt="logo"/>
                        <h1 className={`flex items-center font-semibold ml-3 text-[16px] md:text-[24px]  ${poppins.className}`}>
                            DesignCamp
                        </h1>
                    </Link>
                </div>
                <div className="flex flex-row justify-end items-center gap-4">
                    <button className="duration-300 text-[12px] py-2 px-3 md:text-[16px] md:py-4 md:px-6  hover:text-[#FFA500]">Sign in</button>
                    <button className="border rounded-full bg-black text-white text-[12px] py-2 px-3 md:text-[16px] md:py-4 sm:px-6 hover:bg-[#FFA500] hover:text-black duration-300">Join now</button>
                </div>
            </div>
        </section>
    )
}
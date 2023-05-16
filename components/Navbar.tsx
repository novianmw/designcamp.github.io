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
                <h3 className="font-normal text-center">
                    Sign now and get discounts up to 90% off
                </h3>
                <button className="absolute right-10 text-2xl text-slate-500 hover:text-black" 
                    onClick={handleClick} >
                    <RxCross1 />
                </button>
            </div>
            <div className="flex flex-row justify-between items-center py-6 px-7 w-full shadow-md">
                <div className="flex flex-row justify-start items-center">
                    <Link href="/" className="flex">
                        <Image src={logo} alt="logo"/>
                        <h1 className={`font-bold text-2xl ml-3 ${poppins.className}`}>
                            DesignCamp
                        </h1>
                    </Link>
                </div>
                <div className="flex flex-row justify-end items-center gap-4">
                    <button className="hover:text-[#FFA500] duration-300 py-4 px-6">Sign in</button>
                    <button className="py-4 px-6 border rounded-full bg-black text-white hover:bg-[#FFA500] hover:text-black duration-300">Join now</button>
                </div>
            </div>
        </section>
    )
}
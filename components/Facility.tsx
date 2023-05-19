import Image from "next/image"
import { lists } from "../constant"
import { RxCheck } from "react-icons/rx"
import { play, videoCover } from "../public/Assets/list"
import { Montagu_Slab } from "next/font/google"

const slab = Montagu_Slab({ subsets: ["latin"], display: "swap" })

export default function Facility() {
    return (
        <section className="flex flex-col justify-center items-start md:flex-row md:justify-between p-12 gap-14">
            <div className="flex flex-col text-center md:text-left gap-5">
                <h1 className={`font-semibold text-[36px] ${slab.className}`}>
                    Comprehensive Learning <span className="underline underline-offset-1 decoration-8 decoration-[#FFA500]">Facilities</span>
                </h1>
                <div className="flex flex-col justify-center items-center md:items-start w-full py-3 md:py-0 gap-3">
                {lists.map((list) => (
                    <li key={list.id} className="flex flex-row font-normal text-[16px]">
                       <RxCheck className="flex justify-start items-start text-[23px] text-[#FFA500]"/>
                       <p className="font-normal ml-3">
                            {list.content}
                       </p>
                    </li>
                ))}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center relative">
                    <Image src={videoCover} alt="video" className="w-[600px]"/>
                </div>
        </section>
    )
}
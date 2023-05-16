import Image from "next/image"
import { lists } from "../constant"
import { RxCheck } from "react-icons/rx"
import { play, videoCover } from "../public/Assets/list"
import { Montagu_Slab } from "next/font/google"

const slab = Montagu_Slab ({subsets: ["latin"]})

export default function Facility() {
    return (
        <section className="flex flex-row gap-16 justify-between items-start py-11 px-12">
            <div className="flex flex-col items-start gap-5">
                <h1 className={`font-semibold text-[36px] max-w-[400px] ${slab.className}`}>
                    Comprehensive Learning <span className="underline underline-offset-1 decoration-8 decoration-[#FFA500]">Facilities</span>
                </h1>
                <div className="flex flex-col items-start gap-3">
                {lists.map((list) => (
                    <li key={list.id} className="flex flex-row font-normal text-[16px]">
                       <RxCheck className="text-[23px] text-[#FFA500]"/>
                       <p className="font-normal text-[16px] ml-3">
                            {list.content}
                       </p>
                    </li>
                ))}
                </div>
            </div>
{/* PR = EDIT LIST BAGIAN POSITION VIDEO */}
            <div className="flex items-start relative">
                <div className="ml-32">
                    <Image src={videoCover} alt="video" className="w-[600px]"/>
                </div>
                <div className="absolute bottom-[120px] right-[250px] border-[#FFA500] rounded-full p-5 bg-[#FFA500] z-10 ">
                    <Image src={play} alt="play" className="w-[40px]"/>
                </div>
            </div>
        </section>
    )
}
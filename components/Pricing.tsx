import Image from "next/image";
import { logo } from "../public/Assets/list"
import { benefits, others } from "../constant";
import { RxCheck } from "react-icons/rx";
import { Montagu_Slab } from "next/font/google"

const slab = Montagu_Slab ({subsets: ["latin"]})

export default function Pricing() {
    return (
        <section className="flex flex-col items-center w-full py-12">
            <div className="flex flex-col items-center gap-3 my-12">
                <h1 className={`font-semibold text-[36px] text-center ${slab.className}`}>
                    <span className="underline underline-offset-1 decoration-8 decoration-[#FFA500]">Save More</span> with DesignCamp
                </h1>
                <p className="font-normal text-[16px] text-center">
                    Get benefits worth thousands of dollars!
                </p>
            </div>
            <div className="flex flex-row items-center">
                <div className="flex flex-col items-start border-2 border-[#1C2024] bg-[#1C2024] rounded-xl px-12 w-[500px] h-[500px] -mr-12">
                    <div className="flex flex-row py-12">
                        <Image src={logo} alt="logo" />
                        <h1 className={`font-bold text-[36px] text-white ml-3`}>
                            DesignCamp
                        </h1>
                    </div>
                    <div className="flex flex-row py-5">
                        <h3 className="font-normal text-[24px] text-red-500 line-through">
                            $500
                        </h3>
                        <h1 className="font-normal text-[30px] text-white">
                            $60
                        </h1>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        {benefits.map((value) => (
                            <li key={value.id} className="flex flex-row font-normal text-[16px]">
                                <RxCheck className="text-[23px] text-[#FFA500]"/>
                                <p className="font-normal text-[16px] ml-3 text-white">
                                    {value.content}
                                </p>
                            </li>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center border-2 border-[#FFA500] rounded-full p-10 bg-[#FFA500] z-10">
                    <h1 className="font-bold text-[64px]">VS</h1>
                </div>
                <div className="flex flex-col items-start border-2 border-[#1C2024] bg-[#1C2024] rounded-xl px-12 w-[500px] h-[500px] -ml-12">
                    <div className="flex flex-col items-start py-12 gap-3">
                        {others.map((other) => (
                            <div key={other.title} className="flex flex-col font-normal text-[16px]">
                                <h1 className="font-bold text-[20px] ml-3 text-white">
                                    {other.title}
                                </h1>
                                <p className="font-normal text-[16px] ml-3 text-white">
                                    {other.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
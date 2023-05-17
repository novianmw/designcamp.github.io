import Image from "next/image"
import { comparisons } from "../constant"
import { logo } from "../public/Assets/list"
import { Montagu_Slab, Poppins } from "next/font/google"

const slab = Montagu_Slab({ subsets: ["latin"], display: "swap" })
const poppins = Poppins ({weight: "600", subsets: ["latin"]})

export default function Comparison() {
    return (
        <section className="flex flex-col items-center bg-[#1C2024] w-full py-12">
            <div className="flex flex-col items-center gap-3 my-12">
                <h1 className={`font-semibold text-[36px] text-center text-white ${slab.className}`}>
                    Self Learning vs <span className="text-[#FFA500]">DesignCamp</span>
                </h1>
                <p className="font-normal text-[16px] text-center text-white">
                    Mentorship is key to success in graphic design - choose DesignCamp for personalized guidance.
                </p>
            </div>
            <div className="flex flex-row justify-between items-start gap-10">
                <div className="flex flex-col justify-start items-center mt-20">
                    <div className="flex flex-col items-start w-[300px]">
                    {comparisons.map((comparison) => (
                        <div key={comparison.id} className="font-bold text-[16px] text-white pb-16 h-[150px]">
                            {comparison.title}
                        </div>
                    ))}
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center border-2 border-[#5F5F5F]/10 bg-[#5F5F5F]/10 rounded-xl px-4">
                    <h1 className="font-bold text-[24px] text-white py-5">
                        Self Learning
                    </h1>
                    <div className="flex flex-col items-start w-[400px]">
                        {comparisons.map((comparison) => (
                            <div key={comparison.id} className="font-normal text-[16px] text-white pb-16 h-[150px]">
                                {comparison.content}
                            </div>
                        ))}
                    </div>
                </div>
{/* CEK SHADOW DROP INTO FULL */}
                <div className="flex flex-col justify-start items-center border-4 shadow-2xl shadow-[#FFA500] border-[#FFA500] bg-[#5F5F5F]/10 rounded-xl px-4">
                    <div className="flex flex-row py-5">
                        <Image src={logo} alt="logo" />
                        <h1 className={`font-bold text-[24px] text-white ml-3 ${poppins.className}`}>
                            DesignCamp
                        </h1>
                    </div>
                    <div className="flex flex-col justify-start items-start w-[400px]">
                        {comparisons.map((comparison) => (
                            <div key={comparison.id} className="font-normal text-[16px] text-white pb-16 h-[150px]">
                                {comparison.premium}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
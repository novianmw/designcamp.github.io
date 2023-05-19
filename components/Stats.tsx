import { stats } from "../constant"
import { Montagu_Slab } from "next/font/google"

const slab = Montagu_Slab({ subsets: ["latin"], display: "swap" })

export default function Stats() {
    return (
        <section className="flex flex-row justify-between items-start p-12 bg-[#1C2024] w-full">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-row justify-center text-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className={`flex font-semibold text-center text-white text-[28px] md:text-[48px] ${slab.className}`}>
                            {stat.title}
                        </h3>
                        <p className="flex items-center justify-start text-white font-normal text-[16px]">
                            {stat.content}
                        </p>
                    </div>
                    <div className={`flex justify-center items-center p-0 ${index === stats.length - 1? "border-none": "border-r-4 md:p-12"} border-r-4`}></div>
                </div>
            ))}
          
        </section>
    )
}
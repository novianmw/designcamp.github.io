import { stats } from "../constant"
import { Montagu_Slab } from "next/font/google"

const slab = Montagu_Slab ({subsets: ["latin"]})

export default function Stats() {
    return (
        <section className="pl-28 flex flex-row justify-center items-center py-10 gap-20 bg-[#1C2024] w-full">
            {stats.map((stat, index) => (
                <div key={stat.id} className="flex flex-col justify-center items-center">
                    <h3 className={`flex flex-row font-semibold text-[48px] text-center text-white ${slab.className}`}>
                        {stat.title}
                        <div className={`-mb-3 mx-12 border  ${index === stats.length - 1? "border-none": "border-r-2"} border-r-2`}></div>
                    </h3>
                    <p className="flex mr-24 items-center font-normal text-[16px] text-center text-white">
                        {stat.content}
                    </p>
                </div>
            ))}
        </section>
    )
}
import { RxArrowRight } from "react-icons/rx"
import { materials } from "../constant"
import { Montagu_Slab } from "next/font/google"

const slab = Montagu_Slab({ subsets: ["latin"], display: "swap" })

export default function Material() {
    const FeedbackCard = ({number, title, content, more }:any) => (
        <div className="flex flex-row items-center border rounded-xl border-[#1C2024] m-5">
            <div className="flex flex-col items-start w-[400px] h-[250px] py-7 px-8 shadow-lg hover:bg-[#1C2024] hover:rounded-xl hover:text-white duration-300">
                <div className="flex flex-row justify-center items-center">
                    <h1 className="flex justify-center items-center border border-[#FFA500] text-black rounded-lg w-8 h-8 bg-[#FFA500] mr-3">
                        {number}
                    </h1>
                    <h1 className="font-bold text-[20px]">
                        {title}
                    </h1>
                </div>
                <p className="py-3 font-normal text-[16px] text-left text-[#878787] h-[300px]">
                    {content}
                </p>
                <button className="py-3 flex flex-row justify-center items-center font-medium text-[16px]">
                    {more}
                    <RxArrowRight className="w-5 h-5 ml-3"/>
                </button>
            </div>
        </div>
    )

    return (
        <section className="flex flex-col justify-center items-center py-10">
            <div className="flex flex-col items-center gap-4">
                <h1 className={`font-semibold text-[36px] ${slab.className}`}>
                    What Will You <span className="underline underline-offset-1 decoration-8 decoration-[#FFA500]">Learn</span>
                </h1>
                <p className="font-normal text-[16px]">
                Discover what you&apos;ll learn in DesignCamp&apos;s graphic design course, from fundamentals to advanced techniques.
                </p>
                <div className="flex flex-row items-center">
                {materials.slice(0,3).map((item)=> (
                    <FeedbackCard key={item.number} {...item} />
                ))}
            </div>
            <div className="flex flex-row items-center">
                {materials.slice(3,6).map((item)=> (
                    <FeedbackCard key={item.number} {...item} />
                ))}
            </div>
        </div>
    </section>
  )
}
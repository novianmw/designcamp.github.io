import { RxArrowRight } from "react-icons/rx";
import { Montagu_Slab } from "next/font/google"

const slab = Montagu_Slab ({subsets: ["latin"]})

export default function Promo() {
    return (
        <section className="flex flex-col justify-center w-3/4 items-center my-12 p-12 border-2 border-[#FFA500] rounded-xl bg-[#FFA500]/20 ">
            <div className="flex flex-col items-center py-12">
                <h1 className={`font-semibold text-[36px] pb-3 ${slab.className}`}>
                    Limited-time Promotion
                </h1>
                <p className="font-normal text-[24px] pb-6">
                    Join today for an exlusive price offer!
                </p>
                <h1 className="font-semibold text-[36px] pb-6">
                    $50
                </h1>
                <button className="flex justify-center items-center py-4 px-6 border rounded-full bg-[#FFA500]">
                    Join Now
                    <RxArrowRight className="w-5 h-5"/>
                </button>
                <p className="font-normal text-[16px] pt-6">
                    Note: Prices will increase as more learning materials are added. Join now to save more!
                </p>
            </div>
        </section>
    )
}
import { RxArrowRight } from "react-icons/rx"
import { Montagu_Slab } from "next/font/google"

const slab = Montagu_Slab({ subsets: ["latin"], display: "swap" })

export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center py-14">
            <h1 className={`font-semibold text-center text-[72px] ${slab.className}`}>
                Transform Your <span className="underline underline-offset-1 decoration-8 decoration-[#FFA500]">Creative</span>
            </h1>
            <h1 className={`font-semibold text-center text-[72px] ${slab.className}`}>
                Vision into <span className="underline underline-offset-1 decoration-8 decoration-[#FFA500]">Reality</span>
            </h1>
            <p className="my-5 font-medium text-center text-[16px] max-w-[912px]">
                Join the DesignCamp community and unlock your potential as a graphic designer, no experience required. Our comprehensive course offers hands-on training, expert guidance, and real-world experience to help you master the art of graphic design from the ground up.
            </p>
            <div className="flex flex-row justify-center items-center gap-5">
                <button className="hover:text-[#FFA500] duration-300 py-4 px-6">Contact Us</button>
                <button className="flex justify-center items-center py-4 px-6 border rounded-full bg-black text-white hover:bg-[#FFA500] hover:text-black duration-300">
                    Start Learning
                    <RxArrowRight className="w-5 h-5 ml-3"/>
                </button>
            </div>
        </section>
    )
}
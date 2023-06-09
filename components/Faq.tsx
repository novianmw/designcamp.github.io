import { questions } from "../constant"
import { Montagu_Slab } from "next/font/google"
import ContentToggle from "./ContentToggle"

const slab = Montagu_Slab({ subsets: ["latin"], display: "swap" })

export default function  Faq () {

    return (
        <section className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full p-12 gap-10">
            <div className="flex flex-col justify-center items-center w-full md:max-w-[400px] ">
                <div className="flex flex-col justify-center items-center text-center md:text-left md:justify-start md:items-start gap-5">
                    <h1 className={`font-semibold text-[36px] ${slab.className}`}>
                        <span className="underline underline-offset-1 decoration-8 decoration-[#FFA500]">Frequently Asked </span>Questions
                    </h1>
                    <p className="font-normal text-[16px] text-[#878787]">
                        Get answers to your questions about DesignCamp&apos;s graphic design course.
                    </p>
                </div>
                <div className="hidden md:flex flex-col items-start w-[400px] gap-5">
                    <h1 className="font-semibold text-[16px]">
                        Have other questions?
                    </h1>
                    <button className="flex justify-center items-center py-4 px-6 border rounded-full bg-black text-white hover:bg-[#FFA500] hover:text-black duration-300">
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="flex flex-col justifty-sart items-start w-full px-12">
                {questions.map((question, index) =>(
                    <div key={index}>
                        <ContentToggle content={question} {...question} />
                        <div className="my-5 flex flex-col justify-center items-center w-[300px] lg:w-[500px] xl:w-[900px] border-2 border-[#878787]"></div>
                    </div>
                ))}
                <div className="flex md:hidden flex-col justify-center items-center w-full gap-5">
                    <h1 className="font-semibold text-[16px]">
                        Have other questions?
                    </h1>
                    <button className="flex justify-center items-center py-4 px-6 border rounded-full bg-black text-white hover:bg-[#FFA500] hover:text-black duration-300">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    )
}
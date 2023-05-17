// INI ADALAH DATA FAQ (ERROR DI BAGIAN TOGGLE: 1 KLIK NGIKUT SEMUA TOGGLE NYA)

"use client"
import { useState } from "react"
import { questions } from "../../constant"
import { RxPlus, RxCross1 } from "react-icons/rx"
import { Montagu_Slab } from "next/font/google"

const slab = Montagu_Slab({ subsets: ["latin"], display: "swap" })

export default function  Faq () {


    const [isOpen, setIsOpen] = useState(true)
    const handleClick = () => {
    setIsOpen((prev) => !prev)
    }

    const ListQuestions = ({id, ask, answer}:any) => (
        <div className="flex flex-col items-start">
            <div className="flex flex-row justify-between w-full items-center">
                <div className="flex flex-row justify-start items-center">
                    <h1 className="font-semibold text-[24px] py-5">
                        {ask}
                    </h1>
                </div>
                <div className="flex flex-row justify-end items-center">
                    <button onClick={handleClick} className="flex justify-end items-center text-2xl text-slate-500 hover:text-black ">
                        {isOpen ? <RxPlus /> : <RxCross1/>}
                    </button>
                </div>
            </div>
            <p className={`font-normal text-[16px] py-5 ${isOpen ? "hidden" : "block"}`}>
                {answer}
            </p>
        </div>
    )

    return (
        <section className="flex flex-row items-start w-full py-12 px-6">
            <div className="flex flex-col items-start w-[400px]">
                <div className="flex flex-col items-start py-12 gap-5">
                    <h1 className={`font-semibold text-[36px] w-[350px] ${slab.className}`}>
                        <span className="underline underline-offset-1 decoration-8 decoration-[#FFA500]">Frequently Asked </span>Questions
                    </h1>
                    <p className="font-normal text-[16px] text-[#878787]">
                        Get answers to your questions about DesignCamp&apos;s graphic design course.
                    </p>
                </div>
                <div className="flex flex-col items-start w-[400px] gap-5">
                    <h1 className="font-semibold text-[16px]">
                        Have other questions?
                    </h1>
                    <button className="flex justify-center items-center py-4 px-6 border rounded-full bg-black text-white hover:bg-[#FFA500] hover:text-black duration-300">
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-between w-full items-start gap-5 px-3">
                {questions.map((question, index) =>(
                    <div key={index}>
                        <ListQuestions content={question} {...question} />
                    </div>
                ))}
            </div>
        </section>
    )
}
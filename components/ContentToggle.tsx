"use client"
import { useState } from "react"
import { RxCross1, RxPlus } from "react-icons/rx"


export default function ContentToggle({id, ask, answer}:any) {
    
    const [isOpen, setIsOpen] = useState(true)
    const handleClick = () => {
    setIsOpen((prev) => !prev)
}

    return (
        <div className="flex flex-col items-start">
            <div className="flex flex-row justify-between w-full items-center">
                <div className="flex flex-row justify-start items-center">
                    <h1 className="font-semibold text-[24px] py-5">
                        {ask}
                    </h1>
                </div>
                <div className="flex flex-row justify-end items-center">
                    <button onClick={handleClick} className="absolute right-10 text-2xl text-slate-500 hover:text-black ">
                        {isOpen ? <RxPlus /> : <RxCross1/>}
                    </button>
                </div>
            </div>
            <p className={`font-normal text-[16px] py-5 ${isOpen ? "hidden" : "block"}`}>
                {answer}
            </p>
            <div className="my-5 flex flex-col justify-center items-center w-[950px] border-2 border-[#878787]"></div>
        </div>
    )
}
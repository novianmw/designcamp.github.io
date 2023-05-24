"use client"
import { useState } from "react"
import { RxCross1, RxPlus } from "react-icons/rx"


export default function ContentToggle({ ask, answer}:any) {
    
    const [isOpen, setIsOpen] = useState(true)
    const handleClick = () => {
    setIsOpen((prev) => !prev)
}

    return (
        <div className="flex flex-col justify-start">
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-start items-center max-w-[200px] md:max-w-[300px] lg:max-w-[500px] xl:max-w-full">
                    <h1 className="flex w-full items-center font-semibold text-[24px] py-5">
                        {ask}
                    </h1>
                </div>
                <div className="flex flex-row justify-end items-center">
                    <button onClick={handleClick} className="text-2xl text-slate-500 hover:text-black ">
                        {isOpen ? <RxPlus /> : <RxCross1/>}
                    </button>
                </div>
            </div>
            <p className={`max-w-[900px] font-normal text-[16px] py-5 ${isOpen ? "hidden" : "block"}`}>
                {answer}
            </p>
        </div>
    )
}
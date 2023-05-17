"use client"

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';



const ContentItem = ({ id, ask, answer }:any) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleToggle = () => {
    setIsOpen((prev) => !prev)
    // setIsOpen(!isOpen);
};

    return (
        <div className="flex flex-col items-start">
            <div className="flex flex-row justify-between w-full items-center">
                <h1 className="font-semibold text-[24px] py-5">
                    {ask}
                </h1>
                <button onClick={handleToggle} className="flex text-2xl text-slate-500 hover:text-black ">
                    {isOpen ? <FiPlus /> : <FiMinus/>}
                </button>
            </div>
            <p className={`font-normal text-[16px] py-5 ${isOpen ? "hidden" : "block"}`}>
                {answer}
            </p>
        </div>

        // <div className="flex items-center">
        //     <div className={`mr-2 ${isOpen ? 'hidden' : 'flex'}`}>{answer}</div>
        //     <button className="text-blue-500 focus:outline-none" 
        //         onClick={handleToggle} >
        //         {isOpen ? <FiPlus /> : <FiMinus />}
        //     </button>
        // </div>
    );
};

export default ContentItem;
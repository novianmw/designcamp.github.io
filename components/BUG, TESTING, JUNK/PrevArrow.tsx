import { RxArrowLeft } from "react-icons/rx";

export default function PrevArrow({onClick}) {
    return (
            <button onClick={onClick} className="flex justify-center items-center py-4 px-6 border rounded-full hover:bg-[#FFA500] hover:text-black duration-300">
                <RxArrowLeft className="w-5 h-5"/>
            </button>
    )
}
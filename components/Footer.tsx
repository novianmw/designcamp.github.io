import Image from "next/image";
import { logo } from "../public/Assets/list";
import { RxInstagramLogo, } from "react-icons/rx";
import { RiTwitterFill, RiYoutubeFill, RiLinkedinFill } from "react-icons/ri"

export default function Footer() {
    return (
        <section className="flex flex-row justify-between items-start w-full bg-[#1C2024] p-12">
            <div className="flex flex-col items-start w-[400px]">
                <div className="flex flex-row items-start">
                    <Image src={logo} alt="logo"/>
                    <h1 className="font-bold text-[36px] text-white ml-3">
                        DesignCamp
                    </h1>
                </div>
                <div className="flex flex-col items-start mb-6">
                    <p className="font-normal text-[16px] text-white">
                        Your comprehensive graphic design education with mentorship and hands-on practice.
                    </p>
                </div>
                <div className="flex flex-row items-start py-12">
                    <button className="flex justify-center items-center p-5 border-2 border-[#5F5F5F1A]/10 rounded-full bg-[#5F5F5F1A]/10 mr-5 text-white">
                        <RxInstagramLogo className="w-5 h-5" />
                    </button>
                    <button className="flex justify-center items-center p-5 border-2 border-[#5F5F5F1A]/10 rounded-full bg-[#5F5F5F1A]/10 mr-5 text-white">
                        <RiTwitterFill className="w-5 h-5" />
                    </button>
                    <button className="flex justify-center items-center p-5 border-2 border-[#5F5F5F1A]/10 rounded-full bg-[#5F5F5F1A]/10 mr-5 text-white">
                        <RiYoutubeFill className="w-5 h-5" />
                    </button>
                    <button className="flex justify-center items-center p-5 border-2 border-[#5F5F5F1A]/10 rounded-full bg-[#5F5F5F1A]/10 mr-5 text-white">
                        <RiLinkedinFill className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="flex flex-row items-start justify-center w-full text-white">
                <div className="flex flex-col items-start gap-y-6 mx-32">
                    <h1 className="font-bold text-[20px]">
                        Product
                    </h1>
                    <p className="font-normal text-[16px]">
                        Overview
                    </p>
                    <p className="font-normal text-[16px]">
                        Pricing
                    </p>
                    <p className="font-normal text-[16px]">
                        Roadmap
                    </p>
                </div>
                <div className="flex flex-col items-start gap-y-6 mx-32">
                    <h1 className="font-bold text-[20px]">
                        Company
                    </h1>
                    <p className="font-normal text-[16px]">
                        About
                    </p>
                    <p className="font-normal text-[16px]">
                        Contact
                    </p>
                    <p className="font-normal text-[16px]">
                        Career
                    </p>
                    <p className="font-normal text-[16px]">
                        Review
                    </p>
                </div>
                <div className="flex flex-col items-start gap-y-6 mx-32">
                    <h1 className="font-bold text-[20px]">
                        Legal
                    </h1>
                    <p className="font-normal text-[16px]">
                        Term & Conditions
                    </p>
                    <p className="font-normal text-[16px]">
                        Cookie policy
                    </p>
                    <p className="font-normal text-[16px]">
                        Privacy Policy
                    </p>
                </div>
            </div>
        </section>
    )
}
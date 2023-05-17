export default function Footnote() {
    return (
        <section className="flex flex-row justify-between items-center bg-[#1C2024] py-6 px-7 w-full">
            <div className="flex flex-row justify-start items-center text-white">
                <h1 className={`font-normal text-[16px] ml-3`}>
                    © 2023 by Novian MW. All rights reserved.
                </h1>
            </div>
            <div className="flex flex-row justify-end items-center gap-4 text-white">
                <p className={`font-normal text-[16px] ml-3`}>
                    Designed by KelasFullstack.id
                </p>
            </div>
        </section>
    )
}
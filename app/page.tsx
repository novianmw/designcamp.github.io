import { Montagu_Slab, Plus_Jakarta_Sans } from "next/font/google"
import { Navbar, Hero, Stats, Facility, Material, Comparison, Mentor, Faq, Pricing, Promo, Footer, Footnote } from "../components/list"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slab = Montagu_Slab({ subsets: ["latin"] })
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"]})

export default function Home() {
    return (
        <section className="w-full overflow-hidden">
            <div className={`flex flex-col justify-center items-center ${jakarta.className}`}>
                <Navbar />
                <Hero />
                <Stats />
                <Facility />
                <Material />
                <Comparison />
                <Mentor />
                <Faq />
                <Pricing />
                <Promo />
                <Footer />
                <Footnote />
            </div>
        </section>
    )
}

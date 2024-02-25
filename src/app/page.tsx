import Hero from "@/components/landing_page/hero";
import Collections from "@/components/landing_page/collections";
import TrendingProducts from "@/components/landing_page/trending_products";

export default function Home() {
    return (
        <main className="z-0">
            <Hero/>
            <TrendingProducts/>
            <Collections />
        </main>
    );
}

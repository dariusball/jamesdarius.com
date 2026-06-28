import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Tiers from "@/components/Tiers";
import Gallery from "@/components/Gallery";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Tiers />
        <Gallery />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

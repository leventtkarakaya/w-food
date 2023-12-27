import StyleGuide from "@/components/StyleGuide";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Map />
      <Footer />
      {/* <StyleGuide /> */}
    </main>
  );
}

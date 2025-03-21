import Footer from "../Component/Footer";
import HeroSection from "../Component/HeroSection";
import MainNav from "../Component/MainNav";
import HomeProducts from "./HomeProducts";

export default function Home() {
    return (
      <>
        <MainNav />
        <HeroSection />
        <HomeProducts />
        <Footer />
      </>
    );
}

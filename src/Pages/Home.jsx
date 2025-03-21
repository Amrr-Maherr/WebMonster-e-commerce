import Ad from "../Component/Ad";
import Footer from "../Component/Footer";
import HeroSection from "../Component/HeroSection";
import MainNav from "../Component/MainNav";
import HomeProducts from "./HomeProducts";
import HomeBoxes from "../Component/HomeBoxes";
import HomeGrid from "../Component/HomeGrid";
export default function Home() {
    return (
      <>
        <MainNav />
        <HeroSection />
        <HomeProducts />
        <Ad />
        <HomeGrid/>
        <HomeBoxes/>
        <Footer />
      </>
    );
}

import Ad from "../Component/Ad";
import Footer from "../Component/Footer";
import HeroSection from "../Component/HeroSection";
import MainNav from "../Component/MainNav";
import HomeProducts from "./HomeProducts";
import HomeBoxes from "../Component/HomeBoxes";
import imgOne from "../Assets/pexels-townsend-walton-6231368-29693465.jpg"
import imgTwo from "../Assets/pexels-introspectivedsgn-9592497.jpg"
export default function Home() {
    return (
      <>
        <MainNav />
        <HeroSection />
        <HomeProducts />
        <Ad
          image={imgOne}
          title="Special Offer"
          text="Get the best food products now with amazing discounts!"
          buttonLabel="Shop Now"
        />
        <Ad
          image={imgTwo}
          title="Special Offer"
          text="Get the best food products now with amazing discounts!"
          buttonLabel="Shop Now"
        />
        <HomeBoxes />
        <Footer />
      </>
    );
}

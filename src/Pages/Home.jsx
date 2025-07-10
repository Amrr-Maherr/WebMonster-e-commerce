import { useEffect, useState } from "react";
import axios from "axios";
import Ad from "../Component/Ad";
import Footer from "../Component/Footer";
import HeroSection from "../Component/HeroSection";
import MainNav from "../Component/MainNav";
import HomeProducts from "./HomeProducts";
import HomeBoxes from "../Component/HomeBoxes";

export default function Home() {
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://e-commerce-project-production-2e7f.up.railway.app/user/allproduct"
        );
        setFeaturedProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch featured product.");
        setLoading(false);
      }
    };
    fetchFeaturedProduct();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
console.log(featuredProduct);

  return (
    <>
      <MainNav />
      <HeroSection />
      <HomeProducts />
      <Ad
        product={featuredProduct[2]}
        title={featuredProduct[2].title}
        text={`Get ${featuredProduct?.title} now with amazing discounts!`}
        buttonLabel="Shop Now"
      />
      <HomeProducts sectionTitle="Top Picks Today" productCount={5} />
      <Ad
        product={featuredProduct[0]}
        title={featuredProduct[0].title}
        text={`Try ${featuredProduct?.title} for a healthier lifestyle. Limited time offer!`}
        buttonLabel="Shop Organic"
      />
      <HomeProducts sectionTitle="Hot Deals Now" productCount={15} />
      <Ad
        product={featuredProduct[6]}
        title={featuredProduct[6].title}
        text={`Try ${featuredProduct?.name} for a healthier lifestyle. Limited time offer!`}
        buttonLabel="Shop Organic"
      />
      <HomeBoxes />
      <Footer />
    </>
  );
}

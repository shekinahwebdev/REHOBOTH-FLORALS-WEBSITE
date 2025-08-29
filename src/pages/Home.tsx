import HeroSection from "../components/home/HeroSection";
import IntroductionSection from "../components/home/IntroductionSection";
import Product from "../components/home/Product";

const Home = () => {
  return (
    <section className="homepage">
      <HeroSection />
      <IntroductionSection />
      <Product />
    </section>
  );
};

export default Home;

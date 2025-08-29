import HeroSection from "../components/home/HeroSection";
import IntroductionSection from "../components/home/IntroductionSection";
import Product from "../components/home/Product";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <section className="homepage">
      <HeroSection />
      <IntroductionSection />
      <Product />
      <Testimonial />
    </section>
  );
};

export default Home;

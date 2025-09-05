import CategorySection from "../components/shop/CategorySection";
import { shopData } from "../data/shopData";

const Shop = () => {
  return (
    <div className="pt-16 min-h-screen bg-light-cream">
      <section className="bg-[url(/assets/arrangements-in-vases-boxes/flower16.jpeg)] bg-no-repeat bg-cover bg-center mg:bg-size[100%] py-16 relative overflow-hidden">
        <div className="shop-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Our <span className="text-highlight-words">Floral</span> Collection
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md">
            Discover our handcrafted floral arrangements, perfect for every
            occasion and celebration.
          </p>
        </div>
      </section>
      <div className="py-10 px-5 md:px-20 bg-light-cream">
        {shopData.map((section) => (
          <CategorySection key={section.section} section={section} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

import { Link } from "react-router-dom";

const IntroductionSection = () => {
  return (
    <section className="py-7 md:px-30 md:py-24 bg-light-cream">
      <div className="mx-auto w-full px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-highlight text-xl font-semibold mb-4 tracking-wider uppercase  text-dark-charcoal">
              Introducing
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-charcoal mb-6 leading-tight">
              A true design that catches attention from every eyes.
            </h2>
            <p className="text-warm-gray text-lg md:text-2xl leading-relaxed mb-8">
              At Rehoboth Floral, flowers are more than beauty—they're
              expressions of love, joy, and life's special moments. Born from a
              lifelong passion for blooms, we bring you fresh flowers, elegant
              bouquets, and event floral décor crafted to make every occasion
              unforgettable. With creativity at our core, we don't just arrange
              flowers—we tell stories through them
            </p>
            <Link
              to="/about"
              className="text-highlight font-semibold hover:underline inline-flex items-center space-x-2 text-highlight-words"
            >
              <span>READ MORE</span>
            </Link>
          </div>
          <div className="relative">
            <img
              src="/assets/bouquets/bouquet-flower7.jpeg"
              alt="Beautiful flower arrangement"
              className="w-full h-120 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;

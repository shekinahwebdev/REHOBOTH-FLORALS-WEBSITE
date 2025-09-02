import Features from "../components/about/Features";
import floralWork from "/assets/bouquets/floral-work.jpeg";

const About = () => {
  const stats = [
    { number: "New", label: "Freshly Launched" },
    { number: "100+", label: "Bouquets Created" },
    { number: "50+", label: "Events Styled" },
    { number: "100%", label: "Fresh Flowers" },
  ];

  return (
    <div className="pt-16 bg-light-cream">
      <section className="relative py-24 px-2 md:px-20 bg-white mt-5 overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-dark-charcoal mb-6 leading-tight">
                Crafting Beauty with{" "}
                <span className="text-highlight-words">Nature's Art</span>
              </h1>
              <p className="text-xl md:text-2xl text-warm-gray mb-8 leading-relaxed">
                At Rehoboth Florals, we're a fresh and passionate floral brand,
                dedicated to crafting arrangements that brighten moments and
                create lasting memories. Though new, our mission is simple
                bringing nature's beauty to every occasion, big or small.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold md:text-4xl text-highlight-words mb-2">
                      {stat.number}
                    </div>
                    <div className="text-warm-gray md:text-xl">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={floralWork}
                alt=""
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-highlight rounded-lg opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-golden rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slight-background-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-charcoal mb-8">
            Our Story
          </h2>
          <p className="text-lg md:text-2xl text-warm-gray leading-relaxed mb-8">
            Rehoboth Florals was founded with a simple belief: flowers have the
            power to transform moments into memories. Though we are a young and
            growing business, our passion for creating breathtaking arrangements
            shines through every design.
          </p>
          <p className="text-lg md:text-2xl text-warm-gray leading-relaxed">
            From weddings and celebrations to heartfelt gifts, our mission is to
            craft floral creations that reflect elegance, love, and beauty. At
            Rehoboth Florals, every bloom is thoughtfully chosen and every
            arrangement is made with care because your special moments deserve
            nothing less.
          </p>
        </div>
      </section>
      <Features />

      <section className="bg-gradient-to-r from-[#facc22] to-[#f83600]  text-white py-15 px-5 md:py-28">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Create Something Beautiful Together?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Whether you need a custom arrangement or have questions about our
            services, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-dark-charcoal px-8 py-4  md:px-12 md:py-5 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="/shop"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-dark-charcoal transition-colors"
            >
              Browse Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

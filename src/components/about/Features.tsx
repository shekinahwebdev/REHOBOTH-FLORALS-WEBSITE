import { Award, Users, Heart, Truck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Florists",
    description:
      "Our team of professional florists brings years of experience and artistic vision to every arrangement.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "We work closely with each client to understand their vision and create custom arrangements.",
  },
  {
    icon: Heart,
    title: "Quality Guaranteed",
    description:
      "We use only the freshest, highest-quality flowers sourced from trusted local and international growers.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Same-day delivery available throughout the city, ensuring your flowers arrive fresh and on time.",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-[4rem] md:py-[8rem] ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-charcoal mb-5">
            Why Choose Rehoboth Florals?
          </h2>
          <p className="text-xl text-warm-gray md:text-2xl max-w-5xl mx-auto">
            We combine artistic expertise with personal service to create floral
            arrangements that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-slight-background-tint w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-10 w-10 text-highlight-words" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-dark-charcoal mb-4">
                  {feature.title}
                </h3>
                <p className="text-warm-gray leading-relaxed md:text-xl">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

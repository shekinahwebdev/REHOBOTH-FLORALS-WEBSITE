const testimonials = [
  {
    name: "Jennifer Barnes",
    role: "Bride",
    content:
      "Absolutely stunning work! My wedding bouquet was beyond my dreams.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Michael Hayes",
    role: "Event Planner",
    content: "Professional service and beautiful arrangements every time.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Sarah Johnson",
    role: "Happy Customer",
    content: "The sympathy arrangement was tasteful and brought comfort.",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const Testimonial = () => {
  return (
    <section className="section-padding bg-light-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-highlight-words text-xl font-semibold mb-4 tracking-wider uppercase">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-dark-charcoal">
            We love hearing from{" "}
            <span className="text-highlight italic text-highlight-words">
              happy customers
            </span>
            .
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-warm-gray text-lg md:text-[1.2rem] mb-4 italic">
                "{testimonial.content}"
              </p>
              <h4 className="text-dark-charcoal  md:text-xl font-semibold">
                {testimonial.name}
              </h4>
              <p className="text-sm md:text-xl text-warm-gray">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

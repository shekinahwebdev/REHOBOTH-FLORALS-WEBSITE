import { Phone } from "lucide-react";
import ContactCard from "../components/contact/contactCard";
import ContactForm from "../components/contact/ContactForm";
import Services from "../components/contact/Services";
import ShopLocation from "../components/contact/ShopLocation";

const Contact = () => {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <section className=" bg-light-cream py-20 mt-7">
        <div className="mmx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-charcoal mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            We'd love to help you create the perfect floral arrangement for your
            special occasion.
          </p>
        </div>
      </section>
      <section className="py-16 px-5">
        <div className="px-4 sm:px-6 lg:px-8">
          <ContactCard />
        </div>
      </section>

      <section className="py-16 bg-light-cream">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <div className="space-y-8">
              <ShopLocation />
              <Services />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-slight-background-tint">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-charcoal mb-4">
            Need Last-Minute Arrangements?
          </h2>
          <p className="text-warm-gray mb-6 md:text-2xl">
            We understand that sometimes special occasions arise unexpectedly.
            Call us for same-day service and emergency arrangements.
          </p>
          <a
            href="tel:+233559359481"
            className="bg-cta-button-softgreen text-white px-8 py-4 md:py-6 rounded-full font-semibold inline-flex items-center space-x-2 hover:bg-[#45a049] hover:transform hover:translate-y-[-2px] hover:shadow-lg"
          >
            <Phone className="h-5 w-5" />
            <span className="md:text-xl">Call Now: (55) 935-9481</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

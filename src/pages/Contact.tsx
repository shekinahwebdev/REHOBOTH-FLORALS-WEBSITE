import { Phone } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
import Services from "../components/contact/Services";
import ShopLocation from "../components/contact/ShopLocation";
import ContactCard from "../components/contact/ContactCard";

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen">
      <section className="bg-[url(/assets/bouquets/bouquet-flower7.jpeg)] bg-no-repeat bg-cover bg-center mg:bg-size[100%] overflow-hidden py-20 relative">
        <div className="contact-overlay"></div>
        <div className="mmx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Get In Touch
          </h1>
          <p className="text-xl  text-white max-w-2xl mx-auto drop-shadow-md">
            We'd love to help you create the perfect floral arrangement for your
            special occasion.
          </p>
        </div>
      </section>
      <section className="py-16 px-5 bg-light-cream">
        <div className="px-4 sm:px-6 lg:px-8">
          <ContactCard />
        </div>
      </section>
      <section className="py-16 bg-[url(/assets/arrangements-in-vases-boxes/flower24.jpeg)] bg-no-repeat bg-cover bg-center mg:bg-size[100%] overflow-hidden relative">
        <div className="form-overlay"></div>
        <div className="md:max-w-[100rem] md:mx-auto px-4 sm:px-6 lg:px-8 drop-shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <div className="space-y-8">
              <ShopLocation />
              <Services />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#facc22] to-[#f83600] ">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-charcoal mb-4">
            Need Last-Minute Arrangements?
          </h2>
          <p className="text-white mb-6 md:text-2xl">
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

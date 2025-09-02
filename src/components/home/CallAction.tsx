import { Link } from "react-router-dom";

const CallAction = () => {
  return (
    <section className="text-white  bg-gradient-to-r from-[#facc22] to-[#f83600]  py-15 px-5 md:py-28">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Create Something Beautiful?
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Let us help you create the perfect floral arrangement for your special
          occasion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/shop"
            className="bg-white text-highlight-words px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Browse Collections
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-highlight-words transition-colors"
          >
            Get Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallAction;

import { Link } from "react-router-dom";
import { featuredProducts } from "../../data/featuredProducts";

const Product = () => {
  return (
    <section className="section-padding bg-light-gray py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-highlight text-xl font-semibold mb-4 tracking-wider uppercase">
            OUR PRODUCTS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-dark-charcoal mb-4">
            You can buy{" "}
            <span className="text-highlight italic text-[#E63900]">
              your favourites
            </span>
            , in one go.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-8 md:gap-7">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="card-hover bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  {product.category}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {product.name}
                </h3>
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Sizes & Prices
                  </p>
                  <div className="gap-5 grid grid-cols-3 ">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Small</span>
                      <span className="text-lg font-bold text-emerald-600">
                        ₵{product.smallPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Medium</span>
                      <span className="text-lg font-bold text-amber-600">
                        ₵{product.mediumPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Large</span>
                      <span className="text-lg font-bold text-rose-600">
                        ₵{product.largePrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-15">
          <Link
            to="/shop"
            className="bg-[#E63900] text-white px-8 py-5 rounded-xl hover:bg-dark-charcoal transition-colors font-semibold"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;

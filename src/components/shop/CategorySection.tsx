import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  prices: number | { [size: string]: number };
}

interface Category {
  name: string;
  products: Product[];
}

interface Section {
  section: string;
  category: Category[];
}

interface CategorySectionProps {
  section: Section;
}

const CategorySection: React.FC<CategorySectionProps> = ({ section }) => {
  const [activeCategory, setActiveCategory] = useState(
    section.category[0].name
  );
  const [searchTerm, setSearchTerm] = useState("");

  const currentCategory = section.category.find(
    (cat) => cat.name === activeCategory
  );

  const filteredProducts = currentCategory?.products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-12 border-0">
      <h2 className="text-4xl bg-gradient-to-r from-[#f83600] to-[#facc22] bg-clip-text text-transparent md:text-5xl font-bold mb-6">
        {section.section}
      </h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {section.category.map((cat) => (
          <button
            key={cat.name}
            onClick={() => {
              setActiveCategory(cat.name);
              setSearchTerm("");
            }}
            className={`px-4 py-3 rounded-lg  transition  cursor-pointer ${
              activeCategory === cat.name
                ? "bg-gradient-to-r from-[#f83600] to-[#facc22] text-Beige"
                : "bg-[#facc22] hover:bg-[#f83600] text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder={`Search in ${activeCategory}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/4 px-4 py-5 bg-white/70 border border-slight-background-tint rounded-lg shadow-sm focus:ring-2 focus:ring-hover-effect"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-8 place-items-center">
        {filteredProducts?.length ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-62 h-110 bg-white rounded-full shadow-lg flex flex-col items-center justify-start p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-50 h-50 rounded-full overflow-hidden shadow-md mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg md:text-xl text-gray-900 font-semibold text-center">
                {product.name}
              </h3>

              {typeof product.prices === "object" ? (
                <div className="mt-3 space-y-1 text-center">
                  {Object.entries(product.prices).map(([size, price]) => (
                    <p key={size} className="text-gray-700 text-sm">
                      <span className="capitalize font-medium">{size}:</span>{" "}
                      <span className="text-orange-600 font-semibold">
                        GH₵{price}
                      </span>
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-orange-600 font-semibold mt-2">
                  GH₵{product.prices}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default CategorySection;

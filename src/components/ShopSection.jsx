import React, { useState } from "react";
import { filterButtonsData, productData } from "../assets/data";

const ShopSection = () => {
  const [activeFilter, setActiveFilter] = useState(
    filterButtonsData.find((b) => b.isActive)?.name || "All"
  );

  const filteredProducts =
    activeFilter === "All"
      ? productData
      : productData.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-14">
          <h2 className="text-4xl sm:text-5xl anton uppercase text-zinc-900 leading-tight">
            Shop by <br /> essential
          </h2>

          {/* FILTER BUTTONS */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {filterButtonsData.map((btn) => {
              const isActive = activeFilter === btn.name;
              return (
                <button
                  key={btn.name}
                  onClick={() => setActiveFilter(btn.name)}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm sm:text-base anton uppercase whitespace-nowrap transition-all duration-200
                    ${
                      isActive
                        ? "bg-zinc-900 text-white"
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-900 hover:text-white"
                    }`}
                >
                  {btn.name}
                  <sub
                    className={`text-xs ml-0.5 transition-colors ${
                      isActive ? "text-zinc-200" : "text-zinc-500"
                    }`}
                  >
                    {btn.count}
                  </sub>
                </button>
              );
            })}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id || product.name}
              className="group cursor-pointer transition-transform duration-300 hover:-translate-y-3"
            >
              {/* IMAGE CARD */}
              <div
                className={`relative w-full ${product.imgHeight} rounded-3xl overflow-hidden bg-zinc-200`}
              >
                <div
                  className={`absolute inset-0 ${product.bgUrl} bg-cover bg-center transition-transform duration-500 group-hover:scale-105`}
                />

                {/* TAG */}
                {product.tag && (
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-xs text-zinc-900 backdrop-blur">
                    {product.tag}
                  </span>
                )}

                {/* HOVER ACTIONS */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="rounded-full bg-white px-4 py-2 text-xs text-zinc-900 hover:bg-zinc-100">
                    Add to cart
                  </button>
                  <button className="rounded-full bg-zinc-900 px-4 py-2 text-xs text-white hover:bg-zinc-700">
                    Buy now
                  </button>
                </div>
              </div>

              {/* INFO */}
              <div className="mt-4 text-center">
                <p className="text-2xl anton text-zinc-900">
                  {product.name}
                </p>
                <p className="text-lg text-zinc-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
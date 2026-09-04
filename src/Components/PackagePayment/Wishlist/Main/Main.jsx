import React from "react";
import Rose from "../../../../assets/Rose.png";

const Main = ({ wishlist, removeFromWishlist }) => {

  // Empty wishlist
  if (!wishlist || wishlist.length === 0) {
    return (
      <div>

        <div className="flex justify-center items-center py-10">
          <img
            src={Rose}
            alt="Wishlist is empty"
            className="w-80 h-80 object-fill opacity-60"
          />
        </div>

        <div className="flex justify-center items-center">
          <h1 className="font-medium text-xl underline">
            Wishlist is empty can't find anything
          </h1>
        </div>

      </div>
    );
  }

  // Wishlist has products
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {wishlist.map((item) => (

        <div
          key={item.id}
          className="bg-white rounded-xl overflow-hidden shadow-lg"
        >

          {/* Product Image */}
          <div
            className="flex justify-center items-center p-8"
            style={{
              backgroundColor: item.backgroundColor
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Product Details */}
          <div
            className="p-4"
            style={{
              backgroundColor: item.footerColor
            }}
          >

            <p className="text-[#6B8F71] text-sm">
              {item.category}
            </p>

            <h2 className="text-[#2C2C2A] text-xl font-bold">
              {item.title}
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              {item.description}
            </p>

            <div className="flex justify-between items-center mt-4">

              <p className="text-[#4A7A52] text-xl font-semibold">
                {item.currency}{item.price}
              </p>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Remove
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
};

export default Main;
import React, { useState } from 'react'
import { Heart, X, Minus, Plus } from 'lucide-react'

const Cards = ({
    bouquet,
    addToWishlist,
    wishlist,
    addToCart,
    cart,
    increaseQuantity,
    decreaseQuantity
}) => {

    const [selectedItem, setSelectedItem] = useState(null)

    return (
        <>
            {/* ================= CARDS ================= */}

            <div
                className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 py-5 sm:px-2 lg:px-0 mx-2
                ${selectedItem ? 'blur-sm' : ''}`}
            >

                {bouquet?.map((item) => {

                    const isWishlisted = wishlist?.some(
                        (wishItem) => wishItem.id === item.id
                    )

                    const cartItem = cart?.find(
                        (cartItem) => cartItem.id === item.id
                    )

                    return (

                        <div
                            key={item.id}
                            onClick={() => setSelectedItem(item)}
                            className="h-auto flex justify-center cursor-pointer"
                        >

                            <div
                                className="rounded-xl w-full pt-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
                                style={{
                                    backgroundColor: item.backgroundColor
                                }}
                            >

                                {/* TOP */}
                                <div className="flex justify-between mx-2">

                                    <div
                                        className="px-2 py-1 text-[10px] font-semibold flex justify-center items-center rounded-xl"
                                        style={{
                                            backgroundColor: item.badgeColor,
                                            color: item.badgeTextColor,
                                        }}
                                    >
                                        {item.badge}
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            addToWishlist(item)
                                        }}
                                        className="rounded-full p-2 cursor-pointer"
                                    >
                                        <Heart
                                            className={
                                                isWishlisted
                                                    ? "text-red-500 fill-red-500 transition-all duration-150 scale-90"
                                                    : "text-[#C8897A]"
                                            }
                                        />
                                    </button>

                                </div>


                                {/* IMAGE */}
                                <div
                                    className="flex justify-center items-center p-3 sm:p-5"
                                    style={{
                                        backgroundColor: item.backgroundColor
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="size-16 sm:size-24 object-contain"
                                    />
                                </div>


                                {/* FOOTER */}
                                <div
                                    className="px-3 pt-2 sm:px-4 sm:pt-4 rounded-b-xl"
                                    style={{
                                        backgroundColor: item.footerColor
                                    }}
                                >

                                    <h6 className="text-sm sm:text-lg font-bold line-clamp-2">
                                        {item.title}
                                    </h6>

                                    <div className="flex justify-between py-2">

                                        <h1 className="text-[#6B8F71] text-xs lg:text-sm pt-2">
                                            {item.category}
                                        </h1>

                                        <h1 className="text-[#4A7A52] text-lg flex justify-center items-center">
                                            ₹ {item.price}
                                        </h1>

                                    </div>


                                    {/* CART / QUANTITY */}
                                    <div className="flex justify-between items-center pt-2 sm:pt-4 pb-1">

                                        {cartItem ? (

                                            <div
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex h-9 items-center rounded-[6px] border border-gray-300 overflow-hidden bg-white"
                                            >

                                                <button
                                                    onClick={() => decreaseQuantity(item.id)}
                                                    className="flex h-full w-9 items-center justify-center text-gray-600 hover:text-green-700"
                                                >
                                                    −
                                                </button>

                                                <span className="flex h-full w-8 items-center justify-center text-sm font-medium">
                                                    {cartItem.quantity}
                                                </span>

                                                <button
                                                    onClick={() => increaseQuantity(item.id)}
                                                    className="flex h-full w-9 items-center justify-center text-gray-600 hover:text-green-700"
                                                >
                                                    +
                                                </button>

                                            </div>

                                        ) : (

                                            <div
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex justify-between w-full"
                                            >

                                                <button className="px-2 bg-[#C8897A] hover:bg-[#365F3D] rounded-md text-sm text-[#FFFFFF] font-light transition">
                                                    Buy now
                                                </button>

                                                <button
                                                    onClick={() => addToCart(item)}
                                                    className="bg-black text-white py-2 px-3 rounded-[6px] cursor-pointer"
                                                >
                                                    +
                                                </button>

                                            </div>

                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>
                    )
                })}

            </div>


            {/* ================= POPUP ================= */}

            {selectedItem && (

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
                    onClick={() => setSelectedItem(null)}
                >

                    {/* POPUP CARD */}

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden animate-[popup_0.2s_ease-out]"
                    >

                        {/* CLOSE BUTTON */}

                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition"
                        >
                            <X size={20} />
                        </button>


                        {/* IMAGE */}

                        <div
                            className="flex items-center justify-center p-8"
                            style={{
                                backgroundColor: selectedItem.backgroundColor
                            }}
                        >

                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="h-64 w-64 object-contain"
                            />

                        </div>


                        {/* DETAILS */}

                        <div
                            className="p-6"
                            style={{
                                backgroundColor: selectedItem.footerColor
                            }}
                        >

                            <div className="flex items-center justify-between">

                                <div
                                    className="px-3 py-1 text-xs font-semibold rounded-full"
                                    style={{
                                        backgroundColor: selectedItem.badgeColor,
                                        color: selectedItem.badgeTextColor
                                    }}
                                >
                                    {selectedItem.badge}
                                </div>

                                <span className="text-[#6B8F71] text-sm">
                                    {selectedItem.category}
                                </span>

                            </div>


                            <h2 className="mt-4 text-2xl font-bold">
                                {selectedItem.title}
                            </h2>


                            <p className="mt-2 text-xl font-semibold text-[#4A7A52]">
                                ₹ {selectedItem.price}
                            </p>


                            {/* ACTIONS */}

                            <div className="mt-6 flex gap-3">

                                <button
                                    onClick={() => addToWishlist(selectedItem)}
                                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-3 hover:bg-gray-50"
                                >
                                    <Heart
                                        size={18}
                                        className={
                                            wishlist?.some(
                                                (item) => item.id === selectedItem.id
                                            )
                                                ? "fill-red-500 text-red-500"
                                                : ""
                                        }
                                    />

                                    Wishlist
                                </button>


                                <button
                                    onClick={() => {
                                        addToCart(selectedItem)
                                        setSelectedItem(null)
                                    }}
                                    className="flex-1 rounded-lg bg-black py-3 text-white hover:bg-gray-800"
                                >
                                    Add to Cart
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </>
    )
}

export default Cards
import React from 'react'
import { Heart } from 'lucide-react'

<<<<<<< HEAD
const Cards = ({ bouquet, addToWishlist, wishlist, addToCart }) => {
=======
const Cards = ({ bouquet, addToWishlist, addToCart, wishlist }) => {
>>>>>>> 5fee06513e37be9d17a9e10deeeb81d3aad2bb2b

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 py-5 sm:px-2 lg:px-0'>

            {bouquet?.map((item) => {

                // Check whether this product is already in wishlist
                const isWishlisted = wishlist?.some(
                    (wishItem) => wishItem.id === item.id
                )

                return (
                    <div
                        key={item.id}
                        className='h-auto flex justify-center'
                    >

                        {/* Card1 */}
                        <div
                            className="rounded-xl w-full pt-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
                            style={{
                                backgroundColor: item.backgroundColor
                            }}
                        >

                            <div className='flex justify-between mx-2'>

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
                                    onClick={() => addToWishlist(item)}
                                    className="bg-[#ffffffe6] rounded-full p-2 cursor-pointer"
                                >
                                    <Heart
                                        className={
                                            isWishlisted
                                                ? "text-red-500 fill-red-500"
                                                : "text-[#C8897A]"
                                        }
                                    />
                                </button>

                            </div>

                            <div
                                className='flex justify-center items-center p-3 sm:p-5'
                                style={{
                                    backgroundColor: item.backgroundColor
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='size-16 sm:size-24 object-contain'
                                />
                            </div>

                            <div
                                className='px-3 pt-2 sm:px-4 sm:pt-4  rounded-b-xl'
                                style={{
                                    backgroundColor: item.footerColor
                                }}
                            >

                                <h6 className='text-[#6B8F71] text-xs lg:text-sm'>
                                    {item.category}
                                </h6>

                                <h1 className='text-sm sm:text-lg font-bold line-clamp-2'>
                                    {item.title}
                                </h1>

                                <div className='flex justify-between items-center pt-2 sm:pt-4 pb-1'>

                                    <h1 className='text-[#4A7A52] text-xl flex justify-center items-center'>
                                        ₹ {item.price}
                                    </h1>

                                    <button
<<<<<<< HEAD
                                     onClick={() => addToCart(item)}
                                    className='bg-black text-white py-2 px-3 rounded-[6px] cursor-pointer'>
                                        {item.button}
=======
                                        onClick={() => {
                                            console.log("PLUS CLICKED");
                                            console.log("addToCart function:", addToCart);
                                            addToCart(item);
                                        }}
                                        className="bg-black text-white py-2 px-3 rounded-[6px] cursor-pointer"
                                    >
                                        +
>>>>>>> 5fee06513e37be9d17a9e10deeeb81d3aad2bb2b
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default Cards
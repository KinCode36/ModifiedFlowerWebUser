import React from 'react'
import { Heart } from 'lucide-react'

const Cards = ({ bouquet, addToWishlist, wishlist, addToCart }) => {

    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-0 py-5 sm:px-2 lg:px-0'>

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
                            className="rounded-xl w-full max-w-60 pt-2 transition-all duration-150 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
                            style={{
                                backgroundColor: item.backgroundColor
                            }}
                        >

                            <div className='flex justify-between mx-2'>

                                <div className='text-[#8B3E2F] py-0.5 px-1 text-[10px] flex justify-center items-center bg-[#FAF0EE] rounded-xl'>
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
                                className='flex justify-center px-10 py-10'
                                style={{
                                    backgroundColor: item.backgroundColor
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='w-25 h-25'
                                />
                            </div>

                            <div
                                className='px-4 pt-4 rounded-b-xl'
                                style={{
                                    backgroundColor: item.footerColor
                                }}
                            >

                                <h6 className='text-[#6B8F71] text-sm'>
                                    {item.category}
                                </h6>

                                <h1 className='text-[#2C2C2A] text-lg font-bold'>
                                    {item.title}
                                </h1>

                                <h6 className='text-[#7A7A76] text-[14px]'>
                                    {item.currency}
                                </h6>

                                <div className='flex justify-between pt-4 pb-1'>

                                    <h1 className='text-[#4A7A52] text-xl'>
                                        {item.price}
                                    </h1>

                                    <button
                                     onClick={() => addToCart(item)}
                                    className='bg-black text-white py-2 px-3 rounded-[6px] cursor-pointer'>
                                        {item.button}
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
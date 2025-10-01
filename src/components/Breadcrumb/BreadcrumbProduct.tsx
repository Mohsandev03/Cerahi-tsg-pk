'use client'

import React from 'react'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from '@/type/ProductType'
import { useRouter } from 'next/navigation'

interface Props {
    data: Array<ProductType>
    productPage: string | null
    productId: string | number | null
    bgImage?: string // optional prop for background image
}

const BreadcrumbProduct: React.FC<Props> = ({ data, productPage, productId, bgImage }) => {
    const router = useRouter()

    const handleDetailProduct = (productId: string | number | null) => {
        router.push(`/product/${productPage}?id=${productId}`);
    };

    return (
        <div
            className="breadcrumb-product w-full relative"
            style={{
                backgroundImage: `url(${bgImage || '/images/banner/default-bg.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 main md:pt-[220px] pt-[70px] pb-[24px]">
                <div className="container flex items-center justify-between flex-wrap gap-3">
                    {/* Left Breadcrumb */}
                    <div className="left flex items-center gap-1 text-white">
                        <Link href={'/'} className='caption1 hover:underline'>Homepage</Link>
                        <Icon.CaretRight size={15} className='text-white/70' />
                        <div className='caption1 text-white/70'>Product</div>
                        <Icon.CaretRight size={15} className='text-white/70' />
                        <div className='caption1 capitalize'>{`Product ${productPage}`}</div>
                    </div>

                    {/* Right Navigation */}
                    <div className="right flex items-center gap-3 text-white">
                        {productId !== null && Number(productId) >= 2 ? (
                            <>
                                <div
                                    onClick={() => handleDetailProduct(Number(productId) - 1)}
                                    className='flex items-center cursor-pointer hover:text-gray-300 border-r border-white/40 pr-3 transition-colors duration-200'
                                >
                                    <Icon.CaretCircleLeft className='text-2xl' />
                                    <span className='caption1 pl-1'>Previous Product</span>
                                </div>
                                <div
                                    onClick={() => handleDetailProduct(Number(productId) + 1)}
                                    className='flex items-center cursor-pointer hover:text-gray-300 transition-colors duration-200'
                                >
                                    <span className='caption1 pr-1'>Next Product</span>
                                    <Icon.CaretCircleRight className='text-2xl' />
                                </div>
                            </>
                        ) : (
                            <>
                                {productId !== null && Number(productId) === 1 && (
                                    <div
                                        onClick={() => handleDetailProduct(Number(productId) + 1)}
                                        className='flex items-center cursor-pointer hover:text-gray-300 transition-colors duration-200'
                                    >
                                        <span className='caption1 pr-1'>Next Product</span>
                                        <Icon.CaretCircleRight className='text-2xl' />
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadcrumbProduct

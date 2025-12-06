
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import banner_1 from '@/images/banner/image-removebg-preview.png'
import { Title } from './text'

const Homebanner = () => {
    return (
        <div className='py-10 md:py-0 px-10 bg-orange-400 border rounded-lg   text-red-900 lg:px-24 flex items-center justify-between'>
            <div className="space-y-5">
                <Title>
                    Grab Upto 50% off on <br />
                    Selected headphone
                </Title>
                <Link
                   href={"/shop"}
                    className="bg-red-950  text-red-100 px-5 py-2 rounded-md text-sm font-semibold hover:text-yellow-700 hover:bg-shop_dark_green hoverEffect"
                >
                    Buy Now</Link>
            </div>
            <div>
                <Image src={banner_1}
                    alt="banner_1"
                    className="hidden md:inline-flex w-96"/>
            </div>
        </div>
    )
}

export default Homebanner
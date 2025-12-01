import {ShoppingBagIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    return (
        <div><Link href={"/cart"} className='group relative'>
            <ShoppingBagIcon className="w-5 h-5 hover:text-shop-btn-dark-green hoverEffect" />
            <span className='absolute -top-1 -right-1 bg-shop-btn-dark-green text-white  h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center'>0</span>
            </Link>
       </div>
    )
}

export default CartIcon
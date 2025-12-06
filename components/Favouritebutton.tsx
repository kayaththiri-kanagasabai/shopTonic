import React from 'react'
import Link from 'next/link'
import { Heart, HeartIcon } from 'lucide-react'

const Favouritebutton = () => {
  return (
    <div>
        <Link href={"/cart"} className='group relative'>
        <HeartIcon className="w-5 h-5 hover:text-yellow-600 hoverEffect" />
            <span className='absolute -top-1 -right-1 bg-red-800 text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center'>0</span>
            </Link>
    </div>
    
  )
}

export default Favouritebutton
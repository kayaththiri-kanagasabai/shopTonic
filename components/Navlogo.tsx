import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Navlogo = ({ className,spanDesign }: { className?: string,spanDesign?:string }) => {
    return (
        <Link href={"/"}>
            <h2 className={cn("text-2xl text-yellow-600 font-black tracking-wider  hover:text-orange-700 cursor-pointer hoverEffect group font-sans", spanDesign)}>
                SHOP<span className='text-orange-800 group-hover:text-yellow-600  hoverEffect'>TONIC</span>
            </h2>
        </Link>
    )
}

export default Navlogo
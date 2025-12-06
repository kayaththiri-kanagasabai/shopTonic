"use client"
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'
import React from 'react'

const Headermenu = () => {
    const pathname =usePathname();
    console.log(pathname)
  return (
    <div className='hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor'>
        {headerData?.map((item)=>(
            <Link key={item?.title} href={item?.href} className={`hover:text-orange-500 hoverEffect relative group ${pathname === item?.href && "text-red-800"}`}>
                {item?.title}
                <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-red-800 group-hover:w-1/2 hoverEffect group-hover:left-0 ${pathname === item?.href && "w-1/2"}`}></span>
                <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-red-800 group-hover:w-1/2 hoverEffect group-hover:right-0 ${pathname === item?.href && "w-1/2"} `}></span>
            </Link>
        ))}
    </div>
  )
}

export default Headermenu
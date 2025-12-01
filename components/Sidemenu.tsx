import React, { FC } from 'react'
import Navlogo from './Navlogo';
import { X } from 'lucide-react';
import Link from 'next/link';
import { headerData } from '@/constants/data';
import { usePathname } from 'next/navigation';
import Socialmedia from './Socialmedia';
import {useOutSideClick} from '@/hooks';
interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidemenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    const sidebarRef = useOutSideClick<HTMLDivElement>(onClose)
    return (
        <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50  text-white/80 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}>
            <div ref={sidebarRef} className='min-w-72 max-w-0 bg-black h-screen p-10 border-r border-r-shop-btn-dark-green flex flex-col gap-6'>
                <div className='flex items-center justify-between gap-5'>
                    <Navlogo className="text-white" spanDesign="group-hover:text-white" />

                    <button className='hover:text-yellow-600 hoverEffect' onClick={onClose}>
                        <X />
                    </button>
                    
                </div>


                <div className='flex flex-col space-y-3.5 font-semibold tracking-wide'>
                    {headerData?.map((item) => (
                
                        <Link  href={item?.href} key={item?.title} className={`hover:text-yellow-600 hoverEffect ${pathname === item?.href && "text-yellow-400"}`} >
                            {item?.title}
                        </Link>
                    ))}
                </div>
                <Socialmedia/>
            </div>
        </div>
    )
}

export default Sidemenu
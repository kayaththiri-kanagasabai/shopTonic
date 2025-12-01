"use client"
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import Sidemenu from './Sidemenu'

const Mobile = () => {
    const [isSidebarOpen,setisSidebarOpen] =useState(false)
  return (
    <div>
        <button onClick={()=>setisSidebarOpen(!isSidebarOpen)}>
            
            <AlignLeft className='hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer '/>

        </button>
        <Sidemenu isOpen={isSidebarOpen} onClose={()=>setisSidebarOpen(false)}/>
    </div>
  )
}

export default Mobile
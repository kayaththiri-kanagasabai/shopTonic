import React, { Children } from 'react'
import {cn} from "@/lib/utils"

const Container = ({children,className,}:{children:React.ReactNode;
    className?:string;
}) => {
  return (
    <div className={cn("max-w-screen-xl mx-xuto px-4",className)}>{children}</div>
  )
}

export default Container
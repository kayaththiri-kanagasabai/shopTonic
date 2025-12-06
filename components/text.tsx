import { Children } from "react"
import { twMerge } from "tailwind-merge";

const Title= ({children,className}:{children:React.ReactNode,className?:string})=>{
    return <h2 className={twMerge("text-2xl font-semibold", className)}>{children}</h2>
}

export {Title};
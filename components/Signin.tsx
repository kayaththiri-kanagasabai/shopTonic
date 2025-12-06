import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const Signin = () => {
  return (
    <SignInButton mode='modal'>
      <button className='text-sm font-semibold hover:text-orange-500 hoverEffect text-orange-950 hover:cursor-pointer'>
        Login
      </button>
    </SignInButton>
  )
}

export default Signin
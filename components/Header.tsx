import React from 'react'
import Container from './Container'
import Logo from './logo'
import Navlogo from './Navlogo'
import Headermenu from './Headermenu'
import Searchbar from './Searchbar'
import Favouritebutton from './Favouritebutton'
import Signin from './Signin'
import CartIcon from './CartIcon'
import Mobile from './Mobile'



const Header = () => {
  return (
    <header className='bg-white py-5 border-b-black/20'>
      <Container className='flex items-center justify-between max-w-full'>
        {/* logo */}
        <div className=' w-auto md:w-1/3 flex items-center gap-2.5 justify-start text-lightColor'>
          <Mobile />
          <Navlogo />

        </div>
        <Headermenu />


        {/* NavButton */}

        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
          <Searchbar />
          <CartIcon />
          <Favouritebutton />
          <Signin />
        </div>

        {/* Navadmin */}

      </Container>
    </header>
  )
}

export default Header




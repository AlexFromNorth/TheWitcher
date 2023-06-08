import React from 'react'
import Logo from './Logo'
import Hamburger from './Hamburger'
import Navigation from './navigation/Navigation'

const Header = () => {
  return (
    <div className="flex justify-between text-3xl items-center">
      <Logo/>
      <Navigation/>
      <Hamburger />
    </div>
  )
}

export default Header
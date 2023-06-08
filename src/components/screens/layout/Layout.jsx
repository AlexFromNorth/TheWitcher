import React from 'react'
import BgImage from '../../../assets/images/bg_witcher.jpeg'
import SocialMedia from './SocialMedia'
import Header from './header/Header'
import Modal from '../home/Modal'

const Layout = ({children}) => {
  return (
    <div className='p-12 relative bg-cover bg-no-repeat h-screen'
    style={{backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className='gradient'/>
      <div className="relative z-1 h-full">
      <Header/>
      <SocialMedia />
      <Modal/>
        {children}
      </div>
      

    </div>
  )
}

export default Layout
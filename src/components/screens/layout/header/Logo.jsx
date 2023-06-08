import React from 'react'
import { Link } from 'react-router-dom'

import LogoImage from "../../../../assets/images/witcher_logo.png";

const Logo = () => {
  return (
    <Link to='/'>
      <img src={LogoImage} alt="witcher_logo" draggable={false} width='150'/>
    </Link>
  )
}

export default Logo
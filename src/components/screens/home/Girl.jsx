import React from 'react'
import girlImg from '../../../assets/images/girl.png'

const Girl = () => {
  return (
    <div className='absolute -bottom-12 right-20'>
      <img src={girlImg} alt="girl" draggable={false} width={500}/>
    </div>
  )
}

export default Girl
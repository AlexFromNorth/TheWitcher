import React, { useState } from 'react'

import Controls from './Controls';
import VideosLine from './videoLine/VideosLine';
import { useSeries } from '../../../../hooks/useSeries';



const Carousel = () => {
    const [slides] = useSeries()
    const [currentIdx, setCurrentIdx] = useState(0)

  return (
    <div className='mt-24 absolute bottom-2'>
        <div className='flex items-center mb-5'>
            <div className='text-white opacity-90 text-lg font-medium mr-20'>1 season</div>
            <Controls slidesLength={slides.length} setCurrentIdx={setCurrentIdx} currentIdx={currentIdx}/>
        </div>
        <VideosLine slides={slides} setCurrentIdx={setCurrentIdx} currentIdx={currentIdx}/>
    </div>
    
  )
}

export default Carousel
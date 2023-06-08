import React, { useState } from 'react'

// import t1Img from "../../../../assets/images/thumbnails/0101.jpeg";
// import t2Img from "../../../../assets/images/thumbnails/0102.jpeg";
// import t3Img from "../../../../assets/images/thumbnails/0103.jpeg";
// import t4Img from "../../../../assets/images/thumbnails/0104.jpeg";
// import t5Img from "../../../../assets/images/thumbnails/0105.jpeg";
import Controls from './Controls';
import VideosLine from './videoLine/VideosLine';
import { useSeries } from '../../../../hooks/useSeries';

// const initialSlides = [
//     {
//         _id: 'wef2we1',
//         thumbnailPath: t1Img,
//         videoUrl: 'https://www.youtube.com/watch?v=NOk6CP5_OcY'
//     },
//     {
//         _id: 'wef2we2',
//         thumbnailPath: t2Img,
//         videoUrl: 'https://www.youtube.com/watch?v=fQSb3gfV84s'
//     },
//     {
//         _id: 'wef2we3',
//         thumbnailPath: t3Img,
//         videoUrl: 'https://www.youtube.com/watch?v=kjYxUgyIp_I'
//     },
//     {
//         _id: 'wef2we4',
//         thumbnailPath: t4Img,
//         videoUrl: 'https://www.youtube.com/watch?v=EUizTA1nrfA'
//     },
//     {
//         _id: 'wef2we5',
//         thumbnailPath: t5Img,
//         videoUrl: 'https://www.youtube.com/watch?v=5kyd23wFb2w'
//     },
// ]

const Carousel = () => {
    // const [slides] = useState(initialSlides)
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
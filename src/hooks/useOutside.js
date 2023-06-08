import { useEffect, useRef, useState } from "react"
import { useModal } from "../components/ModalProvider"

export const useOutside = initialIsVisible => {
    const {setVideoUrl} = useModal()
    const [isShow, setIsShow] = useState(initialIsVisible)
    const ref = useRef(null)

    const handlerClickOutside = event => {
        if(ref.current && !ref.current.contains(event.target)){
            setIsShow(false)
            setVideoUrl('')
        }
    }

    useEffect(()=>{
        document.addEventListener('click',handlerClickOutside, true)
        return()=>{
            document.removeEventListener('click', handlerClickOutside,true)
        }
    })

    return {ref, isShow, setIsShow}
}
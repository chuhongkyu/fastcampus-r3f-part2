import { useEffect } from "react"

export const useBodyClass = (isHover, className) => {
    useEffect(()=>{
        const bodyClassList = window?.document.body.classList

        if(isHover){
            bodyClassList.add(className)
        }else{
            bodyClassList.remove(className)
        }

        return ()=> {
            bodyClassList.remove(className)
        }
    },[isHover,className])
}
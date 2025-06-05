import { useAnimation, useInView } from 'framer-motion';
import {useRef,useEffect} from "react"

export function useScrollAnimation({once=false,amount=0.3}={}){
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount});
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [isInView, controls]);

    return {ref,controls}
}
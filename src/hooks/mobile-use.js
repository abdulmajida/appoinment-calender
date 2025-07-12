import { useEffect,useState } from "react";

const useMobile =()=>{
    const [isMobile, setisMobile] = useState(window.innerWidth <768);

    useEffect(()=>{ 
        const handleResize=()=>{
            setisMobile(window.innerWidth<768);
        };

        window.addEventListener('risize',handleResize);
        return ()=> window.removeEventListener(ResizeObserverSize,handleResize);
    },[]);

    return isMobile;
};

export default useMobile;
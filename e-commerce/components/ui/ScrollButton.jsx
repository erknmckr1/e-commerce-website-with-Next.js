import React from 'react'
import { useState,useEffect } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function ScrollButton() {
    const [isVisible,setIsVısıble] = useState(false)

    const handleScroll = ()=>{
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        setIsVısıble(scrollTop > 300)
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div>
        <button onClick={scrollToTop} className={`btn bottom-3 right-5 fixed ${isVisible ? 'visible' : "hidden"}`}><ArrowUpwardIcon/></button>
    </div>
  )
}

export default ScrollButton
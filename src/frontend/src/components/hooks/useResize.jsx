import { useState, useEffect } from 'react';
import {
  SCREEN_SM, SCREEN_MD, SCREEN_LG, SCREEN_XL, SCREEN_XXL,
} from './const-breakpoints';

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [
    width,
    width >= SCREEN_SM,
    width >= SCREEN_MD,
    width >= SCREEN_LG,
    width >= SCREEN_XL,
    width >= SCREEN_XXL,
  ];
};

export default useResize;
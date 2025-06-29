import { useEffect, useState } from "react";

interface UseSliderProps {
  length: number;
}

const UseSlider = ({ length }: UseSliderProps)  => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % length);
      }, 4000);
  
      return () => clearInterval(interval);
    });

    return {currentSlide}
}

export default UseSlider;
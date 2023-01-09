import { useState, useLayoutEffect, useEffect } from "react"

export default function useResize(targetRef) {
  const getDimensions = () => {
    return {
      width: targetRef.current ? targetRef.current.offsetWidth : 0,
      height: targetRef.current ? targetRef.current.offsetHeight : 0
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions);

  const handleResize = () => {
    setDimensions(getDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [targetRef, handleResize]);

  useLayoutEffect(() => {
    handleResize();
  }, []);
  return dimensions;
  /* const [width, setWidth] = useState(329)
  const [height, setHeight] = useState(0)
  
  const handleResize = useCallback(() => {
      setWidth(myRef.current.offsetWidth)
      setHeight(myRef.current.offsetHeight)
  }, [myRef])

  useEffect(() => {
    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('load', handleResize)
      window.removeEventListener('resize', handleResize)
    }
  }, [myRef, handleResize])

  return { width, height } */
}
import { useState, useLayoutEffect, useEffect, useCallback } from "react"

export default function useResize(targetRef) {
  const getDimensions = () => {
    return {
      width: targetRef.current ? targetRef.current.offsetWidth : 0,
      height: targetRef.current ? targetRef.current.offsetHeight : 0
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions);

/*   const handleResize = () => {
    setDimensions(getDimensions());
  };
 */
  const handleResize = useCallback(() => {
    setDimensions(getDimensions())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [targetRef, handleResize]);

  useLayoutEffect(() => {
    handleResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return dimensions;
}
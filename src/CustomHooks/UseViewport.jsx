import { useState, useEffect } from "react";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint_small = 480;
  const breakpoint_medium = 769;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width, breakpoint_small, breakpoint_medium };
};

export default useViewport;

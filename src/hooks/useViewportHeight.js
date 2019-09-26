import { useState, useEffect } from "react";

function useViewportHeight() {
  const [height, setHeight] = useState(5000);

  const handleResize = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return height;
}

export default useViewportHeight;

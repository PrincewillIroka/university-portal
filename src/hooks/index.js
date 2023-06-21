import { useEffect, useState } from "react";

export function useWindowDimensions() {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize({ currentTarget: { innerWidth, innerHeight } }) {
    setPageWidth(innerWidth);
    setPageHeight(innerHeight);
  }

  return { pageWidth, pageHeight };
}

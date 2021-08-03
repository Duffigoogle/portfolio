import { useState, createContext, useEffect, useRef } from "react";

export const CalculateHeightContext = createContext();

const HeightProvider = ({ children }) => {
  const [pageHeight, setpageHeight] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current.clientHeight) {
      setTimeout(() => {
        setpageHeight(elementRef.current.clientHeight);
      }, 1000);
    }
  }, []); //empty dependency array so it only runs once at render

  //   console.log({ pageHeight });

  const values = { pageHeight, elementRef };

  return (
    <CalculateHeightContext.Provider value={values}>
      {children}
    </CalculateHeightContext.Provider>
  );
};

export default HeightProvider;

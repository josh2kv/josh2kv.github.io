import React, { useState, useEffect, useRef } from 'react';

const ScreenContext = React.createContext(false);

export const ScreenProvider = ({ size = '992px', children }) => {
  const mqlRef = useRef();
  const [isLargeView, setIsLargeView] = useState(null);

  useEffect(() => {
    mqlRef.current = window.matchMedia(`(min-width: ${size})`);

    setIsLargeView(mqlRef.current.matches);

    mqlRef.current.addEventListener('change', e => {
      setIsLargeView(e.matches);
    });
  }, []);

  return (
    <ScreenContext.Provider value={{ isLargeView }}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreenContext = () => {
  const ctx = React.useContext(ScreenContext);

  if (!ctx) {
    throw new Error('useScreenContext must be used within the ScreenProvider');
  }

  return ctx;
};

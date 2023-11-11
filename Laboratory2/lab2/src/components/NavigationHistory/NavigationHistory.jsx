import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const HistoryContext = createContext();

function NavigationHistory({ children }) {
  const location = useLocation();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory((prevHistory) => {
      const newPath = location.pathname;

      if (newPath !== prevHistory[prevHistory.length - 1]) {
        return [...prevHistory, newPath];
      }

      return prevHistory;
    });
  }, [location]);

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}

export default NavigationHistory;

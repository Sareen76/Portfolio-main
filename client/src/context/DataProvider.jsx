// see keeping data like username, id, etc can't be stored in the local storage due to security issues so better to use context api
import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext(null); // making a context


const DataProvider = ({ children }) => {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      setMode('dark');  // Set default to dark if no saved mode found
    }
  }, []);

  useEffect(() => {
    if (mode !== null) {
      document.documentElement.className = mode;
      localStorage.setItem('mode', mode);
    }
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  // need to return context through provider
  return (
    <DataContext.Provider
      value={{
        mode,
        toggleTheme
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

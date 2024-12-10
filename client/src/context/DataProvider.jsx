// see keeping data like username, id, etc can't be stored in the local storage due to security issues so better to use context api
import React, { createContext, useState, useEffect } from 'react';
import axios from "axios"

export const DataContext = createContext(null); // making a context



const DataProvider = ({ children }) => {
  const [mode, setMode] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      setMode('dark');  // Set default to dark if no saved mode found
    }
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/getinfo`);
      setTimeout(() => {
        console.log('ss');
      }, 3000);
      setPersonInfo(response.data); // Set personInfo with response data
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    console.log(personInfo); // Log personInfo whenever it updates
  }, [personInfo]);

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
        toggleTheme,
        personInfo,
        loading
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(() => {
    return localStorage.getItem('userType') || 'guest'; // 'guest' como valor por defecto
  });

  useEffect(() => {
    localStorage.setItem('userType', userType);
  }, [userType]);

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};

import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check localStorage for existing session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const updateUser = (updatedUser) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(user => 
      user.username === user.username ? updatedUser : user
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUser(updatedUser);
  };

  const signup = async (userData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if username or email already exists
    const existingUser = users.find(u => 
      u.username === userData.username || u.email === userData.email
    );
    
    if (existingUser) {
      throw new Error('Username or email already exists');
    }

    const newUser = {
      ...userData,
      orders: [],
      createdAt: new Date().toISOString()
    };

    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 
import React, { createContext, useState, useContext, useEffect } from 'react';

const DashboardContext = createContext();

const initialData = [
  { id: 1, date: '2024-03-01', amount: 5000, category: 'Salary', type: 'income' },
  { id: 2, date: '2024-03-02', amount: 150, category: 'Groceries', type: 'expense' },
  { id: 3, date: '2024-03-05', amount: 1200, category: 'Rent', type: 'expense' },
  { id: 4, date: '2024-03-07', amount: 300, category: 'Shopping', type: 'expense' },
  { id: 5, date: '2024-03-10', amount: 450, category: 'Freelance', type: 'income' },
];

export const DashboardProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState('admin'); 
  const [theme, setTheme] = useState('light');

  const addTransaction = (t) => {
    if (role === 'admin') setTransactions([t, ...transactions]);
  };

  return (
    <DashboardContext.Provider value={{ transactions, role, setRole, theme, setTheme, addTransaction }}>
      <div data-theme={theme}>{children}</div>
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
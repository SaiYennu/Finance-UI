import React, { useMemo } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import './Summary.css';

const Summary = () => {
  const { transactions } = useDashboard();
  const stats = useMemo(() => {
    const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    return { income, expense, balance: income - expense };
  }, [transactions]);

  return (
    <div className="grid">
      <div className="card">
        <div className="label">TOTAL BALANCE</div>
        <div className="value">${stats.balance.toLocaleString()}</div>
      </div>
      <div className="card" style={{ borderLeft: '4px solid var(--success)' }}>
        <div className="label" style={{ color: 'var(--success)' }}>INCOME</div>
        <div className="value">${stats.income.toLocaleString()}</div>
      </div>
      <div className="card" style={{ borderLeft: '4px solid var(--danger)' }}>
        <div className="label" style={{ color: 'var(--danger)' }}>EXPENSES</div>
        <div className="value">${stats.expense.toLocaleString()}</div>
      </div>
    </div>
  );
};
export default Summary;
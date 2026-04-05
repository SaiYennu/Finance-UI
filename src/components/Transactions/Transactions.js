import React, { useState } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { Plus, Search } from 'lucide-react';
import './Transactions.css';

const Transactions = () => {
  const { transactions, role, addTransaction } = useDashboard();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = transactions.filter(t => 
    t.category.toLowerCase().includes(search.toLowerCase()) && 
    (filter === 'all' || t.type === filter)
  );

  return (
    <div className="tableCard">
      <div className="toolbar">
        <h3>Transactions</h3>
        <div className="controls">
          <input className="search" placeholder="Search category..." onChange={(e) => setSearch(e.target.value)} />
          <select className="select" onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          {role === 'admin' && (
            <button className="addBtn" onClick={() => addTransaction({
              id: Date.now(), date: '2024-04-01', amount: 100, category: 'Miscellaneous', type: 'expense'
            })}>
              <Plus size={16} /> Add
            </button>
          )}
        </div>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr><th>DATE</th><th>CATEGORY</th><th>TYPE</th><th>AMOUNT</th></tr>
          </thead>
          <tbody>
            {filtered.map(t => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.category}</td>
                <td>
                  <span className="badge" style={{ 
                    background: t.type === 'income' ? '#dcfce7' : '#fee2e2', 
                    color: t.type === 'income' ? '#166534' : '#991b1b' 
                  }}>{t.type.toUpperCase()}</span>
                </td>
                <td style={{ color: t.type === 'income' ? 'var(--success)' : 'var(--danger)', fontWeight: 700 }}>
                  {t.type === 'income' ? '+' : '-'}${t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Transactions;
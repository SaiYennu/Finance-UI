import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useDashboard } from '../../context/DashboardContext';
import './Charts.css';

const Charts = () => {
  const { transactions } = useDashboard();
  const pieData = [
    { name: 'Income', value: transactions.filter(t => t.type === 'income').length },
    { name: 'Expense', value: transactions.filter(t => t.type === 'expense').length },
  ];
  const COLORS = ['#10b981', '#ef4444'];

  return (
    <div className="chartsGrid">
      <div className="card" style={{ height: '300px' }}>
        <h3 style={{ marginBottom: '1rem' }}>Financial Trend</h3>
        <ResponsiveContainer width="100%" height="90%">
          <AreaChart data={transactions}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" hide />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="amount" stroke="#3b82f6" fill="#3b82f620" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="card" style={{ height: '300px' }}>
        <h3>Category Split</h3>
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie data={pieData} innerRadius={60} outerRadius={80} dataKey="value">
              {pieData.map((entry, index) => <Cell key={index} fill={COLORS[index]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Charts;
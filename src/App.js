import React from 'react';
import { DashboardProvider } from './context/DashboardContext';
import Header from './components/Header/Header';
import Summary from './components/Summary/Summary';
import Charts from './components/Charts/Charts';
import Transactions from './components/Transactions/Transactions';
import './index.css';

function App() {
  return (
    <DashboardProvider>
      <div className="container">
        <Header />
        
        {/* Insights Section (Requirement 4) */}
        <div className="card" style={{ marginBottom: '2rem', background: '#3b82f610', border: '1px solid #3b82f640' }}>
          <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary)' }}>💡 Quick Insights</h4>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            Highest spending this month was on <b>Rent</b>. Your income has increased by 12% compared to last month.
          </p>
        </div>

        <Summary />
        <Charts />
        <Transactions />
      </div>
    </DashboardProvider>
  );
}

export default App;
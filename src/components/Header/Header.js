import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { Sun, Moon, ShieldCheck, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  const { role, setRole, theme, setTheme } = useDashboard();
  return (
    <header className="header">
      <div>
        <h1>Finance Dashboard</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          {role === 'admin' ? <ShieldCheck size={14} inline /> : <User size={14} inline />} {role.toUpperCase()} MODE
        </p>
      </div>
      <div className="controls">
        <select className="select" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin (Full Access)</option>
          <option value="viewer">Viewer (Read Only)</option>
        </select>
        <button className="iconBtn" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
};
export default Header;
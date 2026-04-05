# Finance Dashboard UI 📈

A clean, interactive, and responsive finance dashboard built with React.js. This project allows users to track financial activity, visualize spending patterns, and manage transactions based on user roles.

## 🚀 Live Demo
https://finance-ui-sepia.vercel.app

## 🛠️ Tech Stack
- **Frontend Framework:** React.js
- **Styling:** Custom CSS (Modular approach)
- **Charts:** Recharts
- **Icons:** Lucide-React
- **State Management:** React Context API

## ✨ Key Features

### 1. Dashboard Overview
- Summary cards for Total Balance, Income, and Expenses.
- **Time-based visualization:** Line chart showing balance trends.
- **Categorical visualization:** Pie chart showing spending breakdown.

### 2. Transaction Management
- Comprehensive list of transactions with Date, Category, and Type.
- **Search & Filtering:** Users can filter by category or transaction type.
- **Admin Actions:** Admins can add new transactions (simulated logic).

### 3. Role-Based Access Control (RBAC)
- **Admin Role:** Full access to view data and add transactions.
- **Viewer Role:** Read-only access. Actions like "Add Transaction" are hidden/disabled.
- Role-switcher toggle included in the header for demonstration purposes.

### 4. Smart Insights
- Dynamic insight box that highlights spending trends and balance status based on the current data.

### 5. UI/UX Enhancements
- **Dark Mode:** Fully functional dark mode toggle for better accessibility.
- **Responsiveness:** Mobile-first design that adapts from desktops to smartphones.
- **Empty States:** Graceful handling of "No data found" during searches.

## 🧠 Technical Approach & State Management
I chose the **React Context API** for state management to ensure a single source of truth for:
- **Global Data:** Centralized transaction list.
- **User Role:** Syncing permissions across different components.
- **Theming:** Handling Dark/Light mode transitions globally.

CSS was split into modular files to prevent style leakage and improve maintainability (Technical Quality).

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SaiYennu/Finance-UI.git
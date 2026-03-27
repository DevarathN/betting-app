# 🎮 Betting Card Matching Game

A full-stack betting-based card matching web application where users can place bets, play a number-matching game, and win rewards based on outcomes.

---

## 🚀 Features

### 🎯 Game Logic
- 10 cards (2 rows × 5 cards)
- Unique numbers in each row
- Same numbers across rows (shuffled positions)
- Card matching system:
  - ✅ Match → cards stay open
  - ❌ No match → cards close
- Anti-cheat mechanism:
  - Dynamic shuffle after each turn
  - No shuffle during selection
  - Matched cards remain fixed

---

### 💰 Betting System
- Users can place bets before each round
- Example:
  - ₹10 → ₹30 return
- Constraints:
  - Cannot play if balance is insufficient
  - Balance updates dynamically

---

### 👤 Authentication
- User Registration & Login
- Role-based access:
  - `admin`
  - `user`
- Protected routes:
  - Game & Wallet require login
  - Admin panel restricted

---

### 💳 Wallet System
- Add money
- Withdraw money
- Balance validation
- Prevents negative balance

---

### 🛠 Admin Panel
- View all registered users
- Track:
  - Email
  - Balance
  - Role
- Table-based UI

---

## 🧱 Tech Stack

### Frontend
- React.js
- React Router
- CSS (Custom styling)

### Backend (Planned / Required)
- Node.js
- Express.js
- MongoDB

---

## 📁 Folder Structure
betting-app/src/
│
├── components/
│ ├── Card.jsx
│ ├── GameBoard.jsx
│ ├── Wallet.jsx
│ └── Navbar.jsx
│
├── pages/
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Game.jsx
│ ├── WalletPage.jsx
│ └── Admin.jsx
│
├── services/
│ └── api.js
│
├── hooks/
│ └── useGame.js
│
├── context/
│ ├── AuthContext.jsx
│ └── AuthProvider.jsx
│
├── App.jsx
└── main.jsx

Inorder to access admin Panel in the project use the following credentials:
email: admin@gmail.com
password: testpass001

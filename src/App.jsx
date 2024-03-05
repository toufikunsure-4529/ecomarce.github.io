import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import MyState from './context/data/MyState';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import Order from './pages/order/Order';

function App() {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/*" element={<NoPage/>} /> {/* path="/*" means page not found to this component show */}
      </Routes>
    </Router>
    </MyState>
  )
}

export default App
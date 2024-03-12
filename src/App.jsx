import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import MyState from "./context/data/MyState";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import NoPage from "./pages/nopage/NoPage";
import Order from "./pages/order/Order";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedRoutes>
                <Order />
              </ProtectedRoutes>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutesForAdmin>
                <Dashboard />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRoutesForAdmin>
                <AddProduct />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRoutesForAdmin>
                <UpdateProduct />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route path="/*" element={<NoPage />} />{" "}
          {/* path="/*" means page not found to this component show */}
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "admin@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

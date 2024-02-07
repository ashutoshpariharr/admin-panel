import { useState } from "react";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/dashboard/Header";
import Sidebar from "./components/dashboard/Sidebar";
import Home from "./components/dashboard/Home";
import Product from "./components/orders/Product";
import OrderList from "./components/orders/OrderList";
import Signup from "./components/signup/signup";
import Report from "./components/dashboard/Report";
import Payment from "./components/payment/Payment";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

 

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<OrderList/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/report" element={<Report/>} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

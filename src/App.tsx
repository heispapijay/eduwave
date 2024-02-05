import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar, Promotion } from "./components";
import { About, Contact, Home, Login, PricingPage } from "./pages";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="m-3 app">
      <BrowserRouter>
        <Promotion />
        <Navbar />
        <div className="lg:m-6">
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

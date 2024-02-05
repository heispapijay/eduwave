import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar, Promotion } from "./components";
import { About, Contact, Home, Login, PricingPage } from "./pages";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="m-4">
      <BrowserRouter>
        <Promotion />
        <Navbar />
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

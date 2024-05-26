import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UserProfile from './PAGES/UserProfile/UserProfile.jsx';
import SliderPage from './PAGES/SliderPage/SliderPage.jsx';
import Login from './PAGES/Auth/Login.jsx';
import Signup from './PAGES/Auth/Signup.jsx';
import ForgotPassword from './PAGES/Auth/ForgotPassword.jsx';
import About from './COMPONENTS/UserProfile/About.jsx';  // Updated path

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SliderPage />} />
        <Route path="/user/:activepage" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div><h1>404 NOT FOUND</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

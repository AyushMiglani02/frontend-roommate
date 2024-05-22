import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UserProfile from './PAGES/UserProfile/UserProfile.jsx';
import SliderPage from './PAGES/SliderPage/SliderPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SliderPage />} />
        <Route path='/user/:activepage' element={<UserProfile />} />
        {/* <Route path="/*" element={<div><h1>404 NOT FOUND</h1></div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

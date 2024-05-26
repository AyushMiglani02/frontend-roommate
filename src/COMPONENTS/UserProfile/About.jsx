import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='extrapage'>
      <div className='pgleft pgcommon'>
        <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' />
        <div>
          <h1>Our Story</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
        </div>
      </div>
      <div className='pgright pgcommon'>
        <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' />
        <div>
          <h1>Who are we</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </div>
      </div>
      <div className='pgleft pgcommon'>
        <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' />
        <div>
          <h1>Our Story</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </div>
      </div>
    </div>
  );
};

export default About;

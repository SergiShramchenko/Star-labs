import React from 'react';

import './menuItem.scss';

export default ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>BUY NOW</span>
    </div>
  </div>
);

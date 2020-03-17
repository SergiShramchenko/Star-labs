import React from 'react';

import './customButton.scss';

export default ({ children, isGoogleSignIn, iverted, ...otherProps }) => (
  <button
    className={`${iverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

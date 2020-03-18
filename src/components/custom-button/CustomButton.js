import React from 'react';

import './customButton.scss';

import { CustomButtonContainer } from './custom-button.styles';

export default ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

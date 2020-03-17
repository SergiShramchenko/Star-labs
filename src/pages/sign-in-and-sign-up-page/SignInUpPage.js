import React from 'react';

import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';

import './signInUpPage.scss';

export default () => (
  <div className='sign-in-up'>
    <SignIn />
    <SignUp />
  </div>
);

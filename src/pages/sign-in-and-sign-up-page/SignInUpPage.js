import React from 'react';

import SignIn from '../../components/sign-in/SingIn';
import SignUp from '../../components/sign-up/SignUp';

import './signInUpPage.scss';

export default () => (
  <div className='sign-in-up'>
    <SignIn />
    <SignUp />
  </div>
);

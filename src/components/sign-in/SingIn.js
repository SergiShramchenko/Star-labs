import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input';
import CustomButton from '../custom-button';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import './signIn.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: '', password: '' });
    // } catch (err) {
    //   console.log(err);
    // }
    emailSignInStart(email, password);
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            label='email'
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            label='password '
            required
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton
              type='button'
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);

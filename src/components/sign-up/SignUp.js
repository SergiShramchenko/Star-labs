import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInpit from '../form-input';
import CustomButton from '../custom-button';

// import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';

import { signUpStart } from '../../redux/user/user.actions';

import './signUp.scss';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert(`password don't match`);
      return;
    }

    signUpStart({ displayName, email, password });

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDoc(user, { displayName });

    // this.setState({
    //   displayName: '',
    //   email: '',
    //   password: '',
    //   confirmPassword: ''
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>Sign up with you email and pasword</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInpit
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          ></FormInpit>
          <FormInpit
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          ></FormInpit>
          <FormInpit
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          ></FormInpit>
          <FormInpit
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm password'
            required
          ></FormInpit>
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);

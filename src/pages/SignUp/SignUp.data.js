import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGNUP_MUTATION } from '../../grapqhl/mutations';
import SignUp from './SignUp';

const SignUpData = props => {
  const [signUp] = useMutation(SIGNUP_MUTATION);

  return <SignUp signUp={signUp} {...props} />;
};

export default SignUpData;

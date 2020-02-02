import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_MUTATION } from '../../grapqhl/mutations';
import Login from './Login';

const LoginData = props => {
  const [login] = useMutation(LOGIN_MUTATION);

  return <Login login={login} {...props} />;
};

export default LoginData;

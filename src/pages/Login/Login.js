import React from 'react'
import { Formik } from 'formik';
import { userIsLoggedIn, setAuthToken } from '../../utils/userUtils';
import { Error } from '../../shared/comps/Error';
import { LoginValidation } from './Login.validation';
import { Row, Col, Input, Button} from 'antd'

const Login = ({login, history}) => {
  if (userIsLoggedIn()) history.push('/')

  const handleSubmit = async (data,actions) => {
    const { email, password } = data;
    const { setSubmitting, setErrors } = actions;
    setSubmitting(true);
  
    try {
      const {
        data: {
          login: { token, errors }
        }
      } = await login({ variables: {email, password } });
  
      if (errors) {
        Error(true, errors)
      } else {
        setAuthToken(token);
        Error(false, '', 'Login Successful');
        history.push('/');
      }
    } catch (e) {
      Error(true,'Login Failed. Please confirm username and password.')
    }
    return setSubmitting(false);
  };
  return (

    <Formik
      initialValues={{ email: '',
      password: '' }}
      validationSchema={LoginValidation}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions)
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Row>
            <Col span={8}>
            <label htmlFor="email">Email Address</label>
            <Input
              id="email"
              name="email"
              type="email"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.email}
            /><br/>
            {props.errors.email && <div className="feedback">{props.errors.email}</div>}
            </Col>
            <Col span={8}>
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.password}
            /><br/>
            {props.errors.password && <div className="feedback">{props.errors.password}</div>}
            </Col>
          </Row>
          <Row>
            <Col span={24}> <Button type="submit">Submit</Button></Col>
          </Row>

          
         
      </form>
      )}
    </Formik>
  );
}

export default Login


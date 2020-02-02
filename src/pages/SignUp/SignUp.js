import React from 'react'
import { Formik } from 'formik';
import { setAuthToken, userIsLoggedIn } from '../../utils/userUtils';
import { Error } from '../../shared/comps/Error';
import { signUpValidation } from './SignUp.validation';
import { Row, Col, Input, Button} from 'antd'

const SignUp = ({signUp, history}) => {

  if (userIsLoggedIn()) history.push('/')

  const handleSubmit = async (data, actions) => {
    const { firstName, lastName, email, password } = data;
    const { setSubmitting, setErrors } = actions;
    setSubmitting(true);

    try {
      const {
        data: {
          signUp: { token, errors }
        }
      } = await signUp({ variables: { firstName, lastName, email, password } });

      if (errors) {
        Error(true, errors)
      } else {
        setAuthToken(token);
        Error(false, '', 'Account creation was successful. Welcome!');
      }
    } catch (e) {
      Error(true,'Account Creation Failed. Please confirm username and password.');
    }
    return setSubmitting(false);
  };

  return (

    <Formik
      initialValues={{ 
      firstName: '',
      lastName: '',
      email: '',
      password: '' }}
      validationSchema={signUpValidation}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions)
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Row>
            <Col span={12}>
              <label htmlFor="firstName">First Name</label>
              <Input
                id="firstName"
                name="firstName"
                type="firstName"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.firstName}
              />
              {props.errors.firstName && <div className="feedback">{props.errors.firstName}</div>}
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <label htmlFor="email">Last Name</label>
              <Input
                id="lastName"
                name="lastName"
                type="lastName"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.lastName}
              />
              {props.errors.lastName && <div className="feedback">{props.errors.lastName}</div>}
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <label htmlFor="email">Email Address</label>
              <Input
                id="email"
                name="email"
                type="email"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.email}
              />
              {props.errors.email && <div className="feedback">{props.errors.email}</div>}
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <label htmlFor="email">Password</label>
              <Input
                id="password"
                name="password"
                type="password"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.password}
              />
              {props.errors.password && <div className="feedback">{props.errors.password}</div>}
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </form>
      )}
    </Formik>
  );
    };
  

export default SignUp


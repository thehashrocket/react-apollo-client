import { object, string } from 'yup';

export const LoginValidation = () =>
  object().shape({
    email: string()
      .email('Invalid email')
      .required('Email is required'),
    password: string().required('Password is required')
  });

export const LoginDefaults = () => ({
  email: '',
  password: '',
});

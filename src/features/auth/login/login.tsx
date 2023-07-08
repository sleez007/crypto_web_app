import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { useLoginMutation } from '../slice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hook'
import { setUser } from '../../../store/global.store';

const TOKEN_KEY = "TOKEN_KEY"


const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    // .min(8, 'Password should be of minimum 8 characters length')
    // .max(12, 'Password should be of maximum 12 characters length')
    .required('Password is required'),
});

const Login = () =>{
  //const toastId = React.useRef<string | number>('');
  // const email= useAppSelector((state) => state.auth.email)
  const dispatch = useAppDispatch()
  const [login, {isLoading }] = useLoginMutation()
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // toast("Wow so easy!");
      //alert(JSON.stringify(values, null, 2));
      login({email: values.email, password: values.password}).unwrap()
      .then((d)=>{
       // toastId.current = toast.success('Login success')
        localStorage.setItem(TOKEN_KEY, d.token)
        toast.dismiss()
        toast.success('Login success');
        dispatch(setUser({email: d.email, firstName: d.firstName }))
        //alert(JSON.stringify(d))
        navigate('/dashboard')

      })
      .catch((err)=>{
        toast.dismiss()
        toast.error(err.data.message)
      } )
    },
  });
  
  return (
    <div className='login-form container'>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          variant="outlined"
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          {isLoading ?'Loading...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}

export default Login;

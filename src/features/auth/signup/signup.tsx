import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { useSignupMutation } from '../slice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// const maxDate = new Date()
// maxDate.setFullYear(maxDate.getFullYear() - 18)

const validationSchema = yup.object({
  firstName: yup.string().min(2, 'Cannot be less than 2 characters').required('Firstname is required'),
  lastName: yup.string().min(2, 'Cannot be less than 2 characters').required('Lastname is required'),
 //dob: yup.date().max(maxDate).required(),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .max(12, 'Password should be of maximum 12 characters length')
    .required('Password is required'),
});


export default function Signup() {
  const [signup, {isLoading, isError, isSuccess, data}] = useSignupMutation()
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signup({...values}).unwrap()
      .then((d)=>{
       // toastId.current = toast.success('Login success')
        toast.dismiss()
        toast.success(d.message);
        navigate('/login')

      })
      .catch((err)=>{
        toast.dismiss()
        toast.error(err.data.message)
      } )
    },
  });

  
  return (
    <div className='login-form container'>
      <h2>Create Account</h2>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          variant="outlined"
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          variant="outlined"
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
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
{/*          
        <DateField 
          fullWidth 
          name='dob' 
          variant='outlined' 
          helperText={formik.touched.dob && formik.errors.dob} 
          label="Basic date field"  
          value={formik.values.dob} 
        //  // onError={(error, value) => alert("bvhv")}
          onChange={value => {
            console.log(extractTime(value));
            formik.setFieldValue('dob', extractTime(value), true)
          }}   
        /> */}
    
        
        <Button color="primary" variant="contained" fullWidth type="submit">
          {isLoading ?'Loading...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}

import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { DateField } from '@mui/x-date-pickers';
import moment from 'moment';

const maxDate = new Date()
maxDate.setFullYear(maxDate.getFullYear() - 18)

const validationSchema = yup.object({
  firstName: yup.string().min(2, 'Cannot be less than 2 characters').required('Firstname is required'),
  lastName: yup.string().min(2, 'Cannot be less than 2 characters').required('Lastname is required'),
  dob: yup.date().max(maxDate).required(),
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
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const  extractTime = (val : any ) => moment(val.BeginDate_1).format('YYYY-MM-DD');

  
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
        />
    
        
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

import React from 'react'
import { IProduct, useGetProductByIdQuery, usePurchaseUtilMutation, useVerifyMutation } from '../slice'
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {  TextField } from '@mui/material';
import { FlutterWaveButton, closePaymentModal} from 'flutterwave-react-v3';
import { useAppSelector } from '../../../store/hook';
import { RootState } from '../../../store';


const fwConfig = {
    public_key: 'FLWPUBK_TEST-f6ff3443af2ad94f7fd23639e3dadb68-X',
    // tx_ref: Date.now().toString(),
   // amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
};


export default function Productdetail() {
    const {id }= useParams()
    const email = useAppSelector((state: RootState) => state.global.email);
    const firstName = useAppSelector((state: RootState) => state.global.firstName);
    const { data}= useGetProductByIdQuery(id ? parseInt(id) : 0 )
    if(!data ) return <></>
    const prod = new ActualProduct().getProductType(data,firstName!!, email!! )
    return prod;
  
}

abstract class ProductType {
    getProductType(data: IProduct, name: string, email: string){
        switch(data.categoryId){
            case 1 : {
                return <PowerDetails data={data } firstName={name} email={email} />
            }
            case 2: {
                return <AirTimeDetails data={data} firstName={name} email={email}  />
            }
            case 3: {
                return <InternetDetails data={data} firstName={name} email={email}  />
            }
            case 4: {
                return <DataDetails data={data} firstName={name} email={email}  />
            }
            case 5: {
                return <CableDetails data={data} firstName={name} email={email}  />
            }
            default : {
                return <></>
            }
        }
    }
}

class ActualProduct extends ProductType{}

type Props = {
    data: IProduct,
    firstName: string,
    email: string
}

const PowerDetails = ({data, firstName, email}: Props) => {
    const [name, setName] = React.useState<string>('')
    const [goAndVerify, ] = useVerifyMutation()
    const [payNow] = usePurchaseUtilMutation()
    const validationSchema = yup.object({
        meterNo: yup
          .string()
          .max(11)
          .min(11)
          .required('Email is required'),
        amount: yup
          .string()
          .required('Password is required'),
    });

    const callServerAndCreditAccount = (res) => {
        console.log(res)
        payNow({
            country: 'NG',
            customer: formik.values.meterNo,
            amount: parseFloat(formik.values.amount),
            type: data.billerName,
            reference: Date.now().toString(),
        })
    }
    const formik = useFormik({
        initialValues: {
          meterNo: '',
          amount: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
        //  handleFlutterPayment({
            
        //     callback: (resp) =>{

        //     },
        //     onClose: () => {
                
        //     },
        //  })
        },
      });
    const verify = (e: React.ChangeEvent<any>) =>{
        setName('')
        formik.handleChange(e)
        if(e.target.value.length === 11){
            goAndVerify({
                billerCode: data.billerCode,
                customer: e.target.value,
                itemCode: data.itemCode  
            }).unwrap().then((d: any) => setName(d.data.name))
        }
    }
  return (
    <div>
        <h2>Power information</h2>
        <p>{data.billerName}</p>
        <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="meterNo"
          name="meterNo"
          label="Meter Number"
          value={formik.values.meterNo}
          onChange={verify}
          variant="outlined"
          error={formik.touched.meterNo && Boolean(formik.errors.meterNo)}
          helperText={formik.touched.meterNo && formik.errors.meterNo}
        /><br/> <br />
        <p>{name}</p>
        {name !=="" && <> <br/> <br /></>}
        <TextField
          fullWidth
          id="amount"
          name="amount"
          label="Amount"
          variant="outlined"
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
        />
        <br/> <br />
        <FlutterWaveButton text='Pay with Flutterwave!' {
            ...{
                ...fwConfig, 
                amount: parseFloat(formik.values.amount), 
                tx_ref: Date.now().toString(),
                customer: {
                    email: email,
                    phone_number: '0708765444',
                    name: firstName,
                },
            } 
            } onClose={()=>closePaymentModal()} callback={(res)=> callServerAndCreditAccount(res) } />
        {/* <Button disabled={name === ''} color="primary" variant="contained" fullWidth type="submit">
            {isLoading ?'Loading...' : 'Purchase'}
        </Button> */}
      </form>
    </div>
  )
}

const AirTimeDetails = ({data}: Props) => {
  return (
    <div>airtime_detail</div>
  )
}

const InternetDetails = ({data}: Props) => {
    return (
      <div>airtime_detail</div>
    )
  }
const DataDetails = ({data}: Props) => {
    return (
        <div>data_detail</div>
    )
}
const CableDetails = ({data}: Props) => {
    return (
        <div>airtime_detail</div>
    )
}
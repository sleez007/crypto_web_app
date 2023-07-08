import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IProductCategory{
    categoryName: string;
    parameter: string
    products: IProduct[]
}

export interface IProduct {
    id: number;
    categoryId: number;
    billerName: string;
    billerCode: string;
    itemCode: string;
    fee: string;
    amount: string;
    labelName: string;
}

export interface VerifPayload {
    billerCode: string,
    customer: string,
    itemCode: string  
}

export interface VerifyResponse {
    data :{
        name:string
    }
}

export interface IPurchase {
    country: string;
    customer: string;
    amount: number;
    type: string;
    reference: string;
}

export interface IPurchaseResponse{
    status: string;
    message: string
    data: {
        customer: string;
        amount: number,
        type: string;
        flw_ref: string;
        tx_ref: string;
    }
}

export const productSlice = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        getProducts: builder.query<IProductCategory[], void>({
            query: () => ({
                url: 'products/all',
                method: 'GET'
            })
        }),
        getProductById: builder.query<IProduct, number>({
            query: (id) => ({
                url: 'products/'+id,
                method: 'GET'
            })
        }),
        verify: builder.mutation<VerifyResponse, VerifPayload>({
            query: (data) => ({
                url: 'products/validate/flw',
                body: data,
                method: 'POST',
            })
        }),
        purchaseUtil: builder.mutation<IPurchaseResponse, IPurchase>({
            query: (data) => ({
                url: 'products/settle/flw',
                body: data,
                method: 'POST',
            })
        })
    })
});

export const { useGetProductsQuery, useGetProductByIdQuery,  useVerifyMutation, usePurchaseUtilMutation} = productSlice;


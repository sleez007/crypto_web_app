import React from 'react'
import { IProductCategory, useGetProductsQuery } from './slice';
import { Table, Tag } from 'antd';
import { Link } from 'react-router-dom';

// const dataSource = [
//     {
//     //   key: '1',
//       name: 'Mike',
//       age: 32,
//       address: '10 Downing Street',
//       price: '$3463',
//       status: 'Available'
//     },
//     // {
//     //   key: '2',
//     //   name: 'John',
//     //   age: 42,
//     //   address: '10 Downing Street',
//     //   price: '$3463',
//     //   status: 'On Delivery'
//     // },
//     // {
//     //   key: '3',
//     //   name: 'John',
//     //   age: 42,
//     //   address: '10 Downing Street',
//     //   price: '$3463',
//     //   status: 'New Order'
//     // },
    
//   ];
  
  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'billerName',
      key: 'billerName',
    },
    {
      title: 'Biller Code',
      dataIndex: 'billerCode',
      key: 'billerCode',
    },
    {
      title: 'Fees',
      dataIndex: 'fee',
      key: 'fee',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
      },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Purchase',
      dataIndex: 'id',
      key: 'id',
      render:  ( id: any) => (<Link to={'./detail/'+id}><Tag>Pay {id}</Tag></Link>)
    },
  ];

const Products = () => {
    const { data=[]}= useGetProductsQuery()
  return (
        <>
            {data.map((category: any, i: number) => <ProductTable key={i} category={category} />)}
        </>
  )
}



type Props = {
    category: IProductCategory
}

function ProductTable({category}: Props) {
const products = category.products.map((d, i)=> ({...d, key: i}))
  return (
    <div>
        <div className="sub-tab__head flex">
            <h2>{category.categoryName} ({category.products.length})</h2>
            {/* <small><a href="/">See all</a></small> */}
        </div>
        <div className='sub-tab'>
            <Table  dataSource={products} columns={columns} pagination={false} />
        </div>
        
   </div>
  )
}

export default Products;
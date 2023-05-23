import { Table, Tag } from 'antd';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    price: '$3463',
    status: 'Available'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    price: '$3463',
    status: 'On Delivery'
  },
  {
    key: '3',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    price: '$3463',
    status: 'New Order'
  },
  
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render:  ( tag: any) => (<Tag>{tag}</Tag>)
  },
];

export default function Order() {
  return (
    <div>
     <div className="sub-tab__head flex">
          <h2>Latest Orders</h2>
          <small><a href="/">See all</a></small>
      </div>
      <div className='sub-tab'>
        <Table  dataSource={dataSource} columns={columns} pagination={false} />
      </div>
      
    </div>
  )
}

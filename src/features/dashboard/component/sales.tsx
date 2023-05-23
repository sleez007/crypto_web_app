import React from 'react'
import { faker } from '@faker-js/faker';
import Moment from 'react-moment';

interface Sales {
    avatar: string;
    fullName: string;
    time: Date;
    amount: string
}

const createRandomSales =(): Sales =>{
    return {
      fullName: faker.internet.displayName(),
      time: faker.date.anytime(),
      amount: faker.finance.amount(5, 1000, 2, '₦', true),
      avatar: faker.internet.avatar()
      ,
    };
}

export const sales: Sales[] = faker.helpers.multiple(createRandomSales, {
    count: 7,
  });

export default function SalesComponent() {
  return (
    <div className='sales'>
        <div className="sales__head flex">
            <h2>Recent Sales</h2>
            <small><a href="/">See all</a></small>
        </div>
        <div className="sales__list">
            {
                sales.map(sale =>(
                    <div className='flx-item'>
                        <div className='flex gap-1 inw'>
                            <img src={sale.avatar} alt={sale.fullName} />
                            <div>
                                <h2>{sale.fullName}</h2>
                                <p><Moment fromNow>{sale.time.toString()}</Moment></p>
                            </div>
                        </div>
                        <span>{sale.amount}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

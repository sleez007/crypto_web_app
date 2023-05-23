import React from 'react';
import Stat from './component/stat';
import Chart from './component/chart';
import Pipe from './component/pipe';
import Order from './component/order';
import Sales from './component/sales';

interface IStat{
  title: string,
  revenue: number,
  margin: string,
  shouldFormat?: boolean
  icon: string
}

const statistics: IStat[] = [
  {
    title: 'Total Revenue',
    revenue: 11354.00,
    margin: '7.72%',
    icon: 'bx-bullseye',
  },
  {
    title: 'Total Customers',
    revenue: 45439,
    margin: '7.72%',
    icon: ' bx-bar-chart',
    shouldFormat: false
  },
  {
    title: 'Total Profit', 
    revenue: 83540,
    margin: '7.72%',
    icon: 'bx-pie-chart-alt'
  },
]

// type bag = typeof statistics

export default function Dashboard() {

  return (
    <div>
      <div className="d-main">
        <div className="d-main__content">
          <div className="summary flex">
            {
              statistics.map(
                stat => (
                  <Stat key={stat.title} stat={stat} />
                )
              )
            }
          </div>
          <Pipe />
          <Order />
        </div>
        <aside className="d-main__aside">
          <Chart />
          <Sales />
        </aside>
      </div>
    </div>
  )
}

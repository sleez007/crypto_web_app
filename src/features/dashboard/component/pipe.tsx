import React from 'react'
import { Bar, BarChart, CartesianGrid,  ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  type selectedBtn =  'DAY' | 'WEEK' | 'MONTH';
export default function Pipe() {
  const [select, setSelected] = React.useState<selectedBtn>('WEEK')
  const [d, updateD] = React.useState(data)
  
  return (
    <div className="chart stst">
       <div className='lnnn'>
            <h2>Financial Summary</h2>

            <div className='flex nnt'>
              <button onClick={()=> {
                setSelected('DAY');
                updateD([...data.reverse()])
              }} className={`${select === 'DAY' ? 'active': 'null'}`}>Day</button>
              <button onClick={()=> setSelected('WEEK')} className={`${select === 'WEEK' ? 'active': 'null'}`}>Week</button>
              <button onClick={()=> setSelected('MONTH')} className={`${select === 'MONTH' ? 'active': 'null'}`}>Month</button>
            </div>
       </div>
        <ResponsiveContainer width="99%" height="280px" aspect={3.5} >
        <BarChart
          data={d}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar barSize={7} radius={6} dataKey="pv" fill="#020202" />
          <Bar barSize={7} radius={6} dataKey="uv" fill="#E1D4C4" />
          <Bar barSize={7} radius={6} dataKey="amt" fill="#BBC1BA" />
        </BarChart>
        </ResponsiveContainer>
    </div>
  )
}


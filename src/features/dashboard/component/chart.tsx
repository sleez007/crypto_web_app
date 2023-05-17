import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, ResponsiveContainer,  Tooltip } from 'recharts';

const data = [
    {
      "name": "Power",
      "Jan": 4000,
      "Feb": 2400,
      "Mar": 2400
    },
    {
      "name": "Data",
      "Jan": 3000,
      "Feb": 1398,
      "Mar": 2210
    },
    {
      "name": "Airtime",
      "Jan": 2000,
      "Feb": 9800,
      "Mar": 2290
    }
  ]

export default function Chart() {
  return (
    <div className="chart">
        <h2>Summary</h2>
        <ResponsiveContainer height='250px' width="99%" aspect={1.5} >
            <LineChart data={data} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Jan" stroke="#8884d8" />
                <Line type="monotone" dataKey="Feb" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Mar" stroke="#B3D3EA" />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

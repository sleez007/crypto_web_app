import React from 'react'
import { FormatInput } from '../../../util/formatter'

export default function Stat({stat}: any) {
  return (
    <div className="summary__card">
        <div className='first_row'>
            <p>{stat.title}</p>
            <span><i className={`bx ${stat.icon}`}></i></span>
        </div>
        <div className='second_row'>
            <p>{stat.shouldFormat === false ? stat.revenue : FormatInput.formatToCurrency(stat.revenue)}</p>
            <span>{stat.margin}</span>
        </div>
    </div>
  )
}

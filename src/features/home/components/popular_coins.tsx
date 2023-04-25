import React from 'react'

export default function popularCoins() {
  return (
    <div className="popular">
      <div className="container">
        <div className="popular__heading flex">
          <h1>Popular Cryptocurrencies</h1>
          <div className='flex gap-1'>
            <span>View more markets</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon"><path fillRule="evenodd" clipRule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg>
          </div>
        </div>
        <div className="popular__list list">
          <div className="list__header flex">
            <div>Name</div>
            <div className="pin">Last Price</div>
            <div className="pin">24h Change</div>
            <div>Market Cap</div>
          </div>
        </div>
      </div>
    </div>
  )
}

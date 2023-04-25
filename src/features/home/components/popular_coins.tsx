import React from 'react'
import btc from '../../../assets/static/images/btc.png';
import busd from '../../../assets/static/images/busd.png';
import gmt from '../../../assets/static/images/gmt.png';
import bnb from '../../../assets/static/images/bnb.png';

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
          <div className="list__header heading">
            <div>Name</div>
            <div>Last Price</div>
            <div>24h Change</div>
            <div className="rm nx">Market Cap</div>
          </div>

          <div className="list__header hov">
            <div className="flex ext gap-1">
              <img src={btc} alt="Bitcoin"  />
              <h2>BTC</h2>
              <span>BTC</span>
            </div>
            <div className="pin1">$300.7</div>
            <div className="pin">+2.18%</div>
            <div className="rm">$47,482M</div>
          </div>
          <div className="list__header hov">
            <div className="flex ext gap-1">
              <img src={busd} alt="Busd"  />
              <h2>Busd</h2>
              <span>Busd</span>
            </div>
            <div className="pin1">$300.7</div>
            <div className="pin">+2.18%</div>
            <div className="rm">$47,482M</div>
          </div>
          <div className="list__header hov">
            <div className="flex ext gap-1">
              <img src={gmt} alt="Bitcoin"  />
              <h2>GMT</h2>
              <span>GMT</span>
            </div>
            <div className="pin1">$300.7</div>
            <div className="pin">+2.18%</div>
            <div className="rm">$47,482M</div>
          </div>
          <div className="list__header hov">
            <div className="flex ext gap-1">
              <img src={bnb} alt="Bitcoin"  />
              <h2>BNB</h2>
              <span>BNB</span>
            </div>
            <div className="pin1">$300.7</div>
            <div className="pin">+2.18%</div>
            <div className="rm">$47,482M</div>
          </div>
        </div>
        <div className="popular__end">
          <p className="theme--text">Sign up now to build your own portfolio for free!</p>
          <button className="btn btn--primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}
